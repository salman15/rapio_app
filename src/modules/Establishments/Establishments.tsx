import React, { FC, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import { Map } from "./components";
import { TEstablishment } from "../../types/Establishment";
import { TMarker } from "./components/Map";
import { ElementWidth } from "./const";

const fetchEstablishments = async (): Promise<
  { data: TEstablishment[] } | false
> => {
  const response = await fetch(
    "https://club.rapio.store/api/v1/establishment/show/all"
  );

  try {
    return response.json();
  } catch (e) {
    console.error(e);
    return false;
  }
};

const useEstablishments = () => {
  const [establishments, setEstablishments] = useState<TEstablishment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<TEstablishment | null>(null);
  useEffect(() => {
    setIsLoading(true);
    fetchEstablishments().then((response) => {
      if (response) setEstablishments(response.data);
      setIsLoading(false);
    });
  }, []);

  const markers: TMarker[] = establishments.map((item) => {
    return {
      name: item.name,
      description: item.description,
      coordinate: { latitude: item.latitude, longitude: item.longitude },
    };
  });

  return { establishments, markers, isLoading, selected, setSelected };
};

const Establishment = ({ action, item }) => {
  return (
    <Pressable onPress={() => action(item)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image style={styles.itemImage} source={{ uri: `${item.image}` }} />
      </View>
    </Pressable>
  );
};

const width = (Dimensions.get("window").width / 3) * 2;

const Establishments: FC = () => {
  const { isLoading, establishments, markers, selected, setSelected } =
    useEstablishments();
  const scrollRef = useRef<ScrollView>();
  return (
    <View style={styles.container}>
      <Map
        markers={markers}
        selectedCords={
          selected
            ? {
                latitude: selected.latitude,
                longitude: selected.longitude,
              }
            : null
        }
      />
      {isLoading && <ActivityIndicator />}
      <View style={styles.list}>
        <ScrollView
          ref={scrollRef}
          onMomentumScrollEnd={(event) => {
            console.log("snap");
            const index = Math.round(
              event.nativeEvent.contentOffset.x / ElementWidth
            );

            const item = establishments[index];
            if (item.id !== selected?.id) setSelected(item);
          }}
          horizontal={true}
          snapToInterval={width}
          snapToAlignment={"center"}
          keyboardDismissMode="on-drag"
          pagingEnabled
        >
          {establishments.map((item, i) => (
            <Establishment
              item={item}
              key={item.id}
              action={() => {
                scrollRef.current.scrollTo({
                  x: i * width - width / 4,
                  animated: true,
                });
              }}
            />
          ))}
        </ScrollView>
      </View>

      <Text>Establishments</Text>
    </View>
  );
};

export default Establishments;
