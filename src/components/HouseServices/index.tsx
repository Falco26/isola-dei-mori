import { useTranslation } from "react-i18next";
import { Stack } from "../Stack";
import { Service } from "./Service";
import "./style.css";

type Services = {
  wifi?: boolean;
  doubleBeds: number;
  singleBeds: number;
  sofaBeds: number;
  hasAirConditioning?: boolean;
};

export const HouseServices = ({
  doubleBeds,
  singleBeds,
  sofaBeds,
  hasAirConditioning,
  wifi,
}: Services) => {
  const { t } = useTranslation();
  return (
    <Stack
      flexDirection="row"
      wrap
      flex={1}
      justifycontent="center"
      alignitems="center"
      className="house-services"
      gap={60}
    >
      {wifi && <Service iconName="WifiLucide" serviceDescription="WiFi" />}
      {hasAirConditioning && (
        <Service iconName="AirConditioning" serviceDescription="AC" />
      )}
      {doubleBeds > 0 && (
        <Service
          iconName="DoubleBed"
          serviceDescription={t("double-bed")}
          quantity={doubleBeds}
        />
      )}
      {singleBeds > 0 && (
        <Service
          iconName="SingleBed"
          serviceDescription={t("single-bed")}
          quantity={singleBeds}
        />
      )}
      {sofaBeds > 0 && (
        <Service
          iconName="SofaLucide"
          serviceDescription={t("sofa-bed")}
          quantity={sofaBeds}
        />
      )}
    </Stack>
  );
};
