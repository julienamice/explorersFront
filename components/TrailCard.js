import React from "react";
import { View, Image } from "react-native";
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

const TrailCard = props => (
  <View
    style={{
      borderWidth: 1,
      borderColor: "#DDDDDD",
      borderRadius: 5,
      marginBottom: 10,
      marginRight: 5
    }}
  >
    <Image source={require("../assets/icon.png")} />
    <Text h5>
      <Foundation name="marker" size={15} />
      {props.location}
    </Text>
    <Text h2>{props.parcours}</Text>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Text>Score</Text>
      <Text>{getRating(props.rating)}</Text>
    </View>
  </View>
);

export default TrailCard;
