import React from "react";
import { Header as HeaderNative } from "react-native-elements";

const Header = () => (
  <HeaderNative
    placement="left"
    leftComponent={{ icon: "home", color: "#fff" }}
    // centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
    rightComponent={{ icon: "menu", color: "#fff" }}
  />
);

export default Header;
