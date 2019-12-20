import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, StatusBar } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';



function IntroTrail(props) {
    const [currentPos, setCurrentPos] = useState({ long: 0, lat: 0, latitudeDelta: 0.5, longitudeDelta: 0.5 })
    const [enigmaPos, setEnigma] = useState({ long: 2.3502269034290135, lat: 48.86483976349885 })
    const [distToEnigma, setDistToEngima] = useState(null)
    const [nextStep, setNextStep] = useState({ isNext: false, msg: 'Rapprochez vous du départ !' })

    const [enigmaContent, setEnigmaContent] = useState({})

    const { navigation } = props;
    const { navigate } = props.navigation;
    //Fonction de calcul entre point geoloc et étape de l'énigme
    function distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") { dist = dist * 1.609344 }
            if (unit == "N") { dist = dist * 0.8684 }
            // console.log('Function distance : ' + dist)
            setDistToEngima(dist)
            if (dist < 0.05) {
                setNextStep({ isNext: true, msg: "C'est parti !" })
            }
        }
    }

    useEffect(() => {
        _getLocationAsync();
        getEnigmaContent()

    }, [])

    getEnigmaContent = async () => {
        fetch(`http://locahost:3001/trails/content`)
            .then(res => {
                var body = res.json(); return body
            })
            .then(body => {
                console.log(body)
                setEnigmaContent(body)
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        // console.log('Distance au début du parcours ' + nextStep)
        var dist = distance(currentPos.lat, currentPos.long, enigmaPos.lat, enigmaPos.long, 'K')
    }, [currentPos])

    // checkDistance = async () => {
    //   if (distToEnigma !== null || distToEnigma < 0.05) {
    //     //AJOUTER CURRENT STEP +1 
    //     // navigation.navigate('/step')
    //   } else {

    //   }
    // }

    _getLocationAsync = async () => {
        var { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setError('Il a pas voulu, déso');
        }

        Location.watchPositionAsync({ distanceInterval: 0.5 },
            (loc) => {
                // console.log(loc.coords)
                setCurrentPos({
                    long: loc.coords.longitude,
                    lat: loc.coords.latitude
                })

            }
        )

    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{ position: "absolute", top: 16, width: '100%', left: '7%', alignItems: 'stretch' }}>
                <TouchableOpacity onPress={() => { navigate("TrailDetails") }}>
                    <Image
                        style={{ width: 36 }}
                        source={require('../assets/back.png')}
                    >
                    </Image>
                </TouchableOpacity>

            </View>
            <View top={60} style={{ width: '86%', position: 'absolute' }}>
                <Text h1 style={styles.h1}>Introduction</Text>
                <Text style={styles.text}>Vous avez choisi de partir enquêter sur la construction de Paris, excellent choix ! Rendez vous sur l'île de la Cité pour lancer le parcours.</Text>
            </View>
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

            <TouchableOpacity style={nextStep.isNext === true ? styles.buttonOK : styles.buttonDisabled} disabled={nextStep.isNext === true ? false : true} onPress={() => { navigate("Louvre1", { enigmaContent: enigmaContent }) }}>
                <Text style={styles.textCTA}>{nextStep.isNext === true ? nextStep.msg : 'Rapprochez vous du départ !'}</Text>
            </TouchableOpacity>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    buttonOK: {
        alignItems: 'center',
        backgroundColor: '#C1EA69',
        width: '86%',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
    },
    buttonDisabled: {
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        width: '86%',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
    },
    card: {
        borderRadius: 4,
        backgroundColor: '#F2F2F2',
        width: '86%',
        height: 260,
        marginBottom: 24,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
    },
    textCTA: {
        lineHeight: 40
    },
    map: {
        width: '100%',
        height: '100%'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 24
    },
    text: {
        fontSize: 16
    }
});


export default IntroTrail