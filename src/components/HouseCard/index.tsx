import { Button } from "../Button";
import { Image } from "../Image";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { StyledCardImageContainer, StyledHouseCard } from "./styled";

type Props = {
  houseName: string;
  services: any[];
  onClick: () => void;
};

export const HouseCard = ({ houseName, onClick }: Props) => {
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
            src="https://s3-eu-west-1.amazonaws.com/house.italianway.production/apartment/images/attachments/001/099/619/medium/0B6A9302-Modifica.jpg?1681733056"
            alt="Apparamento"
          />
        </StyledCardImageContainer>

        <Stack
          flexDirection="column"
          justifycontent="flex-start"
          alignitems="flex-start"
          gap={10}
        >
          <Text fontSize="l">{houseName}</Text>
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
