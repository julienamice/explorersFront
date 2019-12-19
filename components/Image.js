import React from "react";
import { Image } from "react-native";

const MyImage = ({ type, ...otherProps }) => {
  switch (type) {
    case "louvre":
      return <Image {...otherProps} source={require("../assets/louvre.jpg")} />;
    case "monceau":
      return (
        <Image {...otherProps} source={require("../assets/monceau.jpg")} />
      );
    case "vincennes":
      return (
        <Image {...otherProps} source={require("../assets/vincennes.jpg")} />
      );
    case "mars":
      return <Image {...otherProps} source={require("../assets/mars.jpg")} />;
    default:
      return (
        <Image {...otherProps} source={require("../assets/aventure.png")} />
      );
  }
};

export default MyImage;
