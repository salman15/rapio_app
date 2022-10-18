import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Establishments from "./Establishments";

const Stack = createNativeStackNavigator();

export const EstablishmentsRoutes: JSX.Element = (
  <Stack.Screen
    options={{
      headerShown: false,
    }}
    name="Establishments"
    component={Establishments}
  />
);
