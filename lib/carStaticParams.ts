import cars from "@/data/cars.json";

export function carRouteStaticParams() {
  return cars.map((car) => ({ id: car.lot_id }));
}
