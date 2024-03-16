import React, { useRef, useEffect } from "react";
import { theme } from "../../style/theme";
import { Icon } from "../Icon/Index";
import gsap from "gsap";
import "./style.css";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ({ isOpen, toggleMenu }: Props) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;

    if (isOpen) {
      gsap.to(menu, { height: "200px", duration: 0.1, ease: "power2.out" });
    } else {
      gsap.to(menu, { height: 0, duration: 0.1, ease: "power2.inOut" });
    }
  }, [isOpen]);

  return (
    <div ref={menuRef} className="menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <Icon
          iconName="CloseRounded"
          iconColor={theme.colors.white}
          iconSize={20}
        />
      </div>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};
