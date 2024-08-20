import React from "react";
import { Button } from "../../components/Button";
import { theme } from "../../style/theme";
import { useTranslation } from "react-i18next";

type Props = {
  themeButtons: "white" | "black";
};

export const GoogleMapsButton = ({ themeButtons }: Props) => {
  const mainColor =
    themeButtons === "black" ? theme.colors.black : theme.colors.white;
    const { t } = useTranslation();

  const redirectToGoogleMaps = () => {
    // Replace latitude and longitude with the coordinates of the place you want to redirect to
    const latitude = 40.7128; // Example latitude (e.g., New York City)
    const longitude = -74.006;

    // Construct the Google Maps URL with the coordinates
    const googleMapsUrl = `https://maps.app.goo.gl/poAWqAyAbLFEbUkLA`;

    // Redirect to the Google Maps URL
    window.open(googleMapsUrl);
  };



  return (
    <Button
      onClick={redirectToGoogleMaps}
      buttonTitle={t("find-us")}
      fontSize="lg"
      color={mainColor}
      hovercolor={theme.colors.grey[300]}
    />
  );
};
