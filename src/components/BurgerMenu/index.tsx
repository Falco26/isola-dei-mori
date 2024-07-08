import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./style.css";
import { MenuLinks, MenuOption } from "./MenuOptions";
import { appRoutes } from "../../routes";
import { useSelector } from "react-redux";
import {
  selectAllContent,
  selectApartmentsLink,
} from "../../features/apartments/selectors";
import { ApartmentLink } from "../../features/apartments/types";
import { Photo } from "../../api/types";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ({ isOpen, toggleMenu }: Props) => {
  const menuRef = useRef(null);
  const apartmentLinks: ApartmentLink[] = useSelector(selectApartmentsLink);
  const appImages: Photo[] = useSelector(selectAllContent);

  const menuOptions: MenuOption[] = [
    {
      title: "Chi siamo",
      navLink: appRoutes.ABOUT,
      image: appImages[0]?.url,
    },
    {
      title: "Contatti",
      navLink: appRoutes.CONTACT,
      image: appImages[1]?.url,
    },
    {
      title: "Sostenibilità",
      navLink: appRoutes.SUSTENIBILITY,
      image: appImages[2]?.url,
    },
    {
      title: "Appartamenti",
      navLink: appRoutes.HOME,
      image: appImages[3]?.url,
      childPages: apartmentLinks,
    },
  ];

  useEffect(() => {
    const menu = menuRef.current;

    if (isOpen) {
      gsap.to(menu, { height: "100vh", duration: 0.3, ease: "power2.out" });
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <div ref={menuRef} className={`menu ${isOpen ? "open" : ""}`}>
      <MenuLinks menuOptions={menuOptions} />
    </div>
  );
};
