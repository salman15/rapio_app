import { createContext, FC, ReactNode, useState } from "react";
import { TEstablishment, TMenuItem, TProduct } from "../types";

export type TAppContext = {
  establishment?: TEstablishment;
  products?: TProduct[];
  menuItems?: TMenuItem[];
  order?: Record<string, unknown>;
  address?: Record<string, unknown>;
  user?: Record<string, unknown>;
  session?: Record<string, unknown>;
  selectEstablishment?: (establishment: TEstablishment) => void;
  selectProducts?: (products: TProduct[]) => void;
  selectMenuItems?: (menuItems: TMenuItem[]) => void;
};

export const AppContext = createContext<TAppContext>({
  establishment: undefined,
  products: [],
  menuItems: [],
  order: undefined,
  address: undefined,
  user: undefined,
  session: undefined,
  selectEstablishment: (__: TEstablishment) => undefined,
  selectProducts: (__: TProduct[]) => undefined,
  selectMenuItems: (__: TMenuItem[]) => undefined,
});

export type TAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider: FC<TAppContextProvider> = ({ children }) => {
  const [establishment, setEstablishment] = useState<TEstablishment>();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [menuItems, setMenuItems] = useState<TMenuItem[]>([]);

  const selectEstablishment = (establishment: TEstablishment) => {
    setEstablishment(establishment);
  };

  const selectProducts = (products: TProduct[]) => {
    setProducts(products);
  };

  const selectMenuItems = (menuItems: TMenuItem[]) => {
    setMenuItems(menuItems);
  };
  return (
    <AppContext.Provider
      value={{
        establishment,
        products,
        menuItems,
        selectEstablishment,
        selectProducts,
        selectMenuItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
