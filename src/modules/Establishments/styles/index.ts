import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { ElementWidth } from "../const";

export const Container = styled.View`
  flex: 1;
  background-color: "#000";
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 32px;
`;

export const List = styled.View`
  position: absolute;
  bottom: 0;
  height: ${Dimensions.get("window").height / 3}px;
  width: ${Dimensions.get("window").width}px;
  background-color: black;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  padding: 16px;
  padding-top: 24px;
  justify-content: flex-start;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  list: {
    position: "absolute",
    bottom: 0,
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
    backgroundColor: "black",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
    padding: 16,
    paddingTop: 24,
    justifyContent: "flex-start",
  },

  item: {
    width: ElementWidth,
    height: "100%",
    // border: "solid",
    // borderWidth: 2,
    // borderColor: "white",
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 16,
  },

  itemText: {
    color: "white",
    zIndex: 1,
    fontSize: 32,
    fontWeight: "bold",
  },

  itemImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.5,
    position: "absolute",
    zIndex: 0,
  },
});
