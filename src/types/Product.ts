import { TAddon } from "./Addon";

export type TProduct = {
  establishment_id?: number;
  qty: number;
  id: number;
  name: string;
  description: string;
  image: string;
  brand: string;
  type: string;
  price: string;
  addons: TAddon[];
  sold_out: boolean;
  active?: boolean;
};
