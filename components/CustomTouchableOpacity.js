import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { SCREEN_WIDTH } from "../constants/dimensions";
import { COLORS } from "../constants/colors";

export const CustomTouchableOpacity = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.containerStyle]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH - 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: COLORS.red,
  },
  buttonText: {
    fontFamily: "PlusJakartaSans-Bold",
    color: "#FFFFFF",
    fontSize: 15,
  },
});
