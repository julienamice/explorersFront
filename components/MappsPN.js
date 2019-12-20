import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";
import { Button, Icon } from "react-native-elements";

class MappsPN extends Component {
  state = {
    currentLatitude: 0,
    currentLongitude: 0,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
    position: [],
    isReady: false
  };

  onMapLayout = () => {
    this.setState({ isReady: true });
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "white",
          borderRadius: 2,
          marginTop: 120,
          marginBottom: -120
          // marginLeft: "6%"
        }}
      >
        <MapView
          style={{ width: 306, height: 200, marginBottom: 12 }}
          zoomEnabled={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 48.864824,
            longitude: 2.334595,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
          region={this.state.region}
          onLayout={this.onMapLayout}
        >
          {this.state.isReady && (
            <Marker
              title="Pont-Neuf"
              pinColor="#C1EA69"
              coordinate={{
                latitude: 48.858001,
                longitude: 2.341353
              }}
            />
          )}
        </MapView>
      </View>
    );
  }
}

export default MappsPN;
