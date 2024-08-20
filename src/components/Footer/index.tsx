import "./style.css";
import { Stack } from "../Stack";
import { theme } from "../../style/theme";
import { handleCallButtonClick, phoneNumber } from "../ContactGroup";
import { Icon } from "../Icon/Index";
import { Text } from "../Text";
import logo from "../../assets/bookingrating.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const windowWidth = window.innerWidth;
  const { t } = useTranslation();
  return (
    <Stack
      className="footer"
      alignitems="center"
      justifycontent="space-between"
      wrap
    >
      <Stack flexDirection="row" gap={30}>
        <Stack flexDirection="column" alignitems="flex-start" gap={30}>
          <a href="https://www.booking.com/hotel/it/complesso-residenziale-isola-dei-mori.it.html?aid=397594;label=gog235jc-1DCAEoggI46AdIFFgDaHGIAQGYARS4ARfIAQ_YAQPoAQH4AQKIAgGoAgO4Aue18Y4GwAIB0gIkZDVmYmYxMDUtZjEyMi00NjVkLTliZWUtNGMxNTYwMTI0M2Zl2AIE4AIB;sid=4bdde38df2f7894abbde809ec670250f;dest_id=420579;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1641831211;srpvid=50be72157f210088;type=total;ucfs=1&#hotelTmpl">
            <img
              src={logo}
              alt="booking rating logo"
              className="booking-logo"
            />
          </a>
          <Text fontSize="xs">Copyright © 2024. Isola dei Mori.</Text>
        </Stack>
      </Stack>

      <Stack
        flexDirection="column"
        justifycontent="center"
        gap={10}
        className="contacts-footer"
      >
        <Text bold fontSize="md">
          {t("contact-us")}
        </Text>
        <button className="link-reference" onClick={handleCallButtonClick}>
          <Text fontSize="sm">{phoneNumber}</Text>
        </button>
        <button className="link-reference">
          <Text fontSize="sm">{t("info-book")}, info@isoladeimori.it</Text>
        </button>
        <div className="line-gray"></div>
        <Stack gap={25} alignitems="center">
          <Stack>
            <a href="https://www.welcometosantantioco.it/">
              <img
                src="https://welcometosantantioco.it/wp-content/uploads/2020/05/logo-welcome-to-sant-antioco.png"
                alt="logo-sulki-ccn"
                className="logo-sulky"
              />
            </a>
          </Stack>
          <Stack
            className="contact-square"
            justifycontent="center"
            alignitems="center"
            paddinghorizontal={20}
            paddingvertical={20}
            onClick={() =>
              window.open(
                "https://www.instagram.com/case_vacanza_isoladeimori/"
              )
            }
          >
            <Icon
              iconName="Instagram"
              iconColor={theme.colors.black}
              iconSize={40}
            />
          </Stack>
          <Stack
            className="contact-square"
            paddinghorizontal={20}
            paddingvertical={20}
            justifycontent="center"
            alignitems="center"
            onClick={() =>
              window.open("https://www.facebook.com/Isoladeimori?locale=it_IT")
            }
          >
            <Icon
              iconName="Facebook"
              iconColor={theme.colors.black}
              iconSize={40}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
