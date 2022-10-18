import React, { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { navigate } from "../../../RootNavigation";
import { TEstablishment } from "../../types/Establishment";
import { styles } from "./styles";

export type EstablishmentProps = {
  action: (item: TEstablishment) => void;
  item: TEstablishment;
};

const Establishment: FC<EstablishmentProps> = ({ action, item }) => {
  return (
    <Pressable
      onPress={() => navigate("Establishment", { item })}
      onLongPress={() => action(item)}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image style={styles.itemImage} source={{ uri: `${item.image}` }} />
      </View>
    </Pressable>
  );
};

export default Establishment;
