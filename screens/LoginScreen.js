import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { CustomHeader } from "../components/CustomHeader";
import { CustomTextInput } from "../components/CustomTextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "../components/CustomTouchableOpacity";
import { AuthService } from "../assets/service/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(false);

  const handleLogin = () => {
    AuthService.Login(email, password)
      .then((res) => res.json())
      .then((json) => {
        console.error(json);
        if(json.response.loginData) {
          navigation.navigate("BottomTabs");
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader text="Login" hasGoBack={true} onPress={navigation.goBack} />
      <KeyboardAwareScrollView>
        <Image
          source={require("../assets/images/loginLogo.png")}
          style={styles.logo}
        />

        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Hello There 🖐</Text>
          <Text style={styles.createText}>Login first to continue</Text>
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            renderRightIcon={
              <Feather
                name={securePassword ? "eye-off" : "eye"}
                size={24}
                color="#28282866"
              />
            }
            onPressRightIcon={() => setSecurePassword(!securePassword)}
            secureTextEntry={securePassword}
          />
        </View>
        <CustomTouchableOpacity
          text="Login"
          onPress={handleLogin}
          containerStyle={{ alignSelf: "center" }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 100,
  },
  helloContainer: {
    paddingHorizontal: 30,
  },
  helloText: {
    fontFamily: "Poppins-Regular",
    color: "#28282899",
    fontSize: 14,
    marginBottom: 10,
  },
  createText: {
    fontFamily: "PlusJakartaSans-Bold",
    color: "#292D32",
    fontSize: 25,
  },
  textInputContainer: {
    paddingHorizontal: 23,
    marginTop: 70,
    gap: 25,
    marginBottom: 120,
  },
});
