import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Body = () => {
  const { productList } = useSelector((state) => state.product);

  const renderProduct = ({ item }) => <Card product={item} />;

  return (
    <View style={styles.body}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
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
