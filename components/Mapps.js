import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";
import { Button, Icon } from "react-native-elements";

class Mapps extends Component {
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
          width: "90%",
          height: "80%",
          backgroundColor: "white",
          borderRadius: 2,
          marginLeft: "6%"
        }}
      >
        <Button
          icon={<Icon name="arrow-back" color="black" />}
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 4,
            left: 15,
            zIndex: 4,
            borderColor: "transparent",
            borderRadius: 5
          }}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <MapView
          style={{ width: 250, height: 200 }}
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
          {/* {this.state.isReady && (
            <Marker
              title="1"
              coordinate={{
                latitude: 48.881304,
                longitude: 2.346062
              }}
            />
          )}
          {this.state.isReady && (
            <Marker
              title="2"
              coordinate={{
                latitude: 48.875323,
                longitude: 2.316815
              }}
            />
          )}
          {this.state.isReady && (
            <Marker
              title="3"
              coordinate={{
                latitude: 48.862505,
                longitude: 2.352124
              }}
            />
          )}
          {this.state.isReady && (
            <Marker
              title="4"
              coordinate={{
                latitude: 48.852153,
                longitude: 2.291786
              }}
            />
          )} */}
          {/* {this.state.isReady && (
            <Marker
              title="Louvre"
              coordinate={{
                latitude: 48.864824,
                longitude: 2.334595
              }}
            />
          )} */}
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
          {this.state.isReady && (
            <Polygon
              coordinates={[
                { latitude: 48.881304, longitude: 2.346062 },
                { latitude: 48.862505, longitude: 2.352124 },
                { latitude: 48.858001, longitude: 2.341353 },
                { latitude: 48.852153, longitude: 2.291786 },
                { latitude: 48.875323, longitude: 2.316815 }
              ]}
              strokeColor="rgb(217, 198, 186)"
              // au cas où strokeColor, n'est pas supporté
              strokeColors={[
                "#D9C6BA",
                "#D9C6BA",
                "#D9C6BA",
                "#D9C6BA",
                "#D9C6BA"
              ]}
              strokeWidth={3}
              fillColor="rgba(217, 198, 186, 0.5)"
            />
          )}
        </MapView>
      </View>
    );
  }
}

export default Mapps;
