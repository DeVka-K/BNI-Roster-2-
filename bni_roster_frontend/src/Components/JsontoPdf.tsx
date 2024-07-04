import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import { FaFileUpload, FaEye, FaDownload } from 'react-icons/fa';

const JsontoPdf: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'application/json') {
      setFile(uploadedFile);
      setError(null);
      setStep(2);
    } else {
      setError('Invalid file type. Please upload a JSON file.');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => { 
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/json') {
      setFile(droppedFile);
      setError(null);
      setStep(2);
    } else {
      setError('Invalid file type. Please upload a JSON file.');
    }
  };

  const handlePreview = async () => {
    // Placeholder for preview logic
    setPreviewUrl('placeholder-preview-url');
    setStep(3);
  };

  const handleDownload = () => {
    // Placeholder for download logic
    console.log('Downloading PDF...');
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">
        <span className="text-secondary">JSON</span> TO <span className="text-danger">PDF</span>
      </h1>

      {/* Timeline */}
      <Row className="mb-5">
        <Col>
          <div className="d-flex justify-content-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`timeline-step ${step >= s ? 'active' : ''}`}>
                <div className="step-number">{s}</div>
                <div className="step-label">
                  {s === 1 && 'Upload your json file'}
                  {s === 2 && 'Proceed with default template'}
                  {s === 3 && 'Download the pdf'}
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* File Upload Area */}
      <Row className="mb-4">
        <Col>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="file-drop-area p-5 border rounded text-center"
          >
            <FaFileUpload size={48} className="mb-3 text-muted" />
            <h5>Select files</h5>
            <p className="text-muted">
              Drop files here or click{' '}
              <span className="text-primary" style={{ cursor: 'pointer' }} onClick={handleBrowseClick}>
                browse
              </span>{' '}
              through your machine
            </p>
            <Form.Control
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="d-none"
              accept=".json"
            />
          </div>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Col>
      </Row>

      {/* Preview Area */}
      {step >= 2 && (
        <Row className="mb-4">
          <Col>
            <div className="preview-area p-3 border rounded">
              <h5 className="mb-3">Preview</h5>
              {/* Placeholder for actual preview content */}
              <img src="/path-to-preview-image.jpg" alt="PDF Preview" className="img-fluid" />
            </div>
          </Col>
        </Row>
      )}

      {/* Action Buttons */}
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <Button
            variant="success"
            onClick={handlePreview}
            disabled={!file || step >= 3}
            className="me-3"
          >
            <FaEye className="me-2" /> Preview
          </Button>
          <Button
            variant="danger"
            onClick={handleDownload}
            disabled={step < 3}
          >
            <FaDownload className="me-2" /> Download as PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JsontoPdf;