import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';


function Louvre1(props) {

    useEffect(() => {


    }, [])

    const { navigation } = props;
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <View style={{ position: "absolute", top: 16, width: '100%', left: '7%', alignItems: 'stretch' }}>
                <TouchableOpacity onPress={() => { navigate("TrailDetails") }}>
                    <Image
                        style={{ width: 36 }}
                        source={require('../assets/back.png')}
                    >
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { console.log('Donne un indice stp') }}
                    style={
                        {
                            alignSelf: "flex-end",
                            alignItems: 'center',

                            right: '7%',
                            backgroundColor: '#C1EA69',
                            width: 60,
                            height: 40,
                            borderRadius: 4,
                            borderColor: 'transparent',
                        }}
                >
                    <Text style={{ lineHeight: 40 }}>Indice</Text>
                </TouchableOpacity>
            </View>
            <View top={60} style={{ width: '86%', position: 'absolute' }}>
                <Text h1 style={styles.h1}>Votre première mission</Text>
                <Text style={styles.text}>Les consignes de la première mission</Text>
            </View>
            <TouchableOpacity style={styles.buttonOK} onPress={() => { navigate("Louvre2", { enigmaContent: navigation.enigmaContent }) }}>
                <Text style={styles.textCTA}>Je suis prêt !</Text>
            </TouchableOpacity>
        </View>
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


export default Louvre1