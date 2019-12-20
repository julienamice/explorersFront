import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";
import { Button, Icon } from "react-native-elements";

class MappsRevo extends Component {
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
          borderRadius: 2
          // marginLeft: "6%"
        }}
      >
        {/* <Button
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
        /> */}
        <MapView
          style={{ width: 306, height: 200, marginBottom: 12 }}
          zoomEnabled={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 48.864824,
            longitude: 2.334595,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07
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
              title="Concorde"
              pinColor="#C1EA69"
              coordinate={{
                latitude: 48.865852,
                longitude: 2.321204
              }}
            />
          )}
          {this.state.isReady && (
            <Polygon
              coordinates={[
                { latitude: 48.881304, longitude: 2.346062 },
                { latitude: 48.865852, longitude: 2.321204 }, //concorde
                // { latitude: 48.863308, longitude: 2.328288 }, //tuileries
                { latitude: 48.856232, longitude: 2.297859 }, //mars
                { latitude: 48.848623, longitude: 2.395921 } //place nation
                // { latitude: 48.867603, longitude: 2.329407 } //place vendome
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

export default MappsRevo;
