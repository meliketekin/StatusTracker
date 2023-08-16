import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { dimensions } from "../constants/dimensions";

export const CustomTouchableOpacity = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: dimensions.width - 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: "PlusJakartaSans-Bold",
    color: "#FFFFFF",
    fontSize:15
  }
});
