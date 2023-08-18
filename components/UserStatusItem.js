import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export const UserStatusItem = (props) => {
  const {user_status: status ,user_fullname: userName} = props.user
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate("EditUserScreen", {user: props.user})}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require("../assets/images/user.png")}
          style={styles.userImage}
        />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View style={[styles.statusContainer, {backgroundColor: status==="Active" ? "#D2FBD4": "#FFF0F0"}]}>
        <Text style={[styles.userStatus, {color: status==="Active" ? "#12AA18" : "#FF6464"}]}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    padding: 15,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 17,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  userImage: {
    width: 50,
    height: 50,
  },
  userName: {
    fontFamily: "PlusJakartaSans-SemiBold",
    fontSize: 14,
  },
  statusContainer: {
    padding: 8,
    paddingHorizontal:13,
    borderRadius: 30,
  },
  userStatus: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize:12
  },
});
