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
import { imagesResponse } from "../../api/responses";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ({ isOpen, toggleMenu }: Props) => {
  const menuRef = useRef(null);
  //@ts-ignore
  const apartmentLinks: ApartmentLink[] = useSelector(selectApartmentsLink);
  //@ts-ignore
  const appImages: Photo[] = useSelector(selectAllContent);
  const { t } = useTranslation();

  const menuOptions: MenuOption[] = [
    {
      title: "Chi siamo",
      titleEN: "About us",
      navLink: appRoutes.ABOUT,
      image: appImages[0]?.url,
    },
    {
      title: "Contatti",
      titleEN: "Contact us",
      navLink: appRoutes.CONTACT,
      image: appImages[1]?.url,
    },
    {
      title: "Sostenibilità",
      titleEN: "Sustainability",
      navLink: appRoutes.SUSTENIBILITY,
      image: appImages[2]?.url,
    },
    {
      title: "Case",
      titleEN: "Homes",
      navLink: appRoutes.HOME,
      image: appImages[3]?.url,
      childPages: apartmentLinks ?? [
        { name: "Isola", image: imagesResponse[2].url },
      ],
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
      <MenuLinks menuOptions={menuOptions} toggleMenu={toggleMenu} />{" "}
    </div>
  );
};
