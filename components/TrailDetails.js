import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { Foundation, FontAwesome } from "@expo/vector-icons";

class TrailDetails extends Component {
  render() {
    const { navigation } = this.props;
    // console.log(navigation.state.params.id);
    return (
      <View
        style={{
          width: 350,
          height: 650,
          position: "absolute",
          right: 5,
          marginTop: 70,
          // marginLeft: 200,
          borderWidth: 1,
          // borderColor: "#DDDDDD",
          borderRadius: 5,
          backgroundColor: "green"
        }}
      >
        {/* récupérer l'id pour faire un test dessus pour savoir de quelle case du tab trailList il faut afficher les infos */}
        <Text>parcours : {navigation.state.params.id}</Text>
        {/* <Text>WOAH</Text> */}
        <Image
          source={require("../assets/aventure.png")}
          style={{
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            width: "100%"
          }}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <Text
            style={{
              marginRight: 10,
              marginLeft: 10
            }}
          >
            Parcours
          </Text>
          {/* {this.props.parcours} */}
          <Text style={{ marginRight: 10, marginLeft: 10 }}>
            <Foundation name="marker" size={15} />
            <Text> </Text>
            {/* {this.props.location} */}
            location
          </Text>
        </View>
      </View>
    );
  }
}

export default TrailDetails;
