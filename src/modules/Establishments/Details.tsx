import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { AppContext } from "../../context/App.context";
import { TEstablishment } from "../../types/Establishment";
import { fetchEstablishments, fetchMenuItems, fetchProducts } from "./fetch";
import { Title } from "./styles";

const EstablishmentImage = styled.ImageBackground`
  height: 50%;
  width: 100%;
  background-size: cover;
`;

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

export const Details = ({ navigation, route, path }) => {
  const { products, selectEstablishment, selectProducts, selectMenuItems } =
    useContext(AppContext);
  const item: TEstablishment = route.params.item;

  useEffect(() => {
    if (item) {
      fetchEstablishments(item.slug).then((response) => {
        if (response) selectEstablishment(response.data[0]);
      });

      fetchProducts(item.id).then((response) => {
        if (response) selectProducts(response);
      });

      fetchMenuItems(item.id).then((response) => {
        if (response) selectMenuItems(response);
      });
    }
  }, [item.id]);

  return (
    <View>
      <>
        <EstablishmentImage source={{ uri: item.image }}>
          <Title>{item.name}</Title>
        </EstablishmentImage>
        <ScrollView style={{ height: "50%" }}>
          <Text>Details</Text>
          {products?.map((item, index) => {
            return <Text key={index}>{item.name}</Text>;
          })}
        </ScrollView>
      </>
    </View>
  );
};
