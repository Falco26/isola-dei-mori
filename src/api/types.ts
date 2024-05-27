export type Apartment = {
  type: "monolocale" | "bilocale" | "trilocale";
  id: string;
  name: string;
  description: string;
  images: Image[];
  beds: number;
  wifi: boolean;
  laundry: boolean;
};

export type Image = {
  id: number;
  source: string;
};
