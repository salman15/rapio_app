import React, { FC, useRef } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Map } from "./components";
import { ElementWidth } from "./const";
import Establishment from "./Establishment";
import { useEstablishments } from "./hooks";
import { styles } from "./styles";

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
