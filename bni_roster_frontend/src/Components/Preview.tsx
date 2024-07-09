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
    <div className="container">
      <div id="preview-container">
        <div className="page chapter-page">
          <div className="chapter-details">
            <div className='chapter-dome'>
            <div className="chapter-title">
            <span className="bni">BNI</span>
            <h2 className="chapter-name">{chapterName} </h2>
            <span className="year">2024</span>
            </div>
            {chapterLogo && (
              <img 
                src={URL.createObjectURL(chapterLogo)} 
                alt="Chapter Logo" 
                className="chapter-logo"
              />
            )}
            </div>
            {/* <table className="chapter-table">
              <tbody>
                <tr><th></th><td>{location}</td></tr>
                <tr><th></th><td>{memberSize}</td></tr>
                <tr><th></th><td>{regionalRank}</td></tr>
                <tr><th></th><td>{allIndiaRank}</td></tr>
                <tr><th></th><td>{globalRank}</td></tr>
              </tbody>
            </table>
          </div>
        </div> */}
        <div className="chapter-info">
              <div className="info-row">
                <div className="info-cell location">
                  <h3>{location}</h3>
                  <p>Location</p>
                </div>
                <div className="info-cell members">
                  <h3>{memberSize}</h3>
                  <p>Members</p>
                </div>
                <div className="info-cell regional">
                  <h3>{regionalRank}</h3>
                  <p>Regional Rank</p>
                </div>
                <div className="info-cell india">
                  <h3>{allIndiaRank}</h3>
                  <p>All India Rank</p>
                </div>
                <div className="info-cell global">
                  <h3>{globalRank}</h3>
                  <p>Global Rank</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page members-page">
          <h3 className="members-title">Members</h3>
          <div className="members-list">
          {members.map((member, index) => (
              <div key={member.id} className="member-card">
                <div className="member-number">{index + 1}</div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>{member.company}</p>
                  <p>{member.phone}</p>
                  <p>{member.email}</p>
                  <p><strong>{member.category}</strong></p>
                </div>
                <div className="member-photos">
                  {member.companyPhoto && (
                    <img 
                      src={URL.createObjectURL(member.companyPhoto)} 
                      alt="Company Logo" 
                      className="company-photo"
                    />
                  )}
                  {member.memberPhoto && (
                    <img 
                      src={URL.createObjectURL(member.memberPhoto)} 
                      alt="Member" 
                      className="member-photo"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-secondary" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onGeneratePDF}>Generate PDF</button>
      </div>

      <style>{`
        .container {
          padding: 20px;
        }
        .page {
          width: 210mm;
          height: 297mm;
          margin: 10mm auto;
          background: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .chapter-dome{
          display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12em;
        }
        .chapter-page {
          background-image: url('/Images/bni front page.png');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 40px;
        
          position: relative;
        }
        .chapter-details {
          // background-color: rgba(255, 255, 255, 0.9);
          // padding: 20px;
          // border-radius: 10px;
          // text-align: center;
          // max-width: 80%;
          width: 100%;
          max-width: 800px;
          margin-top: 30%;
          align-items: center;
          flex-direction: column;
          display: flex;
          justify-content: center;

        }
        .chapter-title {
          // // position:absolute;
          // position: absolute;
          // top: 300px; /* Adjust this value to move the title up or down */
          // left: 50%;
          // transform: translateX(-50%);
          // font-size: 36px;
          // color: #cc0000;
          // text-align: center;
          // width: 100%;
          // left:440px;
          // // margin-bottom: 20px;
          // // font-size: 28px;
          // font-size: 49px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 36px;
          margin-bottom: 20px;
          color: #cc0000;
          line-height: 0.9;
        
        }
        .bni {
        font-size: 80px;
        font-weight: 900;
        color: #cc0000;
        margin-bottom: 0px;
        letter-spacing: 6%;
        
}
        .chapter-name {
         font-size: 34px;
         color: #000000;
         margin: 10px 0;
         text-transform: uppercase;
}
        .chapter-logo {
          // max-width: 150px;
          // max-height: 150px;
          // margin-bottom: 20px;

          // position:absolute;
          // top:400px;
          // left:50%;
          // margin: 0 ;
          // max-width: 200px;
          // max-height: 250px;
          // transform: translateX(-50%);
           display: block;
          margin: 0 auto 20px;
          max-width: 150px;
          max-height: 150px;
        }
          .year {
  font-size: 58px;
  font-weight: bold;
  color: #808080;
  margin-top: 0px;
  letter-spacing: 6%;
}
        .chapter-info {
          // background-color: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          overflow: hidden;
          bottom: 40px;
          width: 100%;
          left: 0;
          right: 0;
        }
          .info-row {
          position:static;
          display: flex;
          justify-content: space-between;
          margin-top: 600px;
          margin-top: 150px;
          padding: 0 40px;
        }
        .info-cell {
          flex: 1;
          padding: 15px;
          text-align: center;
          border-right: 1px solid #ddd;
      
        }
        .info-cell:last-child {
          border-right: none;
        }
        .info-cell h3 {
          font-size: 24px;
          margin: 0;
          color: #cc0000;
        }
        .info-cell p {
          margin: 5px 0 0;
          font-size: 14px;
          color: #666;
        }
        .location h3 {
          color: #cc0000;
        }
        @media print {
          .chapter-page {
            page-break-after: always;
          }
        }
        
        .members-page {
        background-image: url('/Images/member outline.png');
          padding: 40px;
          
           background-size: cover;
           position: relative;
        }
        .members-title {
          text-align: center;
          margin-bottom: 20px;
        }
        .members-list {
          display: flex;
          // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
           flex-direction: column;
        }
        .member-card {
           display: flex;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 15px;
          position: relative;
          align-items: center;
          margin-right: 16em;
        }
          .member-card::after {
  content: '';
  position: absolute;
  top: 2em;
  right: -16em; /* Position it at the edge of the margin */
  bottom: -1em;
  width: 15em; /* Width of the area with lines */
  background-image: 
    linear-gradient(to bottom, #ddd 1px, transparent 1px);
  background-size: 100% 25%; /* Adjust this to control line spacing */
  background-position: 0 0;
  background-repeat: repeat-y;
}
  img.member-photo{
  width: 100px;
  height:100px;
  border-radius:0px;
  }
img.company-photo{
width: 60px;
height: 60px;
border-radius: 0px;
margin-top: 25px;

}


          .member-number {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 30px;
          height: 30px;
          background-color: #cc0000;
          color: white;
          border-radius: 0%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
          .member-info {
          flex: 1;
          
        }
         .member-info h4 {
          margin: 0 0 5px 0;
          color: #333;
        }
        .member-info p {
          margin: 2px 0;
          color: #666;
        }
        .member-photos {
          display: flex;
          gap: 10px;
          
        }
        .member-photo, .company-photo {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
        }
          @media print {
        .buttons {
          text-align: center;
          margin-top: 20px;
        }
        .btn {
          margin: 0 10px;
        }
        @media print {
          .buttons {
            display: none;
          }
          .page {
            margin: 0;
            box-shadow: none;
          }
          .chapter-page {
            page-break-after: always;
          }
          .members-page {
            page-break-before: always;
          }
        }
      `}</style>

    </div>
  );
};

export default Preview;