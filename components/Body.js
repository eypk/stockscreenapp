import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const Body = () => {
  const { productList } = useSelector((state) => state.product);
  // console.log("🚀 ~ file: Body.js:9 ~ Body ~ productList", productList[0]);
  const dispatch = useDispatch();

  const renderProduct = ({ item }) => <Card product={item} />;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View style={styles.body}>
      <FlatList
        numColumns={2}
        // keyExtractor={(item) => item.id}
        data={productList}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Body;
