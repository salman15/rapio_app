import { TEstablishment } from "../../../types/Establishment";

export const fetchEstablishments = async (): Promise<
  { data: TEstablishment[] } | false
> => {
  const response = await fetch(
    "https://club.rapio.store/api/v1/establishment/show/all"
  );

  try {
    return response.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};
