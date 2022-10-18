import { url } from "../../../consts";
import { TMenuItem } from "../../../types/MenuItem";
import { TProduct } from "../../../types/Product";

export const fetchProducts = async (
  id: number
): Promise<TProduct[] | false> => {
  try {
    const establishments = await fetch(
      `${url}/establishment/${id}/products/all`
    );
    return await establishments.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const fetchMenuItems = async (
  id: number
): Promise<TMenuItem[] | false> => {
  try {
    const establishments = await fetch(`${url}/establishment/${id}/menu_items`);
    return await establishments.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};
