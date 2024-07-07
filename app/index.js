import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/LoginScreen/Login";
import { ClerkProvider, SignIn, SignedOut } from "@clerk/clerk-react";

export default function Page() {
  return (
    <ClerkProvider publishableKey="pk_test_aW50aW1hdGUtbGVlY2gtNzUuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <View style={styles.container}>
      <SignIn>
        <Text>Your signed in</Text>
      </SignIn>
      <SignedOut>Your signed out</SignedOut>
      <View style={styles.main}>
      <Login/>
      </View>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray',
    paddingTop: 20,
  },
});
