import { useEffect, useState } from "react";
import { theme } from "../../style/theme";
import { Button } from "../Button";
import { Icon } from "../Icon/Index";
import { Stack } from "../Stack";
import "./style.css";
import { BurgerMenu } from "../BurgerMenu";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useTranslation } from "react-i18next";
import logoIsola from "../../assets/logo_isola_new.png";

type Props = {
  headerClass?: string;
  logoClass?: string;
  headerButtonClass?: string;
  mainColor?: "white" | "dark";
  buttonTitle?: string;
  navLink?: keyof typeof appRoutes | string;
};

export const Header = ({
  headerButtonClass = "header-button",
  headerClass = "header-container fade-in",
  logoClass = "logo-white",
  mainColor = "white",
  buttonTitle = "Contattaci",
  navLink = "CONTACT",
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const color = mainColor === "dark" ? theme.colors.black : theme.colors.white;
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else if (window.scrollY < 200) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close the menu when navigating to a new page
    setMenuOpen(false);
  }, [navLink]); // Re-run effect when the navRoute changes

  const handleNavigate = (navLink: string) => {
    appRoutes[navLink as keyof typeof appRoutes]
      ? navigate(appRoutes[navLink as keyof typeof appRoutes])
      : window.open(navLink);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className={`${headerClass} ${isSticky ? "sticky" : ""}`}>
      <Stack
        justifycontent="space-between"
        alignitems="center"
        flex={1}
        className="header-container-padding"
        paddingvertical={45}
      >
        <Stack gap={15}>
          <button
            className={`${
              menuOpen
                ? "header-button"
                : isSticky
                ? "header-button"
                : headerButtonClass
            }`}
            onClick={toggleMenu}
          >
            {!menuOpen && (
              <Icon
                iconName="MenuRounded"
                iconColor={isSticky ? theme.colors.white : color}
                iconSize={25}
              />
            )}
            {menuOpen && (
              <Icon
                iconName="CloseRounded"
                iconColor={theme.colors.white}
                iconSize={25}
              />
            )}
          </button>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className={isSticky ? "language-select" : "language-select"}
          >
            <option value="en">EN 🇬🇧</option>
            <option value="it">IT 🇮🇹</option>
          </select>
        </Stack>

        <a href="/">
          <img
            className={`${isSticky ? "logo-sticky" : logoClass}`}
            src="http://www.isoladeimori.it/idm/templates/shape5_vertex/images/s5_logo.png"
            alt="logo isola dei mori"
          />
        </a>

        <Button
          buttonTitle={buttonTitle}
          color={isSticky ? theme.colors.white : color}
          hovercolor={
            isSticky ? theme.colors.grey[300] : theme.colors.grey[100]
          }
          fontSize="sm"
          onClick={() => handleNavigate(navLink)}
        />
      </Stack>
      {menuOpen && <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};
