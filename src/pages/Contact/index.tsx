import React from "react";
import { useSelector } from "react-redux";
import { selectAllContent } from "../../features/apartments/selectors";
import { ContactForm } from "../../components/ContactForm";
import {
  StyledImageContainer,
  StyledHeroGradient,
} from "../../components/HeroHeader/styled";
import "./style.css";
import logoIsola from "../../assets/logo_isola.png";
import { imagesResponse } from "../../api/responses";
import { Icon } from "../../components/Icon/Index";
import { theme } from "../../style/theme";

export const ContactPage = () => {
  const content = useSelector(selectAllContent);

  return (
    <div className="main-container-contacts">
      {/* Floating transparent header */}
      <div className="header-content">
        <div className="button-container-back">
          <button className="back-button" onClick={() => window.history.back()}>
            <Icon
              iconName="ArrowBackIosRounded"
              iconColor={theme.colors.white}
              iconSize={20}
            />
          </button>
        </div>

        <a href="/">
          <img
            className="logo-white"
            src={logoIsola}
            alt="logo isola dei mori"
          />
        </a>
        <div style={{ flex: 1, width: "100%" }} />
      </div>
      {/* Hero image */}
      <StyledImageContainer src={content?.[0]?.url || imagesResponse[0].url} />
      <StyledHeroGradient className="hero-image-contacts" />

      {/* Contact form */}
      <div className="form-container">
        <ContactForm />
      </div>
    </div>
  );
};
