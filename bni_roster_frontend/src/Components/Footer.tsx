import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const App: React.FC = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="heart" className="me-3" />
                BNI INDIA
              </h6>
              <p>
              BNI helps you expand your business network, increase referrals, and develop professional skills through structured meetings and supportive relationships.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Excel To Pdf
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Csv To Pdf
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Json To Pdf
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Form To Pdf
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                CC No. 28/2769A, Ponneth South Road,
                Chilavannur, Kadavanthara,
                Kochi - 682020, India.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@bni-india.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 BNI Global:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        All Rights Reserved. All company names, product names logos included here may be registered trademarks or service marks of their respective owners.
        </a>
      </div>
    </MDBFooter>
  );
}

export default App;
