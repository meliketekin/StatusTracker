import { StyleSheet, ImageBackground, View, Text } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "../components/CustomTouchableOpacity";
import { colors } from "../constants/colors";
import { dimensions } from "../constants/dimensions";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/onboarding.png")}
        style={styles.onboardingImage}
        resizeMode="cover"
      />
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Korem Ipsum Dolor Sit Amet Consectetur</Text>
        <Text style={styles.subTitle}>
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </Text>
        <View style={styles.authButtons}>
          <CustomTouchableOpacity
            text="Login"
            backgroundColor={colors.red}
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <CustomTouchableOpacity
            text="Sign Up"
            backgroundColor={colors.blue}
            onPress={() => navigation.navigate("RegisterScreen")}

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingImage: {
    height: dimensions.height * 0.77,
  },
  bottomSheet: {
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: dimensions.height / 2,
    width: dimensions.width,
    height: dimensions.height / 2,
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  title: {
    fontFamily: "PlusJakartaSans-ExtraBold",
    fontSize: 33,
    color: "black",
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "PlusJakartaSans-Medium",
    color: "#7F879E",
    textAlign: "center",
    lineHeight: 25,
    marginHorizontal: 30,
  },
  authButtons: {
    justifyContent: "space-between",
    height: "33%",
  },
});
