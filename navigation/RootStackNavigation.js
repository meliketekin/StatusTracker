import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import BottomTabNavigation from "./BottomTabNavigation";
import { useContext } from "react";
import { AuthContext } from "../infrastructure/context/authcontext";
import { ActivityIndicator, View } from "react-native";

const Stack = createStackNavigator();

export const RootStackNavigation = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthStack"
      >
        {!isLoggedIn ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
