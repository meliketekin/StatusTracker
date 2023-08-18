import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import { CustomHeader } from "../components/CustomHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CustomTextInput } from "../components/CustomTextInput";
import { CustomTouchableOpacity } from "../components/CustomTouchableOpacity";
import { Feather } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { CustomBottomSheetModal } from "../components/CustomBottomSheetModal";
import { UserService } from "../infrastructure/service/user";
import { AuthService } from "../infrastructure/service/auth";
import { AuthContext } from "../infrastructure/context/authcontext";


const STATUS = { Active: "Active", Passive: "Passive" };
export default function EditUserScreen({ navigation, route }) {
  const user = route.params?.user;
  const {token} = useContext(AuthContext)
  const bottomSheetModalRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(user.user_fullname);
      setEmail(user.user_email);
      setPhone(user.user_phone);
      setStatus(user.user_status);
    }
    else {
      setFullName("");
      setEmail("");
      setPhone("");
      setStatus("");
    }
  }, [user]);

  const handleAddEditPress = () => {
    UserService.updateUser(token, user.user_id, user.full)
  };

  const handleDeletePress = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheetModalProvider>
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
            <View>
              <CustomTextInput
                placeholder={"Status"}
                value={status}
                isEditable={false}
                isFocused={true}
                renderRightIcon={
                  <Feather name="chevron-down" size={24} color="#FF6464" />
                }
                onPressRightIcon={() => setIsDropdownOpened((cur) => !cur)}
                containerStyle={
                  isDropdownOpened
                    ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
                    : null
                }
              />
              {isDropdownOpened && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -70,
                    backgroundColor: "white",
                    width: "100%",
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    padding: 10,
                    borderColor: "#EAEBEC",
                    zIndex: 999,
                  }}
                >
                  <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={() => {
                      setStatus(STATUS.Active);
                      setIsDropdownOpened(false);
                    }}
                  >
                    <Text>{STATUS.Active}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ margin: 5 }}
                    onPress={() => {
                      setStatus(STATUS.Passive);
                      setIsDropdownOpened(false);
                    }}
                  >
                    <Text>{STATUS.Passive}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <CustomTouchableOpacity
            text="Add"
            containerStyle={{ backgroundColor: "#42CD00", alignSelf: "center" }}
            // onPress={() => bottomSheetModalRef.current?.open()}
            onPress={handleAddEditPress}
          />
          {user && (
            <CustomTouchableOpacity
              text="Delete"
              containerStyle={{
                backgroundColor: "#FF6464",
                alignSelf: "center",
                marginVertical: 10,
              }}
              // onPress={() => bottomSheetModalRef.current?.open()}
              onPress={handleDeletePress}
            />
          )}
          <CustomBottomSheetModal ref={bottomSheetModalRef} />
        </KeyboardAwareScrollView>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
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
