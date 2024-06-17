import React from "react";
import { useSelector } from "react-redux";
import { selectAllContent } from "../../features/apartments/selectors";
import { ContactForm } from "../../components/ContactForm";
import {
  StyledImageContainer,
  StyledHeroGradient,
} from "../../components/HeroHeader/styled";
import "./style.css";
import logoIsola from "../../assets/logo_isola_new.png";

export const ContactPage = () => {
  const content = useSelector(selectAllContent);

  return (
    <div className="main-container-contacts">
      {/* Floating transparent header */}
      <div className="header-content">
        <a href="/">
          <img
            className="logo-white"
            src={logoIsola}
            alt="logo isola dei mori"
          />
        </a>
      </div>
      {/* Hero image */}
      <StyledImageContainer src={content[0]?.url} />
      <StyledHeroGradient className="hero-image-contacts" />

      {/* Contact form */}
      <div className="form-container">
        <ContactForm />
      </div>
    </div>
  );
};
