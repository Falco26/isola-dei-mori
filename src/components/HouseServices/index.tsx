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
          serviceDescription="Letto Matrimoniale"
          quantity={doubleBeds}
        />
      )}
      {singleBeds > 0 && (
        <Service
          iconName="SingleBed"
          serviceDescription="Letto Singolo"
          quantity={singleBeds}
        />
      )}
      {sofaBeds > 0 && (
        <Service
          iconName="SofaLucide"
          serviceDescription="Divano Letto"
          quantity={sofaBeds}
        />
      )}
    </Stack>
  );
};
