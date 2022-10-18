import { url } from "../../../consts";
import { TEstablishment } from "../../../types/Establishment";

export const fetchEstablishments = async (
  slug: string
): Promise<{ data: TEstablishment[] } | false> => {
  try {
    const establishments = await fetch(`${url}/establishment/${slug}/show`);
    return await establishments.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};
