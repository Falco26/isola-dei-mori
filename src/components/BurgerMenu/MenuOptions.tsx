import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./style.css";
import { ContactGroup } from "../ContactGroup";
import { log } from "console";

export type MenuOption = {
  title: string;
  navLink: string;
  childPages?: any[];
  image: string;
};

type Props = {
  menuOptions: MenuOption[];
};

export const MenuLinks = ({ menuOptions }: Props) => {
  const navigate = useNavigate();
  const [showChildPages, setShowChildPages] = useState<string | null>(null);
  const [showImage, setShowImage] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const windowWidth = window.innerWidth;

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    navLink: string,
    image: string
  ) => {
    gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 });
    setShowChildPages(navLink);
    setCurrentImage(image);
    setShowImage(true);
    gsap.fromTo(
      ".image-container",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
    setShowChildPages(null);
    setShowImage(false);
  };

  const handleClick = (navLink: string) => {
    window.location.href = navLink;
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
              {option.title}
            </span>
            {windowWidth < 768 ||
              (showChildPages === option.navLink && option.childPages && (
                <ul className="sub-menu">
                  {option.childPages.map((childOption) => (
                    <li
                      key={childOption.name}
                      onClick={() =>
                        handleClick(childOption.navLink.toLowerCase())
                      }
                      className="list-child"
                    >
                      {childOption.name}
                    </li>
                  ))}
                </ul>
              ))}
          </li>
        ))}
      </ul>

      <div className="image-container">
        {showImage && <img src={currentImage} alt="Palle" />}
      </div>
      <ContactGroup themeButtons="white" />
    </div>
  );
};
