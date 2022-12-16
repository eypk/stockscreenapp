import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import productSlice from "../assets/ProductList.json";
import { AntDesign } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { setProductAction } from "../redux/productSlice";
import ProductList from "../assets/ProductList.json";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <View style={styles.searchbar}>
      <TextInput
        style={styles.input}
        placeholder="Type here to filter!"
        value={text}
        onChangeText={(text) => {
          setText(text);
          dispatch(setProductAction(text));
        }}
      />
      <AntDesign
        style={styles.button}
        name="closecircleo"
        size={24}
        color="black"
        onPress={() => {
          setText("");
          dispatch(setProductAction(""));
        }}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbar: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  input: {
    width: Dimensions.get("window").width * 0.9,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#ECEFF1",
    paddingLeft: 30,
    paddingRight: 50,
    position: "relative",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    right: 40,
    top: 12,
    opacity: 0.7,
  },
});
