import React from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

// Footer Container
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #ffffff; /* White background */
  color: #333; /* Dark text color */
  padding: 40px 20px;
  text-align: center;
  margin-top: 40px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Drop shadow effect */
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

// Footer Content Wrapper
const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

// Footer Links (related Pokémon sections)
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const FooterLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #333; /* Dark color for text */
  font-weight: 600;

  &:hover {
    color: #ffcc00; /* Gold color on hover */
    text-decoration: underline; /* Underline effect */
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Social Icons Container
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 28px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; /* Gold color on hover */
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// Footer Text
const FooterText = styled.p`
  margin-top: 30px;
  font-size: 16px;
  color: #777; /* Lighter color for copyright text */

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <h2>Pokémon Mania</h2>
        <FooterLinks>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/pokedex">Pokédex</FooterLink>
          <FooterLink href="/games">Games</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterLinks>
        <SocialIcons>
          <SocialIcon href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank">
            <FaInstagram />
          </SocialIcon>
        </SocialIcons>
        <FooterText>© 2025 Pokémon Mania. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
