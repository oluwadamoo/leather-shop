import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Searchbar from "../components/Searchbar";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Product from "../components/Product";
import { chairs, sofas, beds } from "./data";

const Home = ({ navigation }) => {
  const [isChair, setIsChair] = useState(true);
  const [isSofa, setIsSofa] = useState(false);
  const [isBed, setIsBed] = useState(false);

  var data = isChair ? chairs : isSofa ? sofas : beds;
  const setCat = (cat) => {
    if (cat == "chair") {
      setIsChair(true);
      setIsSofa(false);
      setIsBed(false);
    } else if (cat == "sofa") {
      setIsChair(false);
      setIsSofa(true);
      setIsBed(false);
    } else if (cat == "bed") {
      setIsChair(false);
      setIsSofa(false);
      setIsBed(true);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <View style={styles.top}>
          <Text style={styles.title}>Shop All You Want</Text>
          <Searchbar />
        </View>
        <View style={styles.category}>
          <Text style={[styles.catTitle, { marginTop: 0 }]}>Categories</Text>

          <View style={{ paddingBottom: 3 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Pressable
                style={({ pressed }) => [
                  styles.catItem,
                  {
                    backgroundColor: isChair ? "#691db1" : "#ede6ee",

                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
                onPress={() => setCat("chair")}
              >
                <FontAwesome5
                  name="chair"
                  size={14}
                  color={isChair ? "white" : "black"}
                />
                <Text
                  style={[
                    styles.catItemText,
                    { color: isChair ? "white" : "black" },
                  ]}
                >
                  Chair
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.catItem,
                  {
                    backgroundColor: isSofa ? "#691db1" : "#ede6ee",

                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
                onPress={() => setCat("sofa")}
              >
                <MaterialCommunityIcons
                  name="sofa"
                  size={24}
                  color={isSofa ? "white" : "black"}
                />
                <Text
                  style={[
                    styles.catItemText,
                    { color: isSofa ? "white" : "black" },
                  ]}
                >
                  Sofa
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.catItem,
                  {
                    backgroundColor: isBed ? "#691db1" : "#ede6ee",

                    opacity: pressed ? 0.5 : 1,
                  },
                ]}
                onPress={() => setCat("bed")}
              >
                <MaterialIcons
                  name="single-bed"
                  size={24}
                  color={isBed ? "white" : "black"}
                />
                <Text
                  style={[
                    styles.catItemText,
                    { color: isBed ? "white" : "black" },
                  ]}
                >
                  Bed
                </Text>
              </Pressable>
            </ScrollView>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.products}>
              <Text style={styles.catTitle}>
                Top Class {isChair ? "Chair's" : isSofa ? "Sofa's" : "Bed's"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {data.map((product, index) => (
                  <Product
                    key={index}
                    product={product}
                    navigation={navigation}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
  },
  top: {
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: "600",
  },
  category: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  catItem: {
    backgroundColor: "#ede6ee",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    width: Dimensions.get("screen").width / 3,
    height: 36,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  catItemText: {
    fontSize: 14,
    marginLeft: 5,
  },
  products: {
    marginTop: 10,
  },
  catTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 12,
  },
});
