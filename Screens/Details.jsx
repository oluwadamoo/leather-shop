import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
const Details = ({ navigation, route }) => {
  const product = route.params.product;

  const [no, setNo] = useState(0);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: pressed ? "#834fb33a" : "#fff",
                height: 30,
                width: 30,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <AntDesign name="arrowleft" size={24} color="#691db1" />
          </Pressable>

          <Text style={styles.headerText}>Details</Text>

          <Pressable
            onPress={() => (product.favorite = !product.favorite)}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          >
            <AntDesign
              name={product.favorite ? "heart" : "hearto"}
              size={24}
              color="#7259fc"
            />
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.image} />
          </View>

          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.createdBy}>By Clean_code</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                styles.cartIcon,
                { opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <AntDesign name="shoppingcart" size={20} color="#757574" />
            </Pressable>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.currency}>{"\u20A6"}</Text>
          </View>

          <View style={styles.descContainer}>
            <Text style={styles.desc}>{product.desc}</Text>
          </View>

          <View style={styles.colorContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.colorText}>Color</Text>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {product.colors?.map((color, index) => (
                  <Pressable
                    key={index}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.5 : 1,
                        height: 24,
                        width: 24,
                        backgroundColor: `${color}`,
                        borderRadius: 12,
                        marginLeft: 10,
                      },
                    ]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.incDecContainer}>
              <Pressable
                onPress={() => no > 0 && setNo(no - 1)}
                style={({ pressed }) => [
                  styles.incDec,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                <Text style={{ color: "#757574", fontSize: 16 }}>-</Text>
              </Pressable>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>{no}</Text>
              <Pressable
                onPress={() => setNo(no + 1)}
                style={({ pressed }) => [
                  styles.incDec,
                  { opacity: pressed ? 0.5 : 1 },
                ]}
              >
                <Text style={{ color: "#757574", fontSize: 16 }}>+</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
  },
  imageContainer: {
    paddingTop: 15,
    marginVertical: 20,
  },
  image: {
    width: Dimensions.get("screen").width - 35,
    height: Dimensions.get("screen").width - 35,
    borderRadius: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  createdBy: {
    color: "#757574",
  },
  cartIcon: {
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  priceContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
  },
  currency: {
    marginTop: 10,
    color: "#757574",
    fontSize: 15,
  },
  descContainer: {},
  desc: {
    color: "#757574",
    fontSize: 16,
    letterSpacing: 2,
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  colorText: {
    marginRight: 10,
    fontWeight: "700",
    fontSize: 18,
  },
  incDecContainer: {
    backgroundColor: "#e0e0e0",
    width: 86,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    justifyContent: "space-around",
    borderRadius: 4,
  },
  incDec: {
    backgroundColor: "#fff",
    height: 20,
    width: 20,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
