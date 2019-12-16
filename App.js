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
import IntroTrail from './components/intro.enigma';

import Louvre1 from './components/louvre1.enigma';
import Louvre2 from './components/louvre2.enigma';
import Louvre3 from './components/louvre3.enigma';

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
  },
  IntroTrail: {
    screen: IntroTrail,
    navigationOptions: () => ({
      header: null
    })
  },
  Louvre1: {
    screen: Louvre1,
    navigationOptions: () => ({
      header: null
    })
  },
  Louvre2: {
    screen: Louvre2,
    navigationOptions: () => ({
      header: null
    })
  },
  Louvre3: {
    screen: Louvre3,
    navigationOptions: () => ({
      header: null
    })
  }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
