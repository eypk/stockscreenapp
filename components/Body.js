import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import Card from "./Card";

const Body = ({ data }) => {
  const renderProduct = ({ item }) => <Card product={item} />;

  return (
    <View style={styles.body}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={data}
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
