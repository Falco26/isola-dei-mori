import { Apartment, Reviews } from "./types";

// export const apartments: Apartment[] = [
//   {
//     id: "0",
//     type: "bilocale",
//     name: "Bilocali",
//     images: [
//       {
//         id: 1,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 2,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 3,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 4,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 5,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 6,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 7,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 8,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 9,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 10,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//     ],

//     beds: 4,
//     wifi: true,
//     laundry: true,
//     description:
//       "Acme Fresh Start Housing in Chicago, Illinois, offers a rejuvenating living experience. With 4 available units, this facility provides a fresh start for residents. Enjoy the convenience of WiFi and laundry facilities. The cozy atmosphere and modern amenities make it an ideal choice for those seeking a comfortable and supportive living environment.",
//   },
//   {
//     id: "1",
//     type: "monolocale",
//     name: "Monolocali",

//     images: [
//       {
//         id: 1,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 2,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 3,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 4,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 5,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 6,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 7,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 8,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 9,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 10,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//     ],
//     beds: 0,
//     wifi: false,
//     laundry: true,
//     description: `La casa più piccola, denominata Corbezzolo, ha una superficie
//                   di 55 mq. e si compone di zona giorno con angolo cottura
//                   attrezzato (piano cottura 4 fuochi, cappa, forno, lavello 2
//                   vasche, lavastoviglie e frigo-congelatore) e zona pranzo con
//                   un divano letto matrimoniale, tavolo allungabile con 6 sedie,
//                   mobile basso allestito con le stoviglie e tv con antenna
//                   satellitare; camera matrimoniale con letto a due piazze,
//                   comodini, ripiano con specchio e armadio; disimpegno con
//                   armadio a muro nel quale trovano ricovero le scope, secchi e
//                   stracci oltre all’ombrellone e le sedie a sdraio. Il bagno
//                   attrezzato con wc, bidet, lavabo, specchio e doccia con il
//                   box. Inoltre all’esterno la casa è dotata di un’ampia veranda
//                   esclusiva coperta di circa mq. 15 arredata con due
//                   poltroncine, un divano ed un tavolino tutto in vimini.`,
//   },
//   {
//     id: "2",
//     type: "trilocale",
//     name: "Doppia Matrimoniale",
//     images: [
//       {
//         id: 1,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 2,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 3,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 4,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 5,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 6,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 7,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 8,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 9,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 10,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//     ],
//     beds: 1,
//     wifi: false,
//     laundry: false,
//     description:
//       "Warm Beds Housing Support in Juneau, Alaska, offers a warm and supportive environment with 1 available unit. While WiFi and laundry facilities are not provided, the focus is on creating a comforting and safe space for residents in need of housing support.",
//   },
//   {
//     id: "3",
//     type: "trilocale",
//     name: "Trilocali",
//     images: [
//       {
//         id: 1,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 2,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 3,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 4,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 5,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 6,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 7,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 8,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//       {
//         id: 9,
//         source:
//           "https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg=",
//       },
//       {
//         id: 10,
//         source:
//           "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
//       },
//     ],
//     beds: 1,
//     wifi: true,
//     laundry: false,
//     description: `La casa Lavanda ha una superficie di mq. 60, ha al suo inerno, due belle camere da lettoa due piazze arredate con tende e copriletti sardi, un disimpegno alle camere, un ampio soggiorno nel quale trova spazio l'angolo cottura e la zona pranzo, divano letto singolo e mobile con tv, oltre al disimpegno al bagno ed un bel bagno con doccia incassata , tutto piastrellato con piastrelle di colore azzurro mare della Cerasarda. Ogni casa è dotata di phon, ferro da stiro e stendino.`,
//   },
// ];

export const homeCarouselDescription = {
  title: "I nostri appartamenti",
  subtitle:
    "Comode e riservate, le case sono dotate di posto auto privato, di una bella terrazza panoramica e di spazi esterni in comune attrezzati con barbecue e doccia. Comode e riservate, le case sono dotate di posto auto privato, di una bella terrazza panoramica e di spazi esterni in comune attrezzati con barbecue e doccia.",
};

export const reviewsMock: Reviews[] = [
  {
    id: 1,
    titleIT: "Soggiorno Magnifico",
    titleEN: "Magnificent Stay",
    descrizioneIT:
      "Soggiorno magnifico, tranquillità e vicinanza a bellissime spiagge. Appartamento in otime condizioni e comodo, giardino e spazi comuni fantastici consigliatissimo",
    descrizioneEN:
      "Magnificent stay, tranquility and proximity to beautiful beaches. Apartment in excellent condition and comfortable, fantastic garden and common areas, highly recommended",
    rating: 5,
    provider: "WuBook",
    link: "https://wubook.net/nneb/fds?ep=8c0ed861&lang=it&c=EUR&f=10%2F07%2F2024&t=11%2F07%2F2024&o=2.0.0.0",
    utente: "Claudio",
    reviewDate: "2022-09-20",
  },
  {
    id: 3,
    titleIT: "Eccezionale",
    titleEN: "Exceptional !!!",
    descrizioneIT:
      "Posizione panoramica fantastica in un giardino mozzafiato con tramonti strepitosi.La struttura è molto ben tenuta ed accogliente.Consigliato",
    descrizioneEN:
      "Fantastic panoramic position in a breathtaking garden with amazing sunsets.The property is very well kept and welcoming.Advised",
    rating: 10,
    provider: "Booking",
    link: "https://www.booking.com/hotel/it/complesso-residenziale-isola-dei-mori.it.html?aid=397594;label=gog235jc-1DCAEoggI46AdIFFgDaHGIAQGYARS4ARfIAQ_YAQPoAQH4AQKIAgGoAgO4Aue18Y4GwAIB0gIkZDVmYmYxMDUtZjEyMi00NjVkLTliZWUtNGMxNTYwMTI0M2Zl2AIE4AIB;sid=4bdde38df2f7894abbde809ec670250f;dest_id=420579;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1641831211;srpvid=50be72157f210088;type=total;ucfs=1&#tab-reviews",
    utente: "Ilaria",
    reviewDate: "2024-06-08",
  },
  {
    id: 7,
    titleIT: "Un luogo di pace",
    titleEN: "Peace place",
    descrizioneIT:
      "Un luogo di Pace, dove ammirare il tramonto sul mare, respirare i profumi della macchia mediterranea e ammirare la via lattea (vivendo in Emilia-Romagna eran anni che non la vedevo). Un accoglienza gentile, che ci ha fatto sentire a casa. Stanze e ambienti puliti e ben studiati. Grazie ",
    descrizioneEN:
      "A place of Peace, where you can admire the sunset over the sea, breathe in the scents of the Mediterranean scrub and admire the Milky Way (living in Emilia-Romagna I hadn't seen it for years). A kind welcome, which made us feel at home. Clean and well-designed rooms and environments. Thank you ",
    rating: 5,
    provider: "Google",
    link: "https://www.google.com.sg/travel/hotels/entity/ChkI55-Oy-O1ibf_ARoML2cvMTFfal84cjRfEAE/reviews?ei=JOtXYbviHoW59wSS-5bIBw&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAEaBAoCGgAqBAoAGgA",
    utente: "Anita",
    reviewDate: "2023-10-15",
  },
];
