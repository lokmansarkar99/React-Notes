import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

// Navbar container
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 25px 15px;
  }
`;

// Logo styling
const Logo = styled.img`
  height: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 30px; /* Smaller logo for mobile */
  }
`;

// Navbar content wrapper (logo, search, menu)
const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// Search bar container (centered)
const SearchContainer = styled.div`
 
flex: 1;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 60%; /* Take more width in mobile */
    top: 15px;
    left: 58%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  background: #f9f9f9;
  transition: 0.3s;

  &:focus {
    border-color: #ffcc00;
    background: white;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 8px 12px;
  }
`;

// Menu Container (for desktop and mobile)
const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
  }
`;

// Nav Item styling
const NavItem = styled.li`
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Hamburger Icon for mobile
const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar({ search, setSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarContent>
        {/* Logo */}
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon Logo"
        />

        {/* Search Bar */}
        <SearchContainer>
          <SearchInput type="text" placeholder="Search Pokémon..."  value={search} onChange={(e) => {
                    setSearch(e.target.value)}}  />
        </SearchContainer>

        {/* Hamburger Menu (Mobile Only) */}
        <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerIcon>

        {/* Menu (Desktop and Mobile) */}
        <NavLinks isOpen={isMenuOpen}>
          <NavItem>Home</NavItem>
          <NavItem>Pokédex</NavItem>
          <NavItem>Games</NavItem>
          <NavItem>Contact</NavItem>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
