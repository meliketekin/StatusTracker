import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";

export const RootStackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
