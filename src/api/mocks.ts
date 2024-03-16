import { Apartment } from "./endpoints";

export const apartments: Apartment[] = [
  {
    id: "0",
    type: "bilocale",
    name: "Bilocali",
    photo:
      "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
    beds: 4,
    wifi: true,
    laundry: true,
    description:
      "Acme Fresh Start Housing in Chicago, Illinois, offers a rejuvenating living experience. With 4 available units, this facility provides a fresh start for residents. Enjoy the convenience of WiFi and laundry facilities. The cozy atmosphere and modern amenities make it an ideal choice for those seeking a comfortable and supportive living environment.",
  },
  {
    id: "1",
    type: "monolocale",
    name: "Monolocali",
    photo:
      "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
    beds: 0,
    wifi: false,
    laundry: true,
    description:
      "A113 Transitional Housing in Santa Monica, California, provides a supportive transition for residents. Though currently at full capacity, the facility offers laundry services. While WiFi is not available, the compassionate atmosphere makes it a place of hope and transition for those in need.",
  },
  {
    id: "2",
    type: "trilocale",
    name: "Doppia Matrimoniale",
    photo:
      "https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
    beds: 1,
    wifi: false,
    laundry: false,
    description:
      "Warm Beds Housing Support in Juneau, Alaska, offers a warm and supportive environment with 1 available unit. While WiFi and laundry facilities are not provided, the focus is on creating a comforting and safe space for residents in need of housing support.",
  },
  {
    id: "3",
    type: "trilocale",
    name: "Trilocali",
    photo:
      "https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
    beds: 1,
    wifi: true,
    laundry: false,
    description:
      "Homesteady Housing in Chicago, Illinois, provides a homely atmosphere with 1 available unit. Offering WiFi connectivity and excluding laundry facilities, it is an ideal place for those seeking a cozy home with modern amenities and a supportive community.",
  },
];

export const homeCarouselDescription = {
  title: "I nostri appartamenti",
  subtitle:
    "Comode e riservate, le case sono dotate di posto auto privato, di una bella terrazza panoramica e di spazi esterni in comune attrezzati con barbecue e doccia. Comode e riservate, le case sono dotate di posto auto privato, di una bella terrazza panoramica e di spazi esterni in comune attrezzati con barbecue e doccia.",
};
