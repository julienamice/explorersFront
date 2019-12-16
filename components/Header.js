import React, { Component } from "react";
import { Icon, Button } from "react-native-elements";
import { View, Image } from "react-native";
// import { Feather } from "@expo/vector-icons";
import Menu from "./Menu";

// const Header = () => (
class Header extends Component {
  state = {
    displayMenu: false
  };

  onPress = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "white",
          borderRadius: 2
        }}
      >
        <Button
          icon={
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 45, height: 45 }}
              color="black"
            />
          }
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 22,
            left: 25
          }}
          // onPress={() => { //du coup pas besoin de btn ici au final car pas de redirection
          //   console.log("home");
          // }}
        />
        <Button
          icon={<Icon name="menu" color="black" />}
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 30,
            right: 25
          }}
          onPress={() => {
            this.onPress();
          }}
        />
        {this.state.displayMenu && <Menu />}
      </View>
    );
  }
}

export default Header;
