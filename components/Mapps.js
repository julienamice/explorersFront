import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Polygon, Marker } from "react-native-maps";
import { Button, Icon } from "react-native-elements";

class Mapps extends Component {
  state = {
    currentLatitude: 0,
    currentLongitude: 0,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
    position: []
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          width: "90%",
          height: "80%",
          backgroundColor: "white",
          borderRadius: 2,
          //   marginTop: 50,
          marginLeft: "5%"
        }}
      >
        {/* <Text>Toto</Text> */}
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
          // onPress=
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <MapView
          style={{ width: "100%", height: "100%", flex: 1 }}
          zoomEnabled={true}
          showsUserLocation={true}
          initialRegion={{
            // latitude: 48.866667,
            // longitude: 2.333333,
            latitude: 48.864824,
            longitude: 2.334595,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          region={this.state.region}
        >
          <Marker
            title="1"
            coordinate={{
              latitude: 48.881304,
              longitude: 2.346062
            }}
          />
          <Marker
            title="2"
            coordinate={{
              latitude: 48.875323,
              longitude: 2.316815
            }}
          />
          <Marker
            title="3"
            coordinate={{
              latitude: 48.862505,
              longitude: 2.352124
            }}
          />
          <Marker
            title="4"
            coordinate={{
              latitude: 48.852153,
              longitude: 2.291786
            }}
          />
          <Marker
            title="Louvre"
            coordinate={{
              latitude: 48.864824,
              longitude: 2.334595
            }}
          />
          <Marker
            title="Pont-Neuf"
            coordinate={{
              latitude: 48.858001,
              longitude: 2.341353
            }}
          />

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
        </MapView>
      </View>
    );
  }
}

export default Mapps;
