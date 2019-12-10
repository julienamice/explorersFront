// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import ThemeList from "./components/ThemeList";
// import Navigation from "./components/Navigation";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <ThemeList /> */}
//       <Navigation />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TrailDetails from "./components/TrailDetails";
import ThemeList from "./components/ThemeList";

const MainNavigator = createStackNavigator({
  Home: {
    screen: ThemeList,
    navigationOptions: () => ({
      header: null
    })
  },
  TrailDetails: {
    screen: TrailDetails,
    navigationOptions: () => ({
      header: null
    })
  }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
