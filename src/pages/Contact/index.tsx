import { Box } from "../../components/Box";
import { ContactForm } from "../../components/ContactForm";
import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon/Index";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";
import { theme } from "../../style/theme";
import { GoogleMapsButton } from "../Map";
import "./style.css";

export const ContactPage = () => {
  const phoneNumber = "+393457717855";

  const handleCallButtonClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleMailClik = () => {
    const mailtoLink = `mailto:info@isoladeimori.it`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <Header
        logoClass="logo-dark"
        headerButtonClass="header-button-dark"
        mainColor="dark"
        headerClass="header-not-absolute"
        buttonTitle="Prenota ora"
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
      />

      <Stack
        flexDirection="row"
        className="main-container-contact"
        alignitems="center"
        justifycontent="space-around"
        wrap
        gap={30}
        paddingvertical={100}
      >
        <div>
          <ContactForm />
        </div>
        <Stack flexDirection="column" gap={20}>
          <Box
            bordercolor={theme.colors.black}
            borderstyle="solid"
            borderwidth={1}
            className="contact-box"
          >
            <Icon
              iconName="Instagram"
              iconColor={theme.colors.black}
              iconSize={50}
            />
            <Text bold fontSize="md">
              @isoladeimori
            </Text>
          </Box>
          <a href={`tel:${phoneNumber}`} onClick={handleMailClik}>
            <Box
              bordercolor={theme.colors.black}
              borderstyle="solid"
              borderwidth={1}
              className="contact-box"
            >
              <Icon
                iconName="MailRounded"
                iconColor={theme.colors.black}
                iconSize={50}
              />
              <Text bold fontSize="md">
                info@isoladeimori.it
              </Text>
            </Box>
          </a>
          <a href={`tel:${phoneNumber}`} onClick={handleCallButtonClick}>
            <Box
              bordercolor={theme.colors.black}
              borderstyle="solid"
              borderwidth={1}
              className="contact-box"
            >
              <Icon
                iconName="PhoneRounded"
                iconColor={theme.colors.black}
                iconSize={50}
              />
              <Text bold fontSize="md">
                +39 3457717855
              </Text>
            </Box>
          </a>

          <GoogleMapsButton themeButtons="black" />
        </Stack>
      </Stack>
    </>
  );
};
