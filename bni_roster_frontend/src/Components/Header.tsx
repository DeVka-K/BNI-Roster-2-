import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';



const App: React.FC = () => {
  const [openNavSecond, setOpenNavSecond] = useState(false);











  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='ms-5' >
            <img
              src='/Images/bnilogo2.png'
              height='35'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond } >
        {/*  */}
          <MDBNavbarNav right fullWidth={false}>
            <MDBNavbarItem style={{display:'flex', flexDirection:'column',alignItems:'center',paddingLeft:'48rem'}} >
              <MDBNavbarLink active aria-current='page' href='#' className='me-4'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBDropdown >
              
                <MDBDropdownToggle tag='a' className='nav-link me-4' role='button'>
                  Products
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link to='/excel-to-pdf'>Excel To Pdf</MDBDropdownItem>
                  <MDBDropdownItem link>Form To Pdf</MDBDropdownItem>
                  <MDBDropdownItem link>Csv To Pdf</MDBDropdownItem>
                  <MDBDropdownItem link>Json To Pdf</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem  className='me-4' >
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarLink tag='a' className='nav-link me-4' role='button'>
            Api Documentation
                </MDBNavbarLink>
            <MDBNavbarItem style={{paddingLeft:'15rem'}}>
            <MDBBtn  outline color="success" className='me-5' type='button'  >
          Sign Up
        </MDBBtn>
        <MDBBtn outline color="success"  type='button'>
          Log In
        </MDBBtn>
              {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink> */}
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default App;