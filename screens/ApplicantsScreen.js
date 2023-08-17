import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { UserStatusItem } from "../components/UserStatusItem";

export default function ApplicantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader hasGoBack={false} text="Users" />
      <View style={styles.usersContainer}>
          <UserStatusItem userName="Ralph Foster" status="active"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  usersContainer: {

  }
});
