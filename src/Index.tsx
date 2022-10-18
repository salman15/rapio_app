import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { BootRoutes } from "./modules/Boot/Routes";
import { EstablishmentsRoutes } from "./modules/Establishments/Routes";
import { createNavigationContainerRef } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Index: FC = () => {
  return (
    <Stack.Navigator>
      {BootRoutes}
      {EstablishmentsRoutes}
    </Stack.Navigator>
  );
};

export default Index;
