import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const ExcelToPDF: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState<number>(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const maxFileSizeMB = 5; // Maximum file size in MB

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      if (uploadedFile.size > maxFileSizeMB * 1024 * 1024) {
        alert(`File size should not exceed ${maxFileSizeMB} MB.`);
        return;
      }
      if (uploadedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        setFile(uploadedFile);
        setStep(2);
      } else {
        alert('Please upload a valid Excel file.');
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size > maxFileSizeMB * 1024 * 1024) {
        alert(`File size should not exceed ${maxFileSizeMB} MB.`);
        return;
      }
      if (droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        setFile(droppedFile);
        setStep(2);
      } else {
        alert('Please upload a valid Excel file.');
      }
    }
  };

  const handlePreview = () => {
    // Placeholder for preview logic
    // In a real implementation, this would send the file to the backend for conversion
    setPreviewUrl('path_to_preview_image.jpg');
    setStep(3);
  };

  const handleDownload = () => {
    // Placeholder for download logic
    // In a real implementation, this would trigger the PDF download
    alert('Downloading PDF...');
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">
        <span className="text-success">EXCEL</span> TO <span className="text-danger">PDF</span>
      </h1>

      <Row className="justify-content-center mb-4">
    <Col xs={12} md={4} className={`text-center ${step >= 1 ? 'text-success' : ''}`}>
      <div className={`rounded-circle d-inline-block p-3 ${step >= 1 ? 'bg-success text-white' : 'bg-light'}`} style={{ width: '50px', height: '50px', lineHeight: '40px' }}>1</div>
      <p>Step 1: Upload your excel file</p>
    </Col>
    <Col xs={12} md={4} className={`text-center ${step >= 2 ? 'text-success' : ''}`}>
      <div className={`rounded-circle d-inline-block p-3 ${step >= 2 ? 'bg-success text-white' : 'bg-light'}`} style={{ width: '50px', height: '50px', lineHeight: '40px' }}>2</div>
      <p>Step 2: Preview</p>
    </Col>
    <Col xs={12} md={4} className={`text-center ${step >= 3 ? 'text-success' : ''}`}>
      <div className={`rounded-circle d-inline-block p-3 ${step >= 3 ? 'bg-success text-white' : 'bg-light'}`} style={{ width: '50px', height: '50px', lineHeight: '40px' }}>3</div>
      <p>Step 3: Download the PDF</p>
    </Col>
  </Row>

  <Row className="justify-content-center">
    <Col xs={12} md={8}>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border border-2 border-success rounded p-5 text-center"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <img src="/Images/file.jpg" alt="Folder icon" className="mb-3" style={{ width: '64px' }} />
        <h5>Select files</h5>
        <p>Drop files here or click <span className="text-success">browse</span> through your machine</p>
        <Form.Group controlId="custom-file">
          <Form.Label>Choose file</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileUpload}
            accept=".xlsx, .xls"
          />
        </Form.Group>
      </div>
    </Col>
  </Row>

  {previewUrl && (
    <Row className="justify-content-center mt-4">
      <Col xs={12} md={8}>
        <h5>PREVIEW</h5>
        <img src={previewUrl} alt="PDF Preview" className="img-fluid border" />
      </Col>
    </Row>
  )}

  <Row className="justify-content-center mt-4">
    <Col xs={12} md={4} className="text-center">
      <Button
        variant="success"
        size="lg"
        onClick={handlePreview}
        disabled={!file || step >= 3}
      >
        Preview
      </Button>
    </Col>
    <Col xs={12} md={4} className="text-center">
      <Button
        variant="danger"
        size="lg"
        onClick={handleDownload}
        disabled={step < 3}
      >
        Download as PDF <i className="fas fa-download"></i>
      </Button>
    </Col>
  </Row>
</Container>

  );
};

export default ExcelToPDF;
