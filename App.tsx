import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import { navigationRef } from "./RootNavigation";
import Index from "./src/Index";

const App: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Index />
    </NavigationContainer>
  );
};
export default App;
