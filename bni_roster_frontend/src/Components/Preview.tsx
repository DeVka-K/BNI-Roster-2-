// src/Components/Preview.tsx

import React from 'react';
import { MemberDetails } from '../types';

interface PreviewProps {
  chapterName: string;
  location: string;
  memberSize: string;
  regionalRank: string;
  allIndiaRank: string;
  globalRank: string;
  chapterLogo: File | null;
  members: MemberDetails[];
  onBack: () => void;
  onGeneratePDF: () => Promise<void>;
}

const Preview: React.FC<PreviewProps> = ({ 
  chapterName, 
  location, 
  memberSize, 
  regionalRank, 
  allIndiaRank, 
  globalRank, 
  chapterLogo, 
  members, 
  onBack, 
  onGeneratePDF 
}) => {
  return (
    <div id="preview-container">
      <h2>Preview</h2>
      <p><strong>Chapter Name:</strong> {chapterName}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Member Size:</strong> {memberSize}</p>
      <p><strong>Regional Rank:</strong> {regionalRank}</p>
      <p><strong>All India Rank:</strong> {allIndiaRank}</p>
      <p><strong>Global Rank:</strong> {globalRank}</p>
      {chapterLogo && <img src={URL.createObjectURL(chapterLogo)} alt="Chapter Logo" style={{ width: '100px', height: '100px' }} />}
      <h3>Members</h3>
      {members.map((member) => (
        <div key={member.id}>
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Company:</strong> {member.company}</p>
          <p><strong>Email:</strong> {member.email}</p>
          <p><strong>Phone:</strong> {member.phone}</p>
          <p><strong>Category:</strong> {member.category}</p>
          {member.memberPhoto && <img src={URL.createObjectURL(member.memberPhoto)} alt="Member Photo" style={{ width: '100px', height: '100px' }} />}
          {member.companyPhoto && <img src={URL.createObjectURL(member.companyPhoto)} alt="Company Photo" style={{ width: '100px', height: '100px' }} />}
          <hr />
        </div>
      ))}
      <button className="btn btn-secondary" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={onGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default Preview;
