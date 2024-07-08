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
    provider: "Booking",
    descriptionIT:
      "Tutto bene, precisa descrizione degli alloggi, nessuna sorpresa negativa, check-in cordiale ed esaustivo. Signora Cristina impeccabile. Alla prossima.",
    descriptionEN:
      "Everything was fine, accurate description of the accommodations, no negative surprises, friendly and thorough check-in. Mrs. Cristina was impeccable. Until next time.",
    titleIT: "Grande esperienza",
    titleEN: "Great experience",
    rating: 4.5,
  },
  {
    provider: "Google",
    descriptionIT:
      "L'hotel era fantastico, personale molto gentile e disponibile. Le camere erano pulite e confortevoli. Posizione perfetta per esplorare la città.",
    descriptionEN:
      "The hotel was fantastic, very friendly and helpful staff. The rooms were clean and comfortable. Perfect location for exploring the city.",
    titleIT: "Soggiorno fantastico",
    titleEN: "Fantastic stay",
    rating: 5,
  },
  {
    provider: "Booking",
    descriptionIT:
      "Buon rapporto qualità-prezzo, ma la colazione potrebbe migliorare. La posizione è eccellente, molto vicino ai principali punti di interesse.",
    descriptionEN:
      "Good value for money, but breakfast could be improved. The location is excellent, very close to main points of interest.",
    titleIT: "Buon soggiorno",
    titleEN: "Good stay",
    rating: 4,
  },
];
