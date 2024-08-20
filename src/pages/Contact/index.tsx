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
import { Header } from "../../components/Header";
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
  const content = useSelector(selectAllContent);
  const { t } = useTranslation();


  return (
    <div className="main-container-contacts">
      <div className="header-content">
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle={t("book-now")}
      />
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
