import { useState } from "react";
import { theme } from "../../style/theme";
import { Button } from "../Button";
import { Icon } from "../Icon/Index";
import { Stack } from "../Stack";
import "./style.css";
import { BurgerMenu } from "../BurgerMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <Stack
        justifycontent="space-between"
        alignitems="center"
        flex={1}
        paddinghorizontal={200}
        paddingvertical={70}
      >
        <button className="header-button" onClick={toggleMenu}>
          <Icon
            iconName="MenuRounded"
            iconColor={theme.colors.white}
            iconSize={20}
          />
        </button>
        <img
          className="logo"
          src="http://www.isoladeimori.it/idm/templates/shape5_vertex/images/s5_logo.png"
          alt="logo isola dei mori"
        />
        <Button
          buttonTitle="Contattaci"
          color={theme.colors.white}
          hovercolor={theme.colors.grey[100]}
          fontSize="xs"
        />
      </Stack>
      {menuOpen && <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};
