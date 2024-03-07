import { apartments } from "../../api/mocks";
import { ApartmentsCarousel } from "../../components/ApartmentsCarousel";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import { Text } from "../../components/Text";
import "./style.css";

export const HomePage = () => {
  return (
    <>
      <HeroHeader
        title="Isola dei Mori"
        imgSrc="http://www.isoladeimori.it/idm/images/slide/struttura2.jpg?1709153506378"
      />
      <div
        className="apartments-carousel"
        style={{ backgroundColor: "#f0ebe5" }}
      >
        <Stack flexDirection="column">
          <Stack
            flex={1}
            justifycontent="flex-start"
            alignitems="flex-start"
            flexDirection="column"
          >
            <Stack
              flex={1}
              flexDirection="column"
              wrap
              alignitems="flex-start"
              className=""
              paddinghorizontal={200}
              gap={20}
            >
              <Text bold fontSize="xl">
                I nostri appartamenti
              </Text>
              <Text fontSize="md">
                Comode e riservate, le case sono dotate di posto auto privato,
                di una bella terrazza panoramica e di spazi esterni in comune
                attrezzati con barbecue e doccia.
              </Text>
            </Stack>

            <ApartmentsCarousel apartmentList={apartments} />
          </Stack>{" "}
        </Stack>
      </div>
    </>
  );
};
