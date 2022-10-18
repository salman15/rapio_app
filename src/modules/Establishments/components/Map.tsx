import * as Location from "expo-location";
import React, { FC, useEffect, useRef, useState } from "react";
import { Text } from "react-native";
import MapView, {
  Animated,
  AnimatedRegion,
  AnimatedRegionTimingConfig,
  Marker,
  MarkerAnimated,
  Region,
} from "react-native-maps";
import { styles } from "../styles";

type TCoords = { latitude: number; longitude: number };

const useUserLocation = (): {
  region: AnimatedRegion;
  onRegionChange: (region: TCoords) => void;
} => {
  const [region] = useState(
    new AnimatedRegion({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0015,
      longitudeDelta: 0.0015,
    })
  );

  const [errorMsg, setErrorMsg] = useState(null);

  const onRegionChange = (oldRegion: TCoords) => {
    const newRegion: AnimatedRegionTimingConfig = {
      ...oldRegion,
      latitudeDelta: 0.0015,
      longitudeDelta: 0.0015,
      useNativeDriver: false,
    };

    region.timing(newRegion).start();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});

      userLocation &&
        onRegionChange({
          latitude: userLocation?.coords?.latitude,
          longitude: userLocation?.coords?.latitude,
        });
    })();
  }, []);

  return { region, onRegionChange };
};

export type TMarker = {
  name: string;
  description: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};

export type TMap = {
  markers: TMarker[];
  selectedCords?: TMarker["coordinate"];
};

const Map: FC<TMap> = ({ markers, selectedCords }) => {
  const { region, onRegionChange } = useUserLocation();

  useEffect(() => {
    selectedCords && onRegionChange(selectedCords);
  }, [selectedCords]);

  if (!region) return <Text>Map not allowed</Text>;

  return (
    <Animated
      userInterfaceStyle="dark"
      showsUserLocation
      region={region}
      style={styles.map}
    >
      {markers.map((item) => {
        return (
          <Marker
            key={item.name}
            title={item.name}
            description={item.description}
            coordinate={item.coordinate}
          />
        );
      })}
    </Animated>
  );
};

export default Map;
