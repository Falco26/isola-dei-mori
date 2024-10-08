import { GoogleMapsButton } from "../../pages/Map";
import { theme } from "../../style/theme";
import { Box } from "../Box";
import { Icon } from "../Icon/Index";
import { Stack } from "../Stack";
import { Text } from "../Text";
import "./style.css";

type Props = {
  themeButtons: "white" | "black";
};

export const phoneNumber = "+393457717855";

export const handleCallButtonClick = () => {
  window.open(`tel:${phoneNumber}`);
};
export const ContactGroup = ({ themeButtons }: Props) => {
  const mainColor =
    themeButtons === "black" ? theme.colors.black : theme.colors.white;

  const handleMailClik = () => {
    const mailtoLink = `mailto:info@isoladeimori.it`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="button-contacts-container">
      <Box
        bordercolor={mainColor}
        borderstyle="solid"
        borderwidth={1}
        className="contact-button"
        onClick={() =>
          window.open("https://www.instagram.com/case_vacanza_isoladeimori/")
        }
      >
        <Icon iconName="Instagram" iconColor={mainColor} iconSize={50} />
        <Text bold fontSize="md" color={mainColor}>
          @isoladeimori
        </Text>
      </Box>
      <a
        href={`tel:${phoneNumber}`}
        onClick={handleMailClik}
        className={themeButtons === "black" ? "link-black" : "link-white"}
      >
        <Box
          bordercolor={mainColor}
          borderstyle="solid"
          borderwidth={1}
          className="contact-button"
        >
          <Icon iconName="MailRounded" iconColor={mainColor} iconSize={50} />
          <Text bold fontSize="md">
            info@isoladeimori.it
          </Text>
        </Box>
      </a>
      <a
        href={`tel:${phoneNumber}`}
        onClick={handleCallButtonClick}
        className={themeButtons === "black" ? "link-black" : "link-white"}
      >
        <Box
          bordercolor={mainColor}
          borderstyle="solid"
          borderwidth={1}
          className="contact-button"
        >
          <Icon iconName="PhoneRounded" iconColor={mainColor} iconSize={50} />
          <Text bold fontSize="md">
            +39 3457717855
          </Text>
        </Box>
      </a>

      <GoogleMapsButton themeButtons="white" />
    </div>
  );
};
