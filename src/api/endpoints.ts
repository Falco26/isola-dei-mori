export type Apartment = {
  type: "monolocale" | "bilocale" | "trilocale";
  id: string;
  name: string;
  photo: string;
  description: string;
  beds: number;
  wifi: boolean;
  laundry: boolean;
};
