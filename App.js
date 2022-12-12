import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Body from "./components/Body";
import Searchbar from "./components/Searchbar";
import ProductList from "./assets/ProductList";

export default function App() {
  const data = ProductList;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <Searchbar />
      <View style={styles.innerContainer}>
        <Body data={data} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  headerText: {
    marginLeft: 30,
    color: "#800080",
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontSize: 24,
  },
});
