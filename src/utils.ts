import { Apartment, Photo } from "./api/types";

export function groupApartmentsBySlide(
  apartments: Apartment[],
  itemsPerSlide: number
): Apartment[][] {
  const groupedApartments: Apartment[][] = [];

  for (let i = 0; i < apartments.length; i += itemsPerSlide) {
    groupedApartments.push(apartments.slice(i, i + itemsPerSlide));
  }

  return groupedApartments;
}

export function groupImagesBySlide(
  images: Photo[],
  itemsPerSlide: number
): Photo[][] {
  const groupedImages: Photo[][] = [];

  for (let i = 0; i < images.length; i += itemsPerSlide) {
    groupedImages.push(images.slice(i, i + itemsPerSlide));
  }

  return groupedImages;
}

export function calculateItemsPerSlide(windowWidth: number): number {
  if (windowWidth >= 1200) {
    return 2; // Display 3 items per slide for large screens
  } else {
    return 1; // Display 1 item per slide for small screens
  }
}
