import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./style.css";
import { ContactGroup } from "../ContactGroup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export type MenuOption = {
  title: string;
  titleEN: string;
  navLink: string;
  childPages?: any[];
  image: string;
};

type Props = {
  menuOptions: MenuOption[];
};

export const MenuLinks = ({ menuOptions }: Props) => {
  const [showChildPages, setShowChildPages] = useState<string | null>(null);
  const [showImage, setShowImage] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    navLink: string,
    image: string
  ) => {
    if (windowWidth >= 768) {
      gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 });
      setShowChildPages(navLink);
      setCurrentImage(image);
      setShowImage(true);
      gsap.fromTo(
        ".image-container",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (windowWidth >= 768) {
      gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
      setShowChildPages(null);
      setShowImage(false);
    }
  };

  const handleClick = (navLink: string) => {
    navigate(navLink);
  };

  return (
    <div className="menu-container">
      <ul className="list-container">
        {menuOptions.map((option) => (
          <li
            key={`${option.navLink}+${windowWidth}`}
            onMouseEnter={(e) =>
              handleMouseEnter(e, option.navLink, option.image)
            }
            onMouseLeave={handleMouseLeave}
            className="list-element"
          >
            <span onClick={() => handleClick(option.navLink)}>
              {i18n.language === "it" ? option.title : option.titleEN}
            </span>
            {(windowWidth < 768 || showChildPages === option.navLink) &&
              option.childPages && (
                <ul className="sub-menu">
                  {option.childPages.map((childOption) => (
                    <li
                      key={childOption.name}
                      onClick={() =>
                        handleClick(childOption.navLink.toLowerCase())
                      }
                      className={`list-child ${
                        windowWidth < 768 && "show-child"
                      }`}
                    >
                      {childOption.name}
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>

      <div className="image-container">
        {showImage && <img src={currentImage} alt="related" />}
      </div>
      <ContactGroup themeButtons="white" />
    </div>
  );
};
