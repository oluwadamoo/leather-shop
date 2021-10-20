import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <EvilIcons name="search" size={24} color="#777676" />
        <TextInput style={styles.input} placeholder="Search Item" />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  wrapper: {
    backgroundColor: "#ede6ee",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  input: {
    paddingHorizontal: 8,
    width: Dimensions.get("screen").width - 100,
  },
});
