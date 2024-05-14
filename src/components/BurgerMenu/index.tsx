import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./style.css";
import { MenuLinks, MenuOption } from "./MenuOptions";
import { appRoutes } from "../../routes";
import { useSelector } from "react-redux";
import { selectApartmentsLink } from "../../features/apartments/selectors";
import { ApartmentLink } from "../../features/apartments/types";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ({ isOpen, toggleMenu }: Props) => {
  const menuRef = useRef(null);
  const apartmentLinks: ApartmentLink[] = useSelector(selectApartmentsLink);

  const menuOptions: MenuOption[] = [
    {
      title: "About us",
      navLink: appRoutes.ABOUT,
      image: "https://images.familyhomeplans.com/plans/51931/51931-b580.jpg",
    },
    {
      title: "Contatti",
      navLink: appRoutes.CONTACT,
      image:
        "https://www.isoladeimori.it/idm/images/phocagallery/appartamenti/corbezzolo/thumbs/phoca_thumb_l_40.jpg",
    },
    {
      title: "Sostenibilità",
      navLink: appRoutes.SUSTENIBILITY,
      image:
        "https://thumbs.dreamstime.com/b/auckland-new-zealand-mar-storey-residential-apartment-building-view-214108586.jpg",
    },
    {
      title: "Appartamenti",
      navLink: appRoutes.HOME,
      image:
        "https://images.pexels.com/photos/19784751/pexels-photo-19784751/free-photo-of-inntel-hotels-amsterdam-in-zaandam-netherlands.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
