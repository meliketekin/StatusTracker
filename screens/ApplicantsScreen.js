import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { UserStatusItem } from "../components/UserStatusItem";
import { UserService } from "../infrastructure/service/user";
import { AuthContext } from "../infrastructure/context/authcontext";
import { FlatList } from "react-native";

export default function ApplicantsScreen() {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserService.getUserList(token)
      .then((response) => response.json())
      .then((result) => setUsers(result.response))
      .catch((error) => console.warn("error", error));
  }, []);
  console.warn(users);
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader hasGoBack={false} text="Users" />
      <View style={styles.usersContainer}>
        <FlatList
          data={users}
          keyExtractor={item => item.user_id}
          renderItem={({item, index}) => (
            <UserStatusItem user={item} key={index} />
          )}
          
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:80
  },
  usersContainer: {},
});
