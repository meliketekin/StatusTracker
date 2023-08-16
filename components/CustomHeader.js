import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CustomHeader = (props) => {
  return (
    <View style={styles.header}>
      {props.hasGoBack && (
        <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
          <Ionicons name="arrow-back" size={24} color="#2A2A2E" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    color: "#2A2A2E",
    fontSize: 16,
  },
  backButton: {
    position: "absolute",
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 15,
  },
});
