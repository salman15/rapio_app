import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { BootRoutes } from "./modules/Boot/Routes";
import { EstablishmentsRoutes } from "./modules/Establishments/Routes";
import { createNavigationContainerRef } from "@react-navigation/native";
import { AppContextProvider } from "./context/App.context";

const Stack = createNativeStackNavigator();

const Index: FC = () => {
  return (
    <AppContextProvider>
      <Stack.Navigator>
        {BootRoutes}
        {EstablishmentsRoutes}
      </Stack.Navigator>
    </AppContextProvider>
  );
};

export default Index;
