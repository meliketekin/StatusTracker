import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { CustomHeader } from "../components/CustomHeader";

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <CustomHeader text="Sign Up" hasGoBack={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
