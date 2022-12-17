import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (item) => {
  const { product } = item;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <View style={styles.descriptionConatiner}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.rate}>Rate: {product.rating.rate}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    width: Dimensions.get("window").width / 2.2,
    backgroundColor: "#ECEFF1",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  descriptionConatiner: {
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
  },
  price: { marginVertical: 5, color: "#808080" },
  rate: { color: "grey", textAlign: "right", fontSize: 12 },
});
