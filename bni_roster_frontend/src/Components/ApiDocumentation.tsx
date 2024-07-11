import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const ApiDocumentation: React.FC = () => {
  return (
    <MDBContainer className="my-5">
      <h1 className="text-center mb-4">PDF Generation API Documentation</h1>
      
      <MDBRow>
        <MDBCol>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBCardTitle>API Endpoints</MDBCardTitle>
              <br></br><h5>http://localhost:4000</h5><br></br>
              <MDBCardText>
                <h4>Generate Excel PDF</h4>
                
                <h5>Request</h5>
                <pre><code>
                  {`POST http://localhost:4000/excel/upload
Content-Type: multipart/form-data

Body:
{
  file: [Your Excel file]
}`}
                </code></pre>
                
                <h5>Response</h5>
                <pre><code>
                  {`{
    "message": "File uploaded and processed successfully",
    "pdfId": "38941c48-70b9-46cf-853b-4625fdd4d987",
    "previewUrl": "http://localhost:4000/excel/preview/38941c48-70b9-46cf-853b-4625fdd4d987",
    "downloadUrl": "http://localhost:4000/excel/download/38941c48-70b9-46cf-853b-4625fdd4d987"
}`}
                </code></pre>

                <h5>Response Details</h5>
                <ul>
                  <li><strong>message:</strong> Confirmation message of successful upload and processing</li>
                  <li><strong>pdfId:</strong> Unique identifier for the generated PDF</li>
                  <li><strong>previewUrl:</strong> URL to preview the generated PDF</li>
                  <li><strong>downloadUrl:</strong> URL to download the generated PDF</li>
                </ul>
              </MDBCardText>

              <MDBCardText>
                <h4>Generate JSON PDF</h4>
                
                <h5>Request</h5>
                <pre><code>
                  {`POST http://localhost:4000/json/upload
Content-Type: multipart/form-data

Body:
{
  file: [Your JSON file]
}`}
                </code></pre>
                
                <h5>Response</h5>
                <pre><code>
                  {`{
  "message": "File uploaded and processed successfully",
  "pdfId": "c4e787fe-0923-4358-b4a5-6bfe2224174e",
  "previewUrl": "http://localhost:4000/json/preview/c4e787fe-0923-4358-b4a5-6bfe2224174e",
  "downloadUrl": "http://localhost:4000/json/download/c4e787fe-0923-4358-b4a5-6bfe2224174e"
}`}
                </code></pre>

                <h5>Response Details</h5>
                <ul>
                  <li><strong>message:</strong> Confirmation message of successful upload and processing</li>
                  <li><strong>pdfId:</strong> Unique identifier for the generated PDF</li>
                  <li><strong>previewUrl:</strong> URL to preview the generated PDF</li>
                  <li><strong>downloadUrl:</strong> URL to download the generated PDF</li>
                </ul>
              </MDBCardText>

              <MDBCardText>
                <h4>Generate Form PDF</h4>
                
                <h5>Request</h5>
                <pre><code>
                  {`POST http://localhost:4000/form/upload
Content-Type: multipart/form-data

Body:
{
  file: [Your Form data file]
}`}
                </code></pre>
                
                <h5>Response</h5>
                <pre><code>
                  {`{
  "message": "File uploaded and processed successfully",
  "pdfId": "x1y2z3w4-5v6u-7t8s-9r0q-p1o2n3m4l5k6",
  "previewUrl": "http://localhost:4000/form/preview/x1y2z3w4-5v6u-7t8s-9r0q-p1o2n3m4l5k6",
  "downloadUrl": "http://localhost:4000/form/download/x1y2z3w4-5v6u-7t8s-9r0q-p1o2n3m4l5k6"
}`}
                </code></pre>

                <h5>Response Details</h5>
                <ul>
                  <li><strong>message:</strong> Confirmation message of successful upload and processing</li>
                  <li><strong>pdfId:</strong> Unique identifier for the generated PDF</li>
                  <li><strong>previewUrl:</strong> URL to preview the generated PDF</li>
                  <li><strong>downloadUrl:</strong> URL to download the generated PDF</li>
                </ul>
              </MDBCardText>
              <MDBCardText>
                <h4>Generate CSV PDF</h4>
                
                <h5>Request</h5>
                <pre><code>
                  {`POST http://localhost:4000/csv/upload
Content-Type: multipart/form-data

Body:
{
  file: [Your CSV file]
}`}
                </code></pre>
                
                <h5>Response</h5>
                <pre><code>
                  {`{
    "message": "File uploaded and processed successfully",
    "pdfId": "e50b54aa-cd4b-4741-a866-779b98a0d557",
    "previewUrl": "http://localhost:4000/csv/preview/e50b54aa-cd4b-4741-a866-779b98a0d557",
    "downloadUrl": "http://localhost:4000/csv/download/e50b54aa-cd4b-4741-a866-779b98a0d557"
}`}
                </code></pre>

                <h5>Response Details</h5>
                <ul>
                  <li><strong>message:</strong> Confirmation message of successful upload and processing</li>
                  <li><strong>pdfId:</strong> Unique identifier for the generated PDF</li>
                  <li><strong>previewUrl:</strong> URL to preview the generated PDF</li>
                  <li><strong>downloadUrl:</strong> URL to download the generated PDF</li>
                </ul>
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ApiDocumentation;