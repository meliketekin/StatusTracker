import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ApplicantsScreen from "../screens/ApplicantsScreen";
import LogoutScreen from "../screens/LogoutScreen";
import { Image, View } from "react-native";
import EditUserScreen from "../screens/EditUserScreen";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../infrastructure/context/authcontext";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const { logOut } = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let style;

          if (route.name === "ApplicantsScreen") {
            iconName = require("../assets/images/userTabIcon.png");
            style = {
              backgroundColor: "#FF6464",
              padding: 15,
              borderRadius: 60,
            };
          } else if (route.name === "LogoutScreen") {
            iconName = require("../assets/images/logoutTabIcon.png");
          }

          // You can return any component that you like here!
          return (
            <View style={style}>
              <Image source={iconName} />
            </View>
          );
        },
        tabBarActiveTintColor: "#db6d8e",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          padding: 25,
          paddingBottom: 25,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          shadowColor: "#B0B0B010",
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        },
      })}
    >
      <Tab.Screen
        name="ApplicantsScreen"
        component={ApplicantsScreen}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="EditUserScreen"
        component={EditUserScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFF",
                  alignSelf: "center",
                  marginTop: -60,
                  borderRadius: 50,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 4.65,
                  elevation: 6,
                  padding: 10,
                }}
              >
                <Feather name="plus" size={60} color="#FF6464" />
              </View>
            );
          },
          tabBarLabel: () => null,
          
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
           e.preventDefault()
           navigation.navigate("EditUserScreen")
          },
        })}
      />
      <Tab.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{
          tabBarLabel: "Logout",
          tabBarLabelStyle: {
            fontFamily: "PlusJakartaSans-SemiBold",
            fontSize: 10,
            color: "#FF6464",
          },
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            console.warn("selam");
            // e.preventDefault();
            logOut();

            // navigation.navigate("Aut, {screen: "LoginScreen"})
          },
        })}
      />
    </Tab.Navigator>
  );
}
