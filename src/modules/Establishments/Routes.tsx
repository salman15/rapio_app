import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ESTABLISHMENT_ROUTES } from "./const";
import { Details } from "./Details";
import Establishments from "./Establishments";

const Stack = createNativeStackNavigator();

export const EstablishmentsRoutes: JSX.Element = (
  <>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={ESTABLISHMENT_ROUTES.establishments}
      component={Establishments}
    />
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTransparent: true,
        // statusBarStyle: "dark",
        // headerBackTitleStyle: { color: "white" },
        headerTitleStyle: { color: "white" },
        // headerBlurEffect: "light",
      }}
      name={ESTABLISHMENT_ROUTES.establishment}
      component={Details}
    />
  </>
);
