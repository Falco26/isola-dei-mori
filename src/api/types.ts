// export type Apartment = {
//   type: "monolocale" | "bilocale" | "trilocale";
//   id: string;
//   name: string;
//   description: string;
//   images: Image[];
//   beds: number;
//   wifi: boolean;
//   laundry: boolean;
// };

// export type Image = {
//   id: number;
//   source: string;
// };

export interface Apartment {
  id: number;
  appartmentType: "Monolocale" | "Bilocale" | "Trilocale" | "Trilocale Premium";
  descriptionIT: string;
  descriptionEN: string;
  doubleBed: number;
  singleBed: number;
  sofaBed: number;
  bathNumber: number;
  hasWifi: boolean;
  hasAirConditioning: boolean;
  photos: Photo[];
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
  publicId: string;
  appartmentId: number;
}

export interface Reviews {
  id: number;
  provider: "Booking" | "Google" | "WuBook";
  descrizioneIT: string;
  descrizioneEN: string;
  titleIT: string;
  titleEN: string;
  rating: number;
  link: string;
  utente: string;
  reviewDate: string;
}
