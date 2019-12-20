import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    Ionicons,
    FontAwesome
} from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

class EnigmaEnd extends React.Component {

    constructor() {
        super()
        this.state = {
            starCount: 4

        }
    }



    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View
                style={{
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <View
                //style={
                // styles.tbar
                //}
                >
                    <View
                        style={{
                            // backgroundColor: 'yellow',
                            justifyContent: 'center',
                            width: '100%',
                            top: 50,


                        }}
                    >
                        <Image
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 170,
                                width: 170
                            }}
                            source={require('../assets/crown.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 90,
                    // backgroundColor: 'red',
                    flexDirection: 'column',
                    width: '86%'


                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        // top: 30,
                        marginBottom: 50
                    }}>
                        <Text style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            // backgroundColor: 'pink',
                            fontSize: 32
                        }}
                        >Bravo !</Text>
                    </View>

                    <View>
                        <Text style={{
                            position: 'relative',
                            marginBottom: 50
                        }}
                        >Maintenant, vous savez de quelle manière Paris s'est construit : cela a pris des siècles, et beaucoup d'illustres personnages ont participé à sa construction. Et qui sait, peut-être que vous aurez, vous aussi, l'occasion d'ajouter votre pierre à l'édifice un jour ! Ce serait plutôt chouette que l'Histoire retienne vos noms également, n'est-ce-pas ?</Text>
                    </View>


                    <View>
                        <Text style={{
                            position: 'relative',
                            marginBottom: 20

                        }}
                        >Merci de noter votre expérience de ce parcours</Text>
                    </View>

                </View>
                <View>
                    <StarRating
                        style={{ position: 'relative', marginBottom: 50 }}
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'#C1EA69'}
                        emptyStarColor={'#C1EA69'}
                    />
                </View>
                <TouchableOpacity style={styles.buttonOK} onPress={() => { this.props.navigation.navigate("ThemeList", console.log('ThemeList')) }
                }>
                    <Text>RETOUR AUX PARCOURS</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({


    buttonOK: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C1EA69',
        width: '86%',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
        color: 'white',
        marginTop: 50
    },

    container: {
        flex: 1
    },
    tabs: {
        flexDirection: 'column',
        // justifyContent: 'space-around',
        // marginTop: 50,
        // width: '100%',
        // height: '11%',
    },


    tbar: {
        width: '100%',
        height: '30%',


    },

    bbar: {
        width: '100%',
        height: '15%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',


    },
});

export default EnigmaEnd;