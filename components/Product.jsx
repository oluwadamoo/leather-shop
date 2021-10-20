import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Product({ product, navigation }) {
  const color = "#f5d88a";
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.container,
      ]}
      onPress={() => navigation.navigate("Details", { product: product })}
    >
      <View style={styles.wrapper}>
        <Image source={product.image} style={styles.image} />

        <View style={styles.imageOverlay}>
          {product.favorite ? (
            <AntDesign
              name="heart"
              size={14}
              color="white"
              style={styles.heartIcon}
            />
          ) : (
            <AntDesign
              name="hearto"
              size={14}
              color="white"
              style={styles.heartIcon}
            />
          )}

          <View style={styles.productFooter}>
            <View style={styles.productFooterText}>
              <Text style={styles.productFooterTextTitle}>{product.title}</Text>
              <View style={styles.stars}>
                <AntDesign name="star" size={6} color={color} />
                <AntDesign name="star" size={6} color={color} />
                <AntDesign name="star" size={6} color={color} />
                <AntDesign name="star" size={6} color={color} />
                <AntDesign name="star" size={6} color={color} />
              </View>
            </View>

            <View style={styles.footerCartIcon}>
              <AntDesign name="shoppingcart" size={12} color="black" />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginBottom: 30,
  },
  wrapper: {},
  image: {
    width: Dimensions.get("screen").width / 2.5 - 10,
    height: Dimensions.get("screen").width / 2.5 - 10,

    borderRadius: 10,
  },
  imageOverlay: {
    width: Dimensions.get("screen").width / 2.5 - 10,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    backgroundColor: "#5e5a5a26",
    position: "absolute",
    paddingHorizontal: 4,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  productFooter: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 10,
  },
  productFooterText: {
    width: "75%",
    marginLeft: 4,
  },
  productFooterTextTitle: {
    width: "75%",
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  stars: {
    flexDirection: "row",
    width: 60,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  footerCartIcon: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
