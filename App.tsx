import Index from "./src/Index";
import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import { navigationRef } from "./RootNavigation";

const App: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Index />
    </NavigationContainer>
  );
};
export default App;
