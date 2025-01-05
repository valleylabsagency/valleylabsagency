import React from 'react';
import styled from 'styled-components';
import navLogo from '../assets/images/logo-nav.png';

const Navbar = () => {
  return (
    <Nav>
      <NavSection>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Services</NavItem>
      </NavSection>
      <img style={{height: "40px", width: "40px"}} src={navLogo} alt="logo" />
      <NavSection>
        <NavItem>Case Studies</NavItem>
        <NavItem>Contact</NavItem>
        <PhoneNumber>850-900-6732</PhoneNumber>
      </NavSection>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Ensures items wrap on smaller screens */
`;

const NavItem = styled.div`
  margin: 0 1rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  color: #004888;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Monoton', serif;
  color: white;
  text-align: center;
`;

const PhoneNumber = styled.div`
  margin-left: 1rem;
  font-weight: bold;
  color: #004888;
  font-size: 1rem;
  white-space: nowrap; /* Prevents the phone number from breaking */
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px; /* Ensures it fits within the screen */
`;
