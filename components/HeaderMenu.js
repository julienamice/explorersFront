import React, { Component } from "react";
import { Button, Icon } from "react-native-elements";
import { View, Image } from "react-native";
import { withNavigation } from "react-navigation";

class HeaderMenu extends Component {
  //   state = {
  //     displayMenu: false
  //   };

  onPress = () => {
    //   this.setState({ displayMenu: !this.state.displayMenu });
    console.log("dans mon header menu");
  };

  render() {
    // const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    return (
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "white",
          borderRadius: 2
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
        {/* <Button
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
          onPress={() => goBack()}
          //   onPress={() => {
          //     this.onPress();
          //   }}
        /> */}
        <Button
          icon={<Icon name="arrow-back" color="black" />}
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 30,
            right: 10,
            zIndex: 4,
            borderColor: "transparent",
            borderRadius: 5
          }}
          // onPress=
          onPress={() => goBack()}
          title="Go Back Home"
          titleStyle={{ color: "black" }}
        />
        {/* {this.state.displayMenu && navigate("Menu")} */}
      </View>
    );
  }
}

export default withNavigation(HeaderMenu);
