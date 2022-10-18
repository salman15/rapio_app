export type TStartTime = {
  pick_up: string;
  delivery: string;
};

export type TAdress = {
  id: number;
  city: string;
  postcode: string;
  address: string;
  house_number: string;
  phone_number: string;
  establishment_id: string;
  created_at: string;
  updated_at: string;
};

export type TOpeningDaysFull = {
  day: string;
  opening_hours: string;
  closing_hours: string;
  start_time_pick_up: string;
  start_time_delivery: string;
};

export type TTag = {
  id: number;
  tag: string;
  type: string;
  created_at: null;
  updated_at: string;
  pivot: {
    establishment_id: string;
    tag_id: string;
  };
};

export type TEstablishment = {
  id: number;
  name: string;
  email: string;
  slug: string;
  description: string;
  latitude: number;
  longitude: number;
  place: string;
  image: string;
  logo: string;
  starting_time: string;
  opening_hours: string;
  closing_hours: string;
  transaction_fee: number;
  fee_for_user: number;
  tables: boolean;
  delivery: boolean;
  pickup: boolean;
  open: boolean;
  serve_time: string;
  minimum_fee: number;
  delivery_fee: number;
  delivery_serve_time: string;
  pick_up_serve_time: string;
  start_times: TStartTime;
  opening_days: string[];
  address: TAdress;
  types: string[];
  tags: TTag[];
  opening_days_full: TOpeningDaysFull[];
};
