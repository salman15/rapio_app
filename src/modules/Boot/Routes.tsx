import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Session } from "./Session";

const Stack = createNativeStackNavigator();

export const BootRoutes: JSX.Element = (
  <Stack.Screen
    options={{
      headerStyle: {
        backgroundColor: "transparent",
      },
    }}
    name="Session"
    component={Session}
  />
);
