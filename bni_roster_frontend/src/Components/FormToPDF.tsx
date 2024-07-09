import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MemberDetails } from '../types';
import Preview from './Preview';

const FormToPDF: React.FC = () => {
  const [step, setStep] = useState(1);
  const [chapterLogo, setChapterLogo] = useState<File | null>(null);
  const [members, setMembers] = useState<MemberDetails[]>([{ id: 1, name: '', company: '', email: '', phone: '', category: '', memberPhoto: null, companyPhoto: null }]);
  const [showPreview, setShowPreview] = useState(false);
  const chapterLogoInputRef = useRef<HTMLInputElement>(null);
  const memberPhotoInputRefs = useRef<(HTMLInputElement | null)[]>([]); // Adjusted type here
  const companyPhotoInputRefs = useRef<(HTMLInputElement | null)[]>([]); // Adjusted type here

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
      if (photoType === 'memberPhoto' && memberId !== undefined) {
        setMembers(members.map(member =>
          member.id === memberId ? { ...member, memberPhoto: file } : member
        ));
      } else if (photoType === 'companyPhoto' && memberId !== undefined) {
        setMembers(members.map(member =>
          member.id === memberId ? { ...member, companyPhoto: file } : member
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

  const handleMemberChange = (id: number, field: keyof MemberDetails, value: string) => {
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

  const handlePreview = () => {
    if (validateForm()) {
      setShowPreview(true);
      setStep(2);
    }
  };


  const handleGeneratePDF = async () => {
    const element = document.getElementById('preview-container');
    if (element) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pages = element.querySelectorAll('.page');
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;
        const canvas = await html2canvas(page, {scale: 2});
        const imgData = canvas.toDataURL('image/png');
        
        if (i > 0) pdf.addPage();
        
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      }
      
      pdf.save('bni_roster.pdf');
  
      // Send data to backend
      try {
        await axios.post('http://localhost:4000/pdf/generate', {
          chapterName,
          location,
          memberSize,
          regionalRank,
          allIndiaRank,
          globalRank,
          members
        });
        console.log('PDF data sent to backend');
      } catch (error) {
        console.error('Error sending PDF data to backend:', error);
      }
    }
  };

  return (
    <div className="container py-4">
      <h1 className="display-4 mb-4 text-center">FORM TO <span className="text-danger">PDF</span></h1>
      
      <div className="row mb-5">
        {[1, 2, 3].map((num) => (
          <div key={num} className="col-md-4 text-center">
            <div className={`rounded-circle ${num <= step ? 'bg-success' : 'bg-secondary'} text-white d-inline-flex align-items-center justify-content-center mb-2`} style={{width: '3rem', height: '3rem'}}>{num}</div>
          </div>
        ))}
      </div>

      {!showPreview ? (
        <>
          <h2 className="mb-3">Chapter Details</h2>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <input type="text" placeholder="Chapter Name" className="form-control" value={chapterName} onChange={(e) => setChapterName(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Member Size" className="form-control" value={memberSize} onChange={(e) => setMemberSize(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Regional Rank" className="form-control" value={regionalRank} onChange={(e) => setRegionalRank(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="All India Rank" className="form-control" value={allIndiaRank} onChange={(e) => setAllIndiaRank(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Global Rank" className="form-control" value={globalRank} onChange={(e) => setGlobalRank(e.target.value)} required />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="file"
              ref={chapterLogoInputRef}
              style={{ display: 'none' }}
              accept="image/png,image/jpeg,image/gif"
              onChange={(e) => handleFileUpload(e)}
              required
            />
            <button
              className="btn btn-light rounded-circle me-2"
              onClick={() => chapterLogoInputRef.current?.click()}
            >
              <i className="bi bi-plus"></i>
            </button>
            <span>Upload chapter logo</span>
            {chapterLogo && <span className="ms-2 text-success">File uploaded: {chapterLogo.name}</span>}
          </div>
          <h2 className="mb-3">Member Details</h2>
          {members.map((member) => (
            <div key={member.id} className="border p-3 mb-4 rounded">
              <div className="d-flex justify-content-between mb-3">
                <h5>Member {members.indexOf(member) + 1}</h5>
                <button className="btn btn-danger btn-sm"
                  onClick={() => deleteMember(member.id)} disabled={members.length <= 1}>Remove Member</button>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" placeholder="name" className="form-control" value={member.name} onChange={(e) => handleMemberChange(member.id, 'name', e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Company" className="form-control" value={member.company} onChange={(e) => handleMemberChange(member.id, 'company', e.target.value)} required />
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
                  ref={(el) => memberPhotoInputRefs.current[member.id] = el}
                  style={{ display: 'none' }}
                  accept="image/png,image/jpeg,image/gif"
                  onChange={(e) => handleFileUpload(e, member.id, 'memberPhoto')}
                  required
                />
                <button
                  className="btn btn-light rounded-circle me-2"
                  onClick={() => memberPhotoInputRefs.current[member.id]?.click()}
                >
                  <i className="bi bi-plus"></i>
                </button>
                <span>Upload member photo</span>
                {member.memberPhoto && <span className="ms-2 text-success">File uploaded: {member.memberPhoto.name}</span>}
              </div>
              <div className="mt-3">
                <input
                  type="file"
                  ref={(el) => companyPhotoInputRefs.current[member.id] = el}
                  style={{ display: 'none' }}
                  accept="image/png,image/jpeg,image/gif"
                  onChange={(e) => handleFileUpload(e, member.id, 'companyPhoto')}
                  required
                />
                <button
                  className="btn btn-light rounded-circle me-2"
                  onClick={() => companyPhotoInputRefs.current[member.id]?.click()}
                >
                  <i className="bi bi-plus"></i>
                </button>
                <span>Upload company photo</span>
                {member.companyPhoto && <span className="ms-2 text-success">File uploaded: {member.companyPhoto.name}</span>}
              </div>
            </div>
          ))}
          <button className="btn btn-light mb-5" onClick={addMember}>Add Member</button>
          <button className="btn btn-primary w-100" onClick={handlePreview}>Next Step</button>
        </>
      ) : (
        <Preview
          chapterName={chapterName}
          location={location}
          memberSize={memberSize}
          regionalRank={regionalRank}
          allIndiaRank={allIndiaRank}
          globalRank={globalRank}
          chapterLogo={chapterLogo}
          members={members}
          onBack={() => { setShowPreview(false); setStep(1); }}
          onGeneratePDF={handleGeneratePDF}
        />
      )}
    </div>
  );
};

export default FormToPDF;
