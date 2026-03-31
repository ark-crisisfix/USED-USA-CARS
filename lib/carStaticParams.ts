import cars from "@/data/cars.json";

type CatalogCar = {
  lot_id: string;
};

export function carRouteStaticParams() {
  return (cars as CatalogCar[]).map((car) => ({ id: car.lot_id }));
}
