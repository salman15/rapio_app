import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: Record<string, unknown>) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
