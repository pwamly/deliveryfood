import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import Login from "./screens/LoginScreen/Login";
import { ClerkProvider, SignIn, SignedOut } from "@clerk/clerk-react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/TabNavigation";

export default function Page() {
  const [loaded, error] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <TabNavigation/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
