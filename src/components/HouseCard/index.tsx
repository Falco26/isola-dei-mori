import { theme } from "../../style/theme";
import { Button } from "../Button";
import { Icon } from "../Icon/Index";
import { Image } from "../Image";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { StyledCardImageContainer, StyledHouseCard } from "./styled";
import "./style.css";

type Props = {
  houseName?: string;
  houseDescription?: string;
  wifi?: boolean;
  doubleBeds: number;
  singleBeds: number;
  sofaBeds: number;
  laundry?: boolean;
  onClick: () => void;
  imageSrc?: string;
};

export const HouseCard = ({
  houseName,
  doubleBeds,
  singleBeds,
  sofaBeds,
  houseDescription,
  laundry,
  wifi,
  imageSrc,
  onClick,
}: Props) => {
  return (
    <StyledHouseCard onClick={onClick}>
      <Stack
        flexDirection="column"
        alignitems="flex-start"
        justifycontent="space-between"
        gap={10}
      >
        <StyledCardImageContainer>
          <Image
            src={
              imageSrc ||
              "https://s3-eu-west-1.amazonaws.com/house.italianway.production/apartment/images/attachments/001/099/619/medium/0B6A9302-Modifica.jpg?1681733056"
            }
            alt="Apparamento"
          />
        </StyledCardImageContainer>

        <Stack
          flexDirection="column"
          justifycontent="flex-start"
          alignitems="flex-start"
          gap={10}
        >
          <Stack flexDirection="column" flex={1}>
            <span className="title-house-card">{houseName}</span>
          </Stack>

          <Stack gap={10}>
            {wifi && (
              <Icon
                iconName="WifiRounded"
                iconColor={theme.colors.black}
                iconSize={30}
              />
            )}
            {laundry && (
              <Icon
                iconName="LocalLaundryServiceRounded"
                iconColor={theme.colors.black}
                iconSize={30}
              />
            )}

            {doubleBeds > 0 && (
              <Stack alignitems="center">
                <Icon
                  iconName="DoubleBed"
                  iconColor={theme.colors.black}
                  iconSize={30}
                />
                <Text fontSize="sm" bold>
                  {doubleBeds?.toString()}
                </Text>
              </Stack>
            )}
            {singleBeds > 0 && (
              <Stack alignitems="center">
                <Icon
                  iconName="SingleBed"
                  iconColor={theme.colors.black}
                  iconSize={30}
                />
                <Text fontSize="sm" bold>
                  {singleBeds?.toString()}
                </Text>
              </Stack>
            )}
            {sofaBeds > 0 && (
              <Stack alignitems="center">
                <Icon
                  iconName="Sofa"
                  iconColor={theme.colors.black}
                  iconSize={25}
                />
                <Text fontSize="sm" bold>
                  {sofaBeds?.toString()}
                </Text>
              </Stack>
            )}
          </Stack>
          <Button
            buttonTitle="Scopri"
            icon="ArrowForwardIos"
            onClick={onClick}
          />
        </Stack>
      </Stack>
    </StyledHouseCard>
  );
};
