import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { RootStackNavigation } from "./navigation/RootStackNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RootStackNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
