import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Image } from "react-native";
import { withNavigation } from "react-navigation";

class Header extends Component {
  // state = {
  //   displayMenu: false
  // };

  onPress = () => {
    // this.setState({ displayMenu: !this.state.displayMenu });
    this.props.navigation.navigate("Compte");
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "white",
          borderRadius: 2,
          marginTop: -20,
          marginLeft: -6
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 45,
            height: 45,
            position: "absolute",
            top: 32,
            left: 10
          }}
          color="black"
        />
        <Button
          icon={
            <Image
              source={require("../assets/menu.png")}
              style={{ width: 25, height: 25, marginTop: 3 }}
              color="black"
            />
          }
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 30,
            right: 10
          }}
          onPress={() => {
            this.onPress();
          }}
        />
        {/* {this.state.displayMenu && <Menu/>} */}
      </View>
    );
  }
}

export default withNavigation(Header);
