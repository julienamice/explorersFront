import React, { Component } from "react";
import { View, Image, Button, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Text } from "react-native-elements";
import { Foundation, FontAwesome } from "@expo/vector-icons";

const getRating = score => {
  const rating = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      rating.push(<FontAwesome key={i} name="star" size={15} />);
    } else {
      rating.push(<FontAwesome key={i} name="star-o" size={15} />);
    }
  }

  return rating;
};

class TrailCard extends Component {
  static navigationOptions = {
    // title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      // const TrailCard = props => (
      <TouchableOpacity
        onPress={() => navigate("TrailDetails", { id: this.props.id })}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 8,
            marginBottom: 10,
            marginRight: 5,
            backgroundColor: "white"
          }}
          // onPress={() => {
          //   console.log("héhé");
          // }}
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
              marginBottom: 5,
              marginRight: 10,
              marginLeft: 10
            }}
          >
            <Text>Score</Text>
            <Text>{getRating(this.props.rating)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(TrailCard);
