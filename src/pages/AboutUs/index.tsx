import { useEffect } from "react";
import { apartments, homeCarouselDescription } from "../../api/mocks";
import { ApartmentsCarousel } from "../../components/ApartmentsCarousel";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../HomePage/style.css";
import "./style.css";
import { TextSection } from "../../components/TextSection";
import { Button } from "../../components/Button";
import { initFadeInAnimation } from "../../animation";
import { Header } from "../../components/Header";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  useEffect(() => {
    initFadeInAnimation(".fade-in");
  });
  return (
    <>
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle="Prenota ora"
      />
      <HeroHeader
        title="About Us"
        imgSrc="http://www.isoladeimori.it/idm/images/slide/struttura2.jpg?1709153506378"
        className="fade-in"
      />
      <Stack flexDirection="column">
        <div className="first-home">
          <div className="text-container-centered">
            <h1 className="fade-in">Su di noi</h1>
            <div className="description-first-home ">
              <span className="fade-in">
                Le case, con i loro caratteristici arredi dalle tinte chiare,
                realizzati in tipico stile sardo, sono costituite da una zona
                giorno con angolo cottura e zona soggiorno-pranzo, due camere da
                letto ed un bagno. Dotate di ampio porticato indipendente e da
                un grande giardino con prato, offrono la possibilità di godere
                delle cene all’aperto ammirando i meravigliosi tramonti sul
                mare. Comode e riservate, le case sono dotate di posto auto
                privato, di una bella terrazza panoramica e di spazi esterni in
                comune attrezzati con barbecue e doccia.
              </span>
              <span className="fade-in">
                Soggiornare nel complesso dell’Isola dei Mori è un’occasione
                unica per vivere la natura incontaminata dell ‘Isola di
                Sant’Antioco in un ambiente piacevole e dotato di tutti i
                confort. Non perdere l’opportunità di sentirti parte di un mondo
                tutto da scoprire.
              </span>
            </div>
          </div>
          <Stack className="button-group">
            <Button
              buttonTitle="Scopri la disponibilità"
              icon="ArrowForwardIosRounded"
              fontSize="md"
              className="button-home-book fade-in"
            />
          </Stack>
        </div>
        <Stack
          flexDirection="column"
          gap={30}
          paddingvertical={50}
          className="second-about"
        >
          <TextSection
            title="Isola di Sant'Antioco"
            subtitle="L'Isola di Sant'Antioco, situata nel sud-ovest della Sardegna, è la quarta isola italiana per estensione. Di origine vulcanica, presenta una costa rocciosa con falesie e grotte a ovest e una costa sabbiosa e lagunare a est. Divisa in due comuni, Sant'Antioco a sud e Calasetta a nord, l'isola è caratterizzata da una vegetazione mediterranea e coltivazioni di ortaggi e viti. Il clima è mediterraneo, con inverni freschi e estati calde e aride."
          />
          <TextSection
            title="Isola di Sant'Antioco"
            subtitle="L'Isola di Sant'Antioco, situata nel sud-ovest della Sardegna, è la quarta isola italiana per estensione. Di origine vulcanica, presenta una costa rocciosa con falesie e grotte a ovest e una costa sabbiosa e lagunare a est. Divisa in due comuni, Sant'Antioco a sud e Calasetta a nord, l'isola è caratterizzata da una vegetazione mediterranea e coltivazioni di ortaggi e viti. Il clima è mediterraneo, con inverni freschi e estati calde e aride."
          />
        </Stack>
      </Stack>
    </>
  );
};
