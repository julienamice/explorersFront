import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeList from "./components/ThemeList";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
