import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TrailDetails from "./components/TrailDetails";
import ThemeList from "./components/ThemeList";
import Compte from "./components/Compte";
import Mapps from "./components/Mapps";
import Menu from "./components/Menu";

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
  Menu: {
    screen: Menu,
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
  }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
