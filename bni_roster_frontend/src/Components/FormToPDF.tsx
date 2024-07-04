import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface MemberDetail {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  memberPhoto: File | null;
  companyPhoto: File | null;
}

const FormToPDF: React.FC = () => {
  const [step, setStep] = useState(1);
  const [chapterLogo, setChapterLogo] = useState<File | null>(null);
  const [members, setMembers] = useState<MemberDetail[]>([{ id: 1, name: '', company: '', email: '', phone: '', category: '', memberPhoto: null, companyPhoto: null }]);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [chapterName, setChapterName] = useState('');
  const [location, setLocation] = useState('');
  const [memberSize, setMemberSize] = useState('');
  const [regionalRank, setRegionalRank] = useState('');
  const [allIndiaRank, setAllIndiaRank] = useState('');
  const [globalRank, setGlobalRank] = useState('');

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        .page-break {
          page-break-before: always;
        }
      }
      .circular-image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
      }
    `;
    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const validateFile = (file: File) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PNG, JPEG, or GIF file.');
      return false;
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      alert('File size should be less than 2MB');
      return false;
    }
    return true;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, memberId?: number, photoType?: 'memberPhoto' | 'companyPhoto') => {
    const file = event.target.files?.[0];
    if (file && validateFile(file)) {
      if (memberId !== undefined && photoType) {
        setMembers(members.map(member => 
          member.id === memberId ? { ...member, [photoType]: file } : member
        ));
      } else {
        setChapterLogo(file);
      }
    }
  };

  const addMember = () => {
    setMembers([...members, { id: Date.now(), name: '', company: '', email: '', phone: '', category: '', memberPhoto: null, companyPhoto: null }]);
  };

  const deleteMember = (id: number) => {
    if (members.length > 1) {
      setMembers(members.filter(member => member.id !== id));
    } else {
      alert("You can't delete the last member.");
    }
  };

  const handleMemberChange = (id: number, field: keyof MemberDetail, value: string) => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const validateForm = () => {
    if (!chapterName || !location || !memberSize || !regionalRank || !allIndiaRank || !globalRank || !chapterLogo) {
      alert('Please fill in all chapter details and upload a chapter logo.');
      return false;
    }

    for (const member of members) {
      if (!member.name || !member.company || !member.email || !member.phone || !member.category || !member.memberPhoto || !member.companyPhoto) {
        alert('Please fill in all member details and upload both member and company photos for each member.');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setShowPreview(true);
      setStep(2);
    }
  };

  const Preview = () => (
    <div className="mt-5">
      <h2 className="h3 mb-4 text-center">Preview</h2>
      
      {/* Chapter Details Page */}
      <div className="card mb-5">
        <div className="card-body text-center">
          <h3 className="card-title mb-4">Chapter Details</h3>
          {chapterLogo && (
            <div className="mb-4 d-flex justify-content-center">
              <img src={URL.createObjectURL(chapterLogo)} alt="Chapter Logo" className="circular-image" />
            </div>
          )}
          <p><strong>Chapter Name:</strong> {chapterName}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Member Size:</strong> {memberSize}</p>
          <p><strong>Regional Rank:</strong> {regionalRank}</p>
          <p><strong>All India Rank:</strong> {allIndiaRank}</p>
          <p><strong>Global Rank:</strong> {globalRank}</p>
        </div>
      </div>

      {/* Member Details Pages */}
      {members.map((member, index) => (
        <div key={member.id} className="card mb-5 page-break">
          <div className="card-body text-center">
            <h3 className="card-title mb-4">Member {index + 1}</h3>
            <div className="d-flex justify-content-center mb-4">
              {member.memberPhoto && (
                <div className="mx-2">
                  <img src={URL.createObjectURL(member.memberPhoto)} alt="Member Photo" className="circular-image" />
                </div>
              )}
              {member.companyPhoto && (
                <div className="mx-2">
                  <img src={URL.createObjectURL(member.companyPhoto)} alt="Company Photo" className="circular-image" />
                </div>
              )}
            </div>
            <p><strong>Name:</strong> {member.name}</p>
            <p><strong>Company:</strong> {member.company}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
            <p><strong>Category:</strong> {member.category}</p>
          </div>
        </div>
      ))}
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => {setShowPreview(false); setStep(1);}}>Edit</button>
        <button className="btn btn-success ms-2" onClick={() => setStep(3)}>Generate PDF</button>
      </div>
    </div>
  );

  return (
    <div className="container py-4">
      <h1 className="display-4 mb-4 text-center">FORM TO <span className="text-danger">PDF</span></h1>
      
      <div className="row mb-5">
        {[1, 2, 3].map((num) => (
          <div key={num} className="col-md-4 text-center">
            <div className={`rounded-circle ${num <= step ? 'bg-success' : 'bg-secondary'} text-white d-inline-flex align-items-center justify-content-center mb-2`} style={{width: '3rem', height: '3rem'}}>{num}</div>
            <p className="mb-3">Step {num}</p>
            <p className="small">step{num}:{num === 1 ? 'Fill the form' : num === 2 ? 'preview' : 'Download the pdf'}</p>
          </div>
        ))}
      </div>

      {!showPreview ? (
        <>
          <div className="mb-5">
            <h2 className="h3 mb-4"><span className="text-success">CHAPTER</span> DETAILS</h2>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" placeholder="Chaptername" className="form-control" value={chapterName} onChange={(e) => setChapterName(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="location" className="form-control border-primary" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="member size" className="form-control" value={memberSize} onChange={(e) => setMemberSize(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="regional rank" className="form-control" value={regionalRank} onChange={(e) => setRegionalRank(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="All india rank" className="form-control" value={allIndiaRank} onChange={(e) => setAllIndiaRank(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="global rank" className="form-control" value={globalRank} onChange={(e) => setGlobalRank(e.target.value)} required />
              </div>
            </div>
            <div className="mt-3">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/png,image/jpeg,image/gif"
                onChange={handleFileUpload}
                required
              />
              <button 
                className="btn btn-light rounded-circle me-2"
                onClick={() => fileInputRef.current?.click()}
              >
                <i className="bi bi-plus"></i>
              </button>
              <span>Upload chapter logo</span>
              {chapterLogo && <span className="ms-2 text-success">File uploaded: {chapterLogo.name}</span>}
            </div>
          </div>

          {members.map((member, index) => (
            <div key={member.id} className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h3">MEMBER DETAILS {index + 1}</h2>
                <button className="btn btn-danger" onClick={() => deleteMember(member.id)}>
                  <i className="bi bi-trash"></i> Delete
                </button>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" placeholder="Membername" className="form-control" value={member.name} onChange={(e) => handleMemberChange(member.id, 'name', e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="companyname" className="form-control" value={member.company} onChange={(e) => handleMemberChange(member.id, 'company', e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="email" className="form-control" value={member.email} onChange={(e) => handleMemberChange(member.id, 'email', e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <input type="tel" placeholder="phone" className="form-control" value={member.phone} onChange={(e) => handleMemberChange(member.id, 'phone', e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="category" className="form-control" value={member.category} onChange={(e) => handleMemberChange(member.id, 'category', e.target.value)} required />
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="file"
                  id={`memberPhoto${member.id}`}
                  style={{ display: 'none' }}
                  accept="image/png,image/jpeg,image/gif"
                  onChange={(e) => handleFileUpload(e, member.id, 'memberPhoto')}
                  required
                />
                <button 
                  className="btn btn-light rounded-circle me-2"
                  onClick={() => document.getElementById(`memberPhoto${member.id}`)?.click()}
                >
                  <i className="bi bi-plus"></i>
                </button>
                <span className="me-3">Member photo</span>
                {member.memberPhoto && <span className="text-success">File uploaded: {member.memberPhoto.name}</span>}
                
                <input
                  type="file"
                  id={`companyPhoto${member.id}`}
                  style={{ display: 'none' }}
                  accept="image/png,image/jpeg,image/gif"
                  onChange={(e) => handleFileUpload(e, member.id, 'companyPhoto')}
                  required
                />
                <button 
                  className="btn btn-light rounded-circle me-2 ms-3"
                  onClick={() => document.getElementById(`companyPhoto${member.id}`)?.click()}
                >
                  <i className="bi bi-plus"></i>
                </button>
                <span>Company photo</span>
                {member.companyPhoto && <span className="ms-2 text-success">File uploaded: {member.companyPhoto.name}</span>}
              </div>
            </div>
          ))}
          
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark" onClick={addMember}>Add members +</button>
            <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>
          </div>
        </>
      ) : (
        <Preview />
      )}
    </div>
  );
};

export default FormToPDF;