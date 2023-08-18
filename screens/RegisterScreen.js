import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { CustomHeader } from "../components/CustomHeader";
import { CustomTextInput } from "../components/CustomTextInput";
import { Feather } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "../components/CustomTouchableOpacity";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthService } from "../infrastructure/service/auth";

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(false);

  const handleSignup = () => {
    AuthService.Register(fullName, email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        text="Sign Up"
        hasGoBack={true}
        onPress={navigation.goBack}
      />
      <KeyboardAwareScrollView>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Hello There 🖐</Text>
          <Text style={styles.createText}>Create an account</Text>
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
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
          text="Sign Up"
          onPress={handleSignup}
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

  helloContainer: {
    marginTop: "25%",
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
