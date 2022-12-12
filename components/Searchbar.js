import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

const Searchbar = ({ data }) => {
  return (
    <View style={styles.searchbar}>
      <TextInput style={styles.input} />
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
    paddingHorizontal: 30,
  },
});
