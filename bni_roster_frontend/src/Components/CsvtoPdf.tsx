// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const CsvToPdf: React.FC = () => {
//   return (
//     <Container className="mt-5">
//       <h2>CSV to PDF Conversion</h2>
//       <Row className="mt-4">
//         <Col>
//           <p>
//             This component handles the conversion of CSV files to PDF format. Specific functionality
//             and details can be added based on your application's requirements.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CsvToPdf;

// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { FaFileAlt, FaDownload } from 'react-icons/fa';

// const PDFGeneratorPage: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [step, setStep] = useState<number>(1);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const uploadedFile = event.target.files?.[0];
//     if (uploadedFile && uploadedFile.type === 'text/csv') {
//       setFile(uploadedFile);
//       setStep(2);
//     }
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && droppedFile.type === 'text/csv') {
//       setFile(droppedFile);
//       setStep(2);
//     }
//   };

//   const handlePreview = () => {
//     setStep(3);
//   };

//   return (
//     <Container className="mt-5">
//       <h1 className="text-center mb-5">
//         <span className="text-primary">CSV</span> TO <span className="text-danger">PDF</span>
//       </h1>

//       <div className="d-flex justify-content-between mb-5">
//         {[1, 2, 3].map((s) => (
//           <div key={s} className="text-center">
//             <div className={`rounded-circle border ${step >= s ? 'bg-primary text-white' : 'bg-light'}`} style={{width: '40px', height: '40px', lineHeight: '40px', margin: '0 auto'}}>
//               {s}
//             </div>
//             <div className="mt-2">Step {s}</div>
//             <small className="text-muted">
//               {s === 1 ? 'step1:upload your csv file' : 
//                s === 2 ? 'step2:preview' : 'step3:Download the pdf'}
//             </small>
//           </div>
//         ))}
//       </div>

//       <div className="bg-light p-5 rounded mb-4">
//         <div
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           className="text-center"
//         >
//           <FaFileAlt size={50} className="text-primary mb-3" />
//           <h5>Select files</h5>
//           <p>Drop files here or click browse thorough your machine</p>
//           <input
//             type="file"
//             onChange={handleFileUpload}
//             accept=".csv"
//             style={{display: 'none'}}
//             id="fileInput"
//           />
//           <label htmlFor="fileInput" className="btn btn-outline-primary">
//             Browse Files
//           </label>
//         </div>
//       </div>

//       {step >= 2 && (
//         <div className="bg-light p-3 rounded mb-4">
//           <h5>Preview</h5>
//           <div className="preview-content" style={{height: '200px', overflowY: 'auto'}}>
//             {/* Placeholder for preview content */}
//             <img src="path_to_preview_image.jpg" alt="Preview" className="img-fluid" />
//           </div>
//         </div>
//       )}

//       <div className="d-flex justify-content-between">
//         <Button variant="success" onClick={handlePreview} disabled={!file}>
//           Preview
//         </Button>
//         <Button variant="danger" disabled={step < 3}>
//           Download as PDF <FaDownload />
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default PDFGeneratorPage;







// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import { FaFileAlt, FaDownload } from 'react-icons/fa';

// const PDFGeneratorPage: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [step, setStep] = useState<number>(1);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const uploadedFile = event.target.files?.[0];
//     if (uploadedFile && uploadedFile.type === 'text/csv') {
//       setFile(uploadedFile);
//       setStep(2);
//     }
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && droppedFile.type === 'text/csv') {
//       setFile(droppedFile);
//       setStep(2);
//     }
//   };

//   const handlePreview = () => {
//     setStep(3);
//   };

//   return (
//     <Container className="mt-5">
//       <h1 className="text-center mb-5">
//         <span className="text-primary">CSV</span> TO <span className="text-danger">PDF</span>
//       </h1>

//       <div className="d-flex justify-content-between mb-5">
//         {[1, 2, 3].map((s) => (
//           <div key={s} className="text-center">
//             <div className={`rounded-circle border ${step >= s ? 'bg-primary text-white' : 'bg-light'}`} style={{width: '40px', height: '40px', lineHeight: '40px', margin: '0 auto'}}>
//               {s}
//             </div>
//             <div className="mt-2">Step {s}</div>
//             <small className="text-muted">
//               {s === 1 ? 'step1:upload your csv file' : 
//                s === 2 ? 'step2:preview' : 'step3:Download the pdf'}
//             </small>
//           </div>
//         ))}
//       </div>

//       <div className="bg-light p-5 rounded mb-4">
//         <div
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           className="text-center"
//         >
//           <FaFileAlt size={50} className="text-primary mb-3" />
//           <h5>Select files</h5>
//           <p>Drop files here or click browse thorough your machine</p>
//           <input
//             type="file"
//             onChange={handleFileUpload}
//             accept=".csv"
//             style={{display: 'none'}}
//             id="fileInput"
//           />
//           <label htmlFor="fileInput" className="btn btn-outline-primary">
//             Browse Files
//           </label>
//         </div>
//       </div>

//       {step >= 2 && (
//         <div className="bg-light p-3 rounded mb-4">
//           <h5>Preview</h5>
//           <div className="preview-content" style={{height: '200px', overflowY: 'auto'}}>
//             {/* Placeholder for preview content */}
//             <img src="path_to_preview_image.jpg" alt="Preview" className="img-fluid" />
//           </div>
//         </div>
//       )}

//       <div className="d-flex justify-content-between">
//         <Button variant="success" onClick={handlePreview} disabled={!file}>
//           Preview
//         </Button>
//         <Button variant="danger" disabled={step < 3}>
//           Download as PDF <FaDownload />
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default PDFGeneratorPage;


























import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaFileAlt, FaDownload } from 'react-icons/fa';
import axios from 'axios';
 
const PDFGeneratorPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState<number>(1);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState<string>('');
  const [pdfId, setPdfId] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);
 
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'text/csv') {
      setFile(uploadedFile);
      setStep(2);
    }
  };
 
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
 
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'text/csv') {
      setFile(droppedFile);
      setStep(2);
    }
  };
 
  const handleUpload = async () => {
    if (!file) return;
 
    setIsLoading(true);
    setError('');
 
    const formData = new FormData();
    formData.append('file', file);
 
    try {
      const response = await axios.post('http://localhost:4000/csv/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
 
      setPreviewUrl(response.data.previewUrl);
      setDownloadUrl(response.data.downloadUrl);
      setPdfId(response.data.pdfId);
      setStep(3);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading and converting file. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
 
  const handlePreview = () => {
    if (!previewUrl) return;
    window.open(previewUrl, '_blank');
  };
 
  const handleDownload = async () => {
    if (!downloadUrl) return;
   
    try {
      const response = await axios.get(downloadUrl, {
        responseType: 'blob',
      });
     
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${pdfId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
 
      // Refresh the page after download
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error downloading file:', error);
      setError('Error downloading file. Please try again.');
    }
  };
 
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">
        <span className="text-primary">CSV</span> TO <span className="text-danger">PDF</span>
      </h1>
 
      <div className="d-flex justify-content-between mb-5">
        {[1, 2, 3].map((s) => (
          <div key={s} className="text-center">
            <div className={`rounded-circle border ${step >= s ? 'bg-primary text-white' : 'bg-light'}`} style={{ width: '40px', height: '40px', lineHeight: '40px', margin: '0 auto' }}>
              {s}
            </div>
            <div className="mt-2">Step {s}</div>
            <small className="text-muted">
              {s === 1 ? 'Step 1: Upload your CSV file' :
               s === 2 ? 'Step 2: Preview' : 'Step 3: Download the PDF'}
            </small>
          </div>
        ))}
      </div>
 
      <div className="bg-light p-5 rounded mb-4">
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="text-center"
        >
          <FaFileAlt size={50} className="text-primary mb-3" />
          <h5>Select files</h5>
          <p>Drop files here or click browse through your machine</p>
          <input
            type="file"
            onChange={handleFileUpload}
            accept=".csv"
            style={{ display: 'none' }}
            id="fileInput"
          />
          <label htmlFor="fileInput" className="btn btn-outline-primary">
            Browse Files
          </label>
        </div>
      </div>
 
      {isLoading && <p className="text-center">Converting CSV to PDF...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
 
      <div className="d-flex justify-content-between">
        <Button variant="primary" onClick={handlePreview} disabled={!previewUrl}>
          Preview PDF in New Tab
        </Button>
        <Button variant="danger" onClick={handleDownload} disabled={!downloadUrl}>
          Download PDF <FaDownload />
        </Button>
      </div>
    </Container>
  );
};
 
export default PDFGeneratorPage;























