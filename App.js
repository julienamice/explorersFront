import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TrailDetails from "./components/TrailDetails";
import ThemeList from "./components/ThemeList";
import Compte from "./components/Compte";
import Mapps from "./components/Mapps";
import Sign from "./components/Sign";
import PNIntro from "./components/PNIntro";
import PNStep from "./components/PNStep";
// import Test from "./components/Test";

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
  Compte: {
    screen: Compte,
    navigationOptions: () => ({
      header: null
    })
  },
  Mapps: {
    screen: Mapps,
    navigationOptions: () => ({
      header: null
    })
  },
  PNIntro: {
    screen: PNIntro,
    navigationOptions: () => ({
      header: null
    })
  },
  PNStep: {
    screen: PNStep,
    navigationOptions: () => ({
      header: null
    })
  }
  // Test: {
  //   screen: Test,
  //   navigationOptions: () => ({
  //     header: null
  //   })
  // }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
