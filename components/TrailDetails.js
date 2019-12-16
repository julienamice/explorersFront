import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Foundation, FontAwesome } from "@expo/vector-icons";



class TrailDetails extends Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    // console.log(navigation.state.params.id);
    return (
      <View
        style={{
          width: '80%',
          flex: 1,
          alignItems: 'center',
          marginTop: 70,
          paddingLeft: '3%',
          paddingRight: '3%',
          borderWidth: 0,

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
        <TouchableOpacity
          onPress={() => navigate("IntroTrail", { id: this.props.id })}
          style={{
            alignItems: 'center',
            backgroundColor: '#C1EA69',
            width: '86%',
            height: 40,
            borderRadius: 4,
            borderColor: 'transparent'
          }}
        >
          <Text>Select</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

export default TrailDetails;
