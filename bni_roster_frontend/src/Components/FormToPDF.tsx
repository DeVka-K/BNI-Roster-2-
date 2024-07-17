// import React, { useState, useRef, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// interface MemberDetail {
//   id: number;
//   name: string;
//   company: string;
//   email: string;
//   phone: string;
//   category: string;
//   memberPhoto: File | null;
//   companyPhoto: File | null;
// }

// const FormToPDF: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [chapterLogo, setChapterLogo] = useState<File | null>(null);
//   const [members, setMembers] = useState<MemberDetail[]>([{ id: 1, name: '', company: '', email: '', phone: '', category: '', memberPhoto: null, companyPhoto: null }]);
//   const [showPreview, setShowPreview] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [chapterName, setChapterName] = useState('');
//   const [location, setLocation] = useState('');
//   const [memberSize, setMemberSize] = useState('');
//   const [regionalRank, setRegionalRank] = useState('');
//   const [allIndiaRank, setAllIndiaRank] = useState('');
//   const [globalRank, setGlobalRank] = useState('');

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       @media print {
//         .page-break {
//           page-break-before: always;
//         }
//       }
//       .circular-image {
//         width: 200px;
//         height: 200px;
//         border-radius: 50%;
//         object-fit: cover;
//       }
//     `;
//     document.head.append(style);
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const validateFile = (file: File) => {
//     const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
//     if (!validTypes.includes(file.type)) {
//       alert('Please upload a PNG, JPEG, or GIF file.');
//       return false;
//     }
//     if (file.size > 2 * 1024 * 1024) { // 2MB limit
//       alert('File size should be less than 2MB');
//       return false;
//     }
//     return true;
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, memberId?: number, photoType?: 'memberPhoto' | 'companyPhoto') => {
//     const file = event.target.files?.[0];
//     if (file && validateFile(file)) {
//       if (memberId !== undefined && photoType) {
//         setMembers(members.map(member => 
//           member.id === memberId ? { ...member, [photoType]: file } : member
//         ));
//       } else {
//         setChapterLogo(file);
//       }
//     }
//   };

//   const addMember = () => {
//     setMembers([...members, { id: Date.now(), name: '', company: '', email: '', phone: '', category: '', memberPhoto: null, companyPhoto: null }]);
//   };

//   const deleteMember = (id: number) => {
//     if (members.length > 1) {
//       setMembers(members.filter(member => member.id !== id));
//     } else {
//       alert("You can't delete the last member.");
//     }
//   };

//   const handleMemberChange = (id: number, field: keyof MemberDetail, value: string) => {
//     setMembers(members.map(member => 
//       member.id === id ? { ...member, [field]: value } : member
//     ));
//   };

//   const validateForm = () => {
//     if (!chapterName || !location || !memberSize || !regionalRank || !allIndiaRank || !globalRank || !chapterLogo) {
//       alert('Please fill in all chapter details and upload a chapter logo.');
//       return false;
//     }

//     for (const member of members) {
//       if (!member.name || !member.company || !member.email || !member.phone || !member.category || !member.memberPhoto || !member.companyPhoto) {
//         alert('Please fill in all member details and upload both member and company photos for each member.');
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       setShowPreview(true);
//       setStep(2);
//     }
//   };

//   const Preview = () => (
//     <div className="mt-5">
//       <h2 className="h3 mb-4 text-center">Preview</h2>
      
//       {/* Chapter Details Page */}
//       <div className="card mb-5">
//         <div className="card-body text-center">
//           <h3 className="card-title mb-4">Chapter Details</h3>
//           {chapterLogo && (
//             <div className="mb-4 d-flex justify-content-center">
//               <img src={URL.createObjectURL(chapterLogo)} alt="Chapter Logo" className="circular-image" />
//             </div>
//           )}
//           <p><strong>Chapter Name:</strong> {chapterName}</p>
//           <p><strong>Location:</strong> {location}</p>
//           <p><strong>Member Size:</strong> {memberSize}</p>
//           <p><strong>Regional Rank:</strong> {regionalRank}</p>
//           <p><strong>All India Rank:</strong> {allIndiaRank}</p>
//           <p><strong>Global Rank:</strong> {globalRank}</p>
//         </div>
//       </div>

//       {/* Member Details Pages */}
//       {members.map((member, index) => (
//         <div key={member.id} className="card mb-5 page-break">
//           <div className="card-body text-center">
//             <h3 className="card-title mb-4">Member {index + 1}</h3>
//             <div className="d-flex justify-content-center mb-4">
//               {member.memberPhoto && (
//                 <div className="mx-2">
//                   <img src={URL.createObjectURL(member.memberPhoto)} alt="Member Photo" className="circular-image" />
//                 </div>
//               )}
//               {member.companyPhoto && (
//                 <div className="mx-2">
//                   <img src={URL.createObjectURL(member.companyPhoto)} alt="Company Photo" className="circular-image" />
//                 </div>
//               )}
//             </div>
//             <p><strong>Name:</strong> {member.name}</p>
//             <p><strong>Company:</strong> {member.company}</p>
//             <p><strong>Email:</strong> {member.email}</p>
//             <p><strong>Phone:</strong> {member.phone}</p>
//             <p><strong>Category:</strong> {member.category}</p>
//           </div>
//         </div>
//       ))}
//       <div className="text-center">
//         <button className="btn btn-primary" onClick={() => {setShowPreview(false); setStep(1);}}>Edit</button>
//         <button className="btn btn-success ms-2" onClick={() => setStep(3)}>Generate PDF</button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container py-4">
//       <h1 className="display-4 mb-4 text-center">FORM TO <span className="text-danger">PDF</span></h1>
      
//       <div className="row mb-5">
//         {[1, 2, 3].map((num) => (
//           <div key={num} className="col-md-4 text-center">
//             <div className={`rounded-circle ${num <= step ? 'bg-success' : 'bg-secondary'} text-white d-inline-flex align-items-center justify-content-center mb-2`} style={{width: '3rem', height: '3rem'}}>{num}</div>
//             <p className="mb-3">Step {num}</p>
//             <p className="small">step{num}:{num === 1 ? 'Fill the form' : num === 2 ? 'preview' : 'Download the pdf'}</p>
//           </div>
//         ))}
//       </div>

//       {!showPreview ? (
//         <>
//           <div className="mb-5">
//             <h2 className="h3 mb-4"><span className="text-success">CHAPTER</span> DETAILS</h2>
//             <div className="row g-3">
//               <div className="col-md-6">
//                 <input type="text" placeholder="Chaptername" className="form-control" value={chapterName} onChange={(e) => setChapterName(e.target.value)} required />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" placeholder="location" className="form-control border-primary" value={location} onChange={(e) => setLocation(e.target.value)} required />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" placeholder="member size" className="form-control" value={memberSize} onChange={(e) => setMemberSize(e.target.value)} required />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" placeholder="regional rank" className="form-control" value={regionalRank} onChange={(e) => setRegionalRank(e.target.value)} required />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" placeholder="All india rank" className="form-control" value={allIndiaRank} onChange={(e) => setAllIndiaRank(e.target.value)} required />
//               </div>
//               <div className="col-md-6">
//                 <input type="text" placeholder="global rank" className="form-control" value={globalRank} onChange={(e) => setGlobalRank(e.target.value)} required />
//               </div>
//             </div>
//             <div className="mt-3">
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: 'none' }}
//                 accept="image/png,image/jpeg,image/gif"
//                 onChange={handleFileUpload}
//                 required
//               />
//               <button 
//                 className="btn btn-light rounded-circle me-2"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <i className="bi bi-plus"></i>
//               </button>
//               <span>Upload chapter logo</span>
//               {chapterLogo && <span className="ms-2 text-success">File uploaded: {chapterLogo.name}</span>}
//             </div>
//           </div>

//           {members.map((member, index) => (
//             <div key={member.id} className="mb-5">
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h2 className="h3">MEMBER DETAILS {index + 1}</h2>
//                 <button className="btn btn-danger" onClick={() => deleteMember(member.id)}>
//                   <i className="bi bi-trash"></i> Delete
//                 </button>
//               </div>
//               <div className="row g-3">
//                 <div className="col-md-6">
//                   <input type="text" placeholder="Membername" className="form-control" value={member.name} onChange={(e) => handleMemberChange(member.id, 'name', e.target.value)} required />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="text" placeholder="companyname" className="form-control" value={member.company} onChange={(e) => handleMemberChange(member.id, 'company', e.target.value)} required />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="email" placeholder="email" className="form-control" value={member.email} onChange={(e) => handleMemberChange(member.id, 'email', e.target.value)} required />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="tel" placeholder="phone" className="form-control" value={member.phone} onChange={(e) => handleMemberChange(member.id, 'phone', e.target.value)} required />
//                 </div>
//                 <div className="col-md-6">
//                   <input type="text" placeholder="category" className="form-control" value={member.category} onChange={(e) => handleMemberChange(member.id, 'category', e.target.value)} required />
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <input
//                   type="file"
//                   id={`memberPhoto${member.id}`}
//                   style={{ display: 'none' }}
//                   accept="image/png,image/jpeg,image/gif"
//                   onChange={(e) => handleFileUpload(e, member.id, 'memberPhoto')}
//                   required
//                 />
//                 <button 
//                   className="btn btn-light rounded-circle me-2"
//                   onClick={() => document.getElementById(`memberPhoto${member.id}`)?.click()}
//                 >
//                   <i className="bi bi-plus"></i>
//                 </button>
//                 <span className="me-3">Member photo</span>
//                 {member.memberPhoto && <span className="text-success">File uploaded: {member.memberPhoto.name}</span>}
                
//                 <input
//                   type="file"
//                   id={`companyPhoto${member.id}`}
//                   style={{ display: 'none' }}
//                   accept="image/png,image/jpeg,image/gif"
//                   onChange={(e) => handleFileUpload(e, member.id, 'companyPhoto')}
//                   required
//                 />
//                 <button 
//                   className="btn btn-light rounded-circle me-2 ms-3"
//                   onClick={() => document.getElementById(`companyPhoto${member.id}`)?.click()}
//                 >
//                   <i className="bi bi-plus"></i>
//                 </button>
//                 <span>Company photo</span>
//                 {member.companyPhoto && <span className="ms-2 text-success">File uploaded: {member.companyPhoto.name}</span>}
//               </div>
//             </div>
//           ))}
          
//           <div className="d-flex justify-content-between">
//             <button className="btn btn-dark" onClick={addMember}>Add members +</button>
//             <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>
//           </div>
//         </>
//       ) : (
//         <Preview />
//       )}
//     </div>
//   );
// };

// export default FormToPDF;


import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCamera, FaTrash } from 'react-icons/fa';
 
const FormUpload: React.FC = () => {
  const [chapterName, setChapterName] = useState('');
  const [location, setLocation] = useState('');
  const [memberSize, setMemberSize] = useState('');
  const [regionalRank, setRegionalRank] = useState('');
  const [allIndiaRank, setAllIndiaRank] = useState('');
  const [globalRank, setGlobalRank] = useState('');
  const [chapterLogo, setChapterLogo] = useState<File | null>(null);
  const [members, setMembers] = useState([{ name: '', companyName: '', email: '', phone: '', category: '', photo: null as File | null, companyLogo: null as File | null }]);
  const [previewUrl, setPreviewUrl] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
 
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (field === 'chapterLogo') {
      setChapterLogo(file);
    } else {
      setMembers(prevMembers => {
        const newMembers = [...prevMembers];
        newMembers[index] = { ...newMembers[index], [field]: file };
        return newMembers;
      });
    }
  };
 
  const renderChapterLogoUpload = () => {
    return (
      <div className="image-upload-container">
        <div className="image-upload-circle" onClick={() => document.getElementById('chapterLogo')?.click()}>
          {chapterLogo ? (
            <img src={URL.createObjectURL(chapterLogo)} alt="Chapter Logo" className="uploaded-image" />
          ) : (
            <FaCamera size={24} />
          )}
        </div>
        <input
          id="chapterLogo"
          type="file"
          className="d-none"
          onChange={(e) => handleFileChange(e, -1, 'chapterLogo')}
          accept="image/*"
        />
        <span className="image-upload-label">Chapter Logo</span>
      </div>
    );
  };
 
  const renderImageUpload = (index: number, field: 'photo' | 'companyLogo') => {
    const file = field === 'photo' ? members[index].photo : members[index].companyLogo;
    return (
      <div className="image-upload-container">
        <div className="image-upload-circle" onClick={() => document.getElementById(`${field}${index}`)?.click()}>
          {file ? (
            <img src={URL.createObjectURL(file)} alt={field === 'photo' ? "Member Photo" : "Company Logo"} className="uploaded-image" />
          ) : (
            <FaCamera size={24} />
          )}
        </div>
        <input
          id={`${field}${index}`}
          type="file"
          className="d-none"
          onChange={(e) => handleFileChange(e, index, field)}
          accept="image/*"
        />
        <span className="image-upload-label">{field === 'photo' ? "Member photo" : "Company photo"}</span>
      </div>
    );
  };
 
  const addMember = () => {
    setMembers([...members, { name: '', companyName: '', email: '', phone: '', category: '', photo: null, companyLogo: null }]);
  };
 
  const deleteMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };
 
  const resetForm = () => {
    setChapterName('');
    setLocation('');
    setMemberSize('');
    setRegionalRank('');
    setAllIndiaRank('');
    setGlobalRank('');
    setChapterLogo(null);
    setMembers([{ name: '', companyName: '', email: '', phone: '', category: '', photo: null, companyLogo: null }]);
    setPreviewUrl('');
    setDownloadUrl('');
  };
 
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('chapterName', chapterName);
    formData.append('location', location);
    formData.append('memberSize', memberSize);
    formData.append('regionalRank', regionalRank);
    formData.append('allIndiaRank', allIndiaRank);
    formData.append('globalRank', globalRank);
    if (chapterLogo) {
      formData.append('chapterLogo', chapterLogo);
    }
 
    const formDataArray = members.map((member) => ({
      name: member.name,
      companyName: member.companyName,
      email: member.email,
      phone: member.phone,
      category: member.category,
    }));
    formData.append('members', JSON.stringify(formDataArray));
 
    members.forEach((member, index) => {
      if (member.photo) {
        formData.append(`membersphoto[${index}]`, member.photo);
      }
      if (member.companyLogo) {
        formData.append(`memberscompanyLogo[${index}]`, member.companyLogo);
      }
    });
 
    try {
      const response = await axios.post('http://localhost:4000/form/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPreviewUrl(response.data.previewUrl);
      setDownloadUrl(response.data.downloadUrl);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
 
  const handlePreview = () => {
    if (previewUrl) {
      window.open(previewUrl, '_blank');
    } else {
      alert('Preview not available yet. Please submit the form first.');
    }
  };
 
  const handleDownload = () => {
    if (downloadUrl) {
      window.location.href = downloadUrl;
      resetForm(); // Reset the form after downloading the PDF
    } else {
      alert('Download not available yet. Please submit the form first.');
    }
  };
 
  return (
    <>
      <style>
        {`
          .image-upload-container {
            display: flex;
            flex-direction: column;
            // align-items: center;
          }
          .image-upload-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            overflow: hidden;
          }
          .uploaded-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .image-upload-label {
            margin-top: 8px;
            font-size: 0.9rem;
            color: #666;
          }
          .step-indicator {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
          }
          .step {
            display: flex;
            align-items: center;
          }
          .step-number {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #ddd;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
          }
          .step-number.active {
            background-color: #28a745;
            color: white;
          }
          .delete-icon {
            color: red;
            cursor: pointer;
            font-size: 1.5rem;
          }
        `}
      </style>
      <div className="container mt-4">
        <h1 className="text-center mb-4">FORM TO PDF</h1>
        <div className="step-indicator">
          <div className="step">
            <div className="step-number active">1</div>
            <span>Fill the form</span>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <span>Preview</span>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <span>Download the pdf</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-success mb-4">CHAPTER DETAILS</h2>
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Chapter name" value={chapterName} onChange={(e) => setChapterName(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Member size" value={memberSize} onChange={(e) => setMemberSize(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Regional rank" value={regionalRank} onChange={(e) => setRegionalRank(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="All India rank" value={allIndiaRank} onChange={(e) => setAllIndiaRank(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Global rank" value={globalRank} onChange={(e) => setGlobalRank(e.target.value)} required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              {renderChapterLogoUpload()}
            </div>
          </div>
          <h2 className="text-success mb-4">MEMBER DETAILS</h2>
          {members.map((member, index) => (
            <div key={index} className="mb-4 border-bottom pb-2">
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Name" value={member.name} onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[index].name = e.target.value;
                    setMembers(newMembers);
                  }} required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Company name" value={member.companyName} onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[index].companyName = e.target.value;
                    setMembers(newMembers);
                  }} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" value={member.email} onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[index].email = e.target.value;
                    setMembers(newMembers);
                  }} required />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Phone" value={member.phone} onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[index].phone = e.target.value;
                    setMembers(newMembers);
                  }} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Category" value={member.category} onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[index].category = e.target.value;
                    setMembers(newMembers);
                  }} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 d-flex justify-content-between align-items-center">
                  {renderImageUpload(index, 'photo')}
                </div>
                <div className="col-md-6 d-flex justify-content-between align-items-center">
                  {renderImageUpload(index, 'companyLogo')}
                </div>
              </div>
              <div className="text-right">
                <FaTrash className="delete-icon" onClick={() => deleteMember(index)} />
              </div>
            </div>
          ))}
          <div className="mb-3">
            <button type="button" className="btn btn-secondary" onClick={addMember}>Add Member</button>
          </div>
          <div className="text-center mb-4">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-info mx-2" onClick={handlePreview}>Preview in new tab</button>
            <button type="button" className="btn btn-success" onClick={handleDownload}>Download PDF</button>
          </div>
        </form>
      </div>
    </>
  );
};
 
export default FormUpload;
 



