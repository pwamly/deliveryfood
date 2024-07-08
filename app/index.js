import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/LoginScreen/Login";
import { ClerkProvider, SignIn, SignedOut } from "@clerk/clerk-react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/TabNavigation";

export default function Page() {
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
