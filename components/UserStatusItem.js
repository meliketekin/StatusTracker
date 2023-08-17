import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const UserStatusItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require("../assets/images/user.png")}
          style={styles.userImage}
        />
        <Text style={styles.userName}>{props.userName}</Text>
      </View>
      <View style={[styles.statusContainer, {backgroundColor: props.status==="active" ? "#D2FBD4": "#FFF0F0"}]}>
        <Text style={[styles.userStatus, {color: props.status==="active" ? "#12AA18" : "#FF6464"}]}>{props.status}</Text>
      </View>
    </View>
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
