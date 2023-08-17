import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { CustomHeader } from "../components/CustomHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CustomTextInput } from "../components/CustomTextInput";
import { CustomTouchableOpacity } from "../components/CustomTouchableOpacity";
import { Feather } from "@expo/vector-icons";

export default function EditUserScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        text="Edit User"
        hasGoBack={true}
        onPress={navigation.goBack}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.userImageContainer}>
          <Image
            source={require("../assets/images/user.png")}
            style={styles.userImage}
          />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <CustomTextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
          />
          <CustomTextInput
            placeholder="E-Mail"
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder="Status"
            value={status}
            onChangeText={setStatus}
            renderRightIcon={
              <Feather name="chevron-down" size={24} color="#FF6464" />
            }
            onPressRightIcon={() => setSecurePassword(!securePassword)}
          />
        </View>
        <CustomTouchableOpacity
          text="Add"
          containerStyle={{ backgroundColor: "#42CD00", alignSelf: "center" }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {},
  userImageContainer: {
    alignSelf: "center",
    padding: 7,
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    marginVertical: 30,
  },
  userImage: {
    width: 68,
    height: 68,
  },
  textInputContainer: {
    paddingHorizontal: 23,
    gap: 25,
    marginBottom: 80,
  },
});
