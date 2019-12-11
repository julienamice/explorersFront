import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';



function Maptracking(props) {
    return (
        <View style={styles.card}>
            <MapView
                region={{ latitude: currentPos.lat, longitude: currentPos.long, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                followsUserLocation={true}
                showsUserLocation={true}
                showsCompass={true}
                borderRadius={4}
                style={styles.map}
            >
                <Marker title="Hello" description="I'am here" coordinate={{ latitude: enigmaPos.lat, longitude: enigmaPos.long }} image={require('../assets/pin.svg')} />

            </MapView>
            <View ><Text>Alo</Text></View>
        </View>
    )

}

export default Intro;