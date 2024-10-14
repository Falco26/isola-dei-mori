import { useEffect, useState } from "react";
import { theme } from "../../style/theme";
import { Button } from "../Button";
import { Icon } from "../Icon/Index";
import { Stack } from "../Stack";
import "./headerstylesimples.css";
import { BurgerMenu } from "../BurgerMenu";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useTranslation } from "react-i18next";
import { Select } from "../Select";
import { languageSelectOptions } from "../../constants/constants";

type Props = {
  headerClass?: string;
  logoClass?: string;
  headerButtonClass?: string;
  mainColor?: "white" | "dark";
  buttonTitle?: string;
  navLink?: keyof typeof appRoutes | string;
};

export const SimpleHeader = ({
  buttonTitle = "Contattaci",
  navLink = "CONTACT",
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    // Close the menu when navigating to a new page
    setMenuOpen(false);
  }, [navLink]); // Re-run effect when the navRoute changes

  const handleNavigate = (navLink: string) => {
    appRoutes[navLink as keyof typeof appRoutes]
      ? navigate(appRoutes[navLink as keyof typeof appRoutes])
      : window.open(navLink);
  };

  return (
    <Stack
      justifycontent="center"
      alignitems="center"
      flex={1}
      paddingvertical={45}
      flexDirection="row"
      paddinghorizontal={60}
      className="header"
    >
      <Stack flex={1}>
        <a href="/">
          <img
            className="logo"
            src="http://www.isoladeimori.it/idm/templates/shape5_vertex/images/s5_logo.png"
            alt="logo isola dei mori"
          />
        </a>
      </Stack>
    </Stack>
  );
};
