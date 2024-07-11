import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import { FaFileUpload, FaEye, FaDownload } from 'react-icons/fa';
import axios from 'axios';

const JsontoPdf: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
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

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handlePreview = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post('http://localhost:4000/api/json-to-pdf/upload', formData);
        console.log('API Response:', response.data);
        setPreviewUrl(response.data.previewUrl);
        setDownloadUrl(response.data.downloadUrl);
        setStep(3);
        window.open(response.data.previewUrl, '_blank');
      } catch (error) {
        console.error('Error generating preview:', error);
        if (axios.isAxiosError(error)) {
          console.error('Axios error details:', error.response?.data);
          setError(`Failed to generate PDF preview: ${error.response?.data?.message || error.message}`);
        } else {
          setError('An unexpected error occurred');
        }
      }
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">
        <span className="text-secondary">JSON</span> TO <span className="text-danger">PDF</span>
      </h1>

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

      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <Button
            variant="success"
            onClick={handlePreview}
            disabled={!file}
            className="me-3"
          >
            <FaEye className="me-2" /> Preview PDF
          </Button>
          <Button
            variant="danger"
            onClick={handleDownload}
            disabled={!downloadUrl}
          >
            <FaDownload className="me-2" /> Download PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JsontoPdf;

  // const handleDownload = async () => {
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     try {
  //       const response = await axios.post('/api/json-to-pdf/upload', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //         responseType: 'blob',
  //       });

  //       const url = window.URL.createObjectURL(new Blob([response.data]));
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', 'output.pdf');
  //       document.body.appendChild(link);
  //       link.click();
  //     } catch (error) {
  //       setError('Failed to download PDF. Please try again.');
  //     }
  //   }
  // };
