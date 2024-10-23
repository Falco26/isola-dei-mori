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
import { Select } from "../Select";
import { languageSelectOptions } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../features/apartments/selectors";
import { apartmentActions } from "../../features/apartments/reducer";
import { SelectChangeEvent } from "@mui/material";

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
  headerClass = "header-container",
  logoClass = "logo-white",
  mainColor = "white",
  buttonTitle = "Contattaci",
  navLink = "CONTACT",
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const color = mainColor === "dark" ? theme.colors.black : theme.colors.white;
  const { i18n } = useTranslation();
  const lang = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 113) {
        setIsSticky(true);
      } else if (window.scrollY < 114) {
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

  const changeLanguage = (e: SelectChangeEvent) => {
    console.log("🚀 ~ changeLanguage ~ e:", e);
    const val = e.target.value;
    i18n.changeLanguage(val);
    dispatch(apartmentActions.setLanguage(val));
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
        <Stack
          gap={15}
          flexDirection="row"
          justifycontent="center"
          alignitems="center"
        >
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
                iconName="Menu"
                iconColor={isSticky ? theme.colors.white : color}
                iconSize={25}
              />
            )}
            {menuOpen && (
              <Icon
                iconName="Close"
                iconColor={theme.colors.white}
                iconSize={25}
              />
            )}
          </button>
          <Stack className="big-screen-select">
            <Select
              options={languageSelectOptions}
              onChange={changeLanguage}
              valueR={lang}
            />
          </Stack>
        </Stack>

        <Stack flex={1}>
          <a href="/">
            <img
              className={`${isSticky ? "logo-sticky" : logoClass}`}
              src="http://www.isoladeimori.it/idm/templates/shape5_vertex/images/s5_logo.png"
              alt="logo isola dei mori"
            />
          </a>
        </Stack>

        <Stack className="small-screen-select">
          <Select
            options={languageSelectOptions}
            onChange={changeLanguage}
            valueR={lang}
          />
        </Stack>

        <Button
          buttonTitle={buttonTitle}
          color={isSticky ? theme.colors.white : color}
          hovercolor={
            isSticky ? theme.colors.grey[300] : theme.colors.grey[100]
          }
          fontSize="sm"
          onClick={() => handleNavigate(navLink)}
          className="book-now-button"
        />
      </Stack>
      {menuOpen && <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};
