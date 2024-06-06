import { Stack } from "../Stack";
import { Service } from "./Service";

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
    <Stack flexDirection="row" wrap flex={1} gap={20}>
      {wifi && <Service iconName="WifiRounded" serviceDescription="WiFi" />}
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
          iconName="Sofa"
          serviceDescription="Divano Letto"
          quantity={sofaBeds}
        />
      )}
    </Stack>
  );
};
