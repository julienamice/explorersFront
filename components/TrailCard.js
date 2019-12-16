import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Text } from "react-native-elements";
import { Foundation, FontAwesome } from "@expo/vector-icons";

const getRating = score => {
  const rating = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      rating.push(
        <FontAwesome key={i} name="star" size={15} color="#C1EA69" />
      );
    } else {
      rating.push(
        <FontAwesome key={i} name="star" size={15} color="#D9C6BA" />
      );
    }
  }

  return rating;
};

class TrailCard extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => navigate("TrailDetails", { id: this.props.id })}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 8,
            marginBottom: 20,
            marginRight: 5,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Image
            source={require("../assets/aventure.png")}
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              width: "100%"
            }}
          />
          <Text h5 style={{ marginRight: 10, marginLeft: 10, marginTop: 10 }}>
            <Foundation
              name="marker"
              size={15}
              color="#C1EA69"
              iconStyle={{ marginRight: 15 }}
            />
            <Text> </Text>
            {this.props.location}
          </Text>

          <Text
            h2
            style={{
              marginRight: 10,
              marginLeft: 10
            }}
          >
            {this.props.parcours}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
              marginRight: 10,
              marginLeft: 10
            }}
          >
            <Text h4>{this.props.subtitle}</Text>
            <Text style={{ marginTop: 10 }}>
              {getRating(this.props.rating)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(TrailCard);
