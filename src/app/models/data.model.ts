export interface Vehicle {
  id: number;
  brand: string;
  model: string[];
}

export interface Data {
  intro: string;
  nameLabel: string;
  nameValue: string;
  selectedBrand: number | null;
  selectedCar: string | null;
  carLabel: string;
  vehicles: Vehicle[];
}
