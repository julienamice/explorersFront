
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TrailDetails from "./components/TrailDetails";
import ThemeList from "./components/ThemeList";

import IntroTrail from './components/intro.enigma';

import Louvre1 from './components/louvre1.enigma';
import Louvre2 from './components/louvre2.enigma';
import Louvre3 from './components/louvre3.enigma';

import Compte from "./components/Compte";
import Mapps from "./components/Mapps";
import Sign from "./components/Sign";


const MainNavigator = createStackNavigator({
  Home: {
    screen: Sign,
    navigationOptions: () => ({
      header: null
    })
  },
  ThemeList: {
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
    screen: IntroTrail
  },

  Compte: {
    screen: Compte,
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

  Mapps: {
    screen: Mapps,

    navigationOptions: () => ({
      header: null
    })
  }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
