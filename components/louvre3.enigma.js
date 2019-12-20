import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, PanResponder, Animated, Dimensions, UIManager, findNodeHandle, StatusBar } from 'react-native';



var windowDim = Dimensions.get('window');

var viewWidth = windowDim.width * 86 / 100;
var widthRatio = viewWidth / 306

class Louvre3 extends Component {

    constructor(props) {
        super(props);
        this.checkScore = this.checkScore.bind(this);
        this.state = {
            pan: new Animated.ValueXY(),
            item1: { x: 0, y: 0 },
            item2: { x: 0, y: 0 },
            item3: { x: 0, y: 0 },
            item4: { x: 0, y: 0 },
            posPlan: { x: null, y: null },
            count: 0
        };

    }

    checkScore = () => {
        UIManager.measureInWindow(findNodeHandle(this.emptyPlan),
            (x, y, w, h) => {
                console.log('Allo = ' + x + ' / ' + y)
                this.setState({
                    posPlan: { x: x, y: y }
                })
            });

        const { navigation } = this.props;
        const { navigate } = this.props.navigation;

        var item1Correction = { x: (306 * widthRatio * 73.529411 / 100) + this.state.posPlan.x + (14 * widthRatio / 2), y: 155 * widthRatio * 54.193548 / 100 + this.state.posPlan.y + (29 * widthRatio / 2) };
        console.log('Correction 1 : ' + item1Correction.x + ' / ' + item1Correction.y)
        var item2Correction = { x: (306 * widthRatio * 70.1241830065 / 100) + this.state.posPlan.x + (11.82 * widthRatio / 2), y: 155 * widthRatio * 69.664516129 / 100 + this.state.posPlan.y + (32.13 * widthRatio / 2) };
        console.log('Correction 2 : ' + item2Correction.x + ' / ' + item2Correction.y)
        var item3Correction = { x: (306 * widthRatio * 2.32679738562 / 100) + this.state.posPlan.x + (211 * widthRatio / 2), y: 155 * widthRatio * 86.9225806452 / 100 + this.state.posPlan.y + (15 * widthRatio / 2) };
        console.log('Correction 3 : ' + item3Correction.x + ' / ' + item3Correction.y)
        var item4Correction = { x: (306 * widthRatio * 77.8660130719 / 100) + this.state.posPlan.x + (21 * widthRatio / 2), y: 155 * widthRatio * 68.1096774194 / 100 + this.state.posPlan.y + (8 * widthRatio / 2) };
        console.log('Correction 4 : ' + item4Correction.x + ' / ' + item4Correction.y)

        console.log('Checkscore //////////////')
        console.log('Position du plan : ' + this.emptyPlan.measure((x, y, width, height) => { console.log(x + ' / ' + y) }))

        var countCheck = 0

        if (item1Correction.x * 0.20 <= this.state.item1.x && this.state.item1.x <= item1Correction.x * 1.80 && item1Correction.y * 0.20 <= this.state.item1.y && this.state.item1.y <= item1Correction.y * 1.80) {
            console.log('Item 1 bien placé')
            countCheck++
        } else { console.log('Item 1 PAS BIEN PLACE DU TOUT') }

        if (item2Correction.x * 0.20 <= this.state.item2.x && this.state.item2.x <= item2Correction.x * 1.80 && item2Correction.y * 0.20 <= this.state.item2.y && this.state.item2.y <= item2Correction.y * 1.80) {
            console.log('Item 2 bien placé')
            countCheck++
        } else { console.log('Item 2 PAS BIEN PLACE DU TOUT') }

        if (item3Correction.x * 0.20 <= this.state.item3.x && this.state.item3.x <= item3Correction.x * 1.80 && item3Correction.y * 0.20 <= this.state.item3.y && this.state.item3.y <= item3Correction.y * 1.80) {
            console.log('Item 3 bien placé')
            countCheck++
        } else { console.log('Item 3 PAS BIEN PLACE DU TOUT') }

        if (item4Correction.x * 0.20 <= this.state.item4.x && this.state.item4.x <= item4Correction.x * 1.80 && item4Correction.y * 0.20 <= this.state.item4.y && this.state.item4.y <= item4Correction.y * 1.80) {
            console.log('Item 4 bien placé')
            countCheck++
        } else { console.log('Item 4 PAS BIEN PLACE DU TOUT') }
        this.setState({
            count: countCheck
        })
        if (countCheck === 4) {
            navigate("EnigmaEnd", {})
        }
        
    }



    componentWillMount() {
        // Add a listener for the delta value change
        this.animatedValue = new Animated.ValueXY()
        this.animatedValue2 = new Animated.ValueXY()
        this.animatedValue3 = new Animated.ValueXY()
        this.animatedValue4 = new Animated.ValueXY()

        this._value = { x: 0, y: 0 }
        this._value2 = { x: 0, y: 0 }
        this._value3 = { x: 0, y: 0 }
        this._value4 = { x: 0, y: 0 }

        this.animatedValue.addListener((value) => this._value = value)
        this.animatedValue2.addListener((value) => this._value2 = value)
        this.animatedValue3.addListener((value) => this._value3 = value)
        this.animatedValue4.addListener((value) => this._value4 = value)

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y
                })
                this.animatedValue.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue.x, dy: this.animatedValue.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue.flattenOffset();
                this.setState({
                    item1: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item1)
            },
        })
        this.panResponder2 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue2.setOffset({
                    x: this._value2.x,
                    y: this._value2.y
                })
                this.animatedValue2.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue2.x, dy: this.animatedValue2.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue2.flattenOffset();
                this.setState({
                    item2: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item2)
            },
        })

        this.panResponder3 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue3.setOffset({
                    x: this._value3.x,
                    y: this._value3.y
                })
                this.animatedValue3.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue3.x, dy: this.animatedValue3.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue3.flattenOffset();
                this.setState({
                    item3: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item3)
            },
        })

        this.panResponder4 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue4.setOffset({
                    x: this._value4.x,
                    y: this._value4.y
                })
                this.animatedValue4.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue4.x, dy: this.animatedValue4.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue4.flattenOffset();
                this.setState({
                    item4: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item4)
            },
        })
    }

    render() {


        const animatedStyle1 = {
            transform: this.animatedValue.getTranslateTransform()
        }
        const animatedStyle2 = {
            transform: this.animatedValue2.getTranslateTransform()
        }
        const animatedStyle3 = {
            transform: this.animatedValue3.getTranslateTransform()
        }
        const animatedStyle4 = {
            transform: this.animatedValue4.getTranslateTransform()
        }

        console.log('Ratio width' + widthRatio)


        return (
            <View style={styles.container}>
                <StatusBar  hidden={true} />
                <View top={60} style={{ width: '86%', flex: 3 }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 24}}>
                        <Text h1 style={styles.h1}>Vous avez tout trouvé ! Encore un petit effort..</Text>
                        <TouchableOpacity
                        onPress={() => { console.log('Donne un indice stp') }}
                        style={
                            {
                                alignSelf: "center",
                                alignItems: 'center',
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
                    <Text style={styles.text}>Maintenant, le roi vous demande de refaire les plans en repositionnant les extensions de Renaissance.. Soyez observateurs, les détails vous aideront ! </Text>
                </View>

                <View style={{ position: 'relative', width: '86%', flex: 5, flexDirection: 'row', justifyContent: 'space-between' }}

                >
                    <Image
                        ref={ref => this.emptyPlan = ref}
                        zIndex={-1}
                        style={{ position: 'absolute', left: 0, bottom: 80, width: 306 * widthRatio, height: 155 * widthRatio }}
                        source={require('../assets/louvre-vide.png')}
                    />
                    <Animated.View style={[{}, animatedStyle1]}{...this.panResponder.panHandlers}>
                        <Image
                            source={require('../assets/frag1.png')}
                            style={{ height: 29 * widthRatio, width: 14 * widthRatio }}

                        />
                    </Animated.View>
                    <Animated.View style={[{}, animatedStyle2]}{...this.panResponder2.panHandlers}>
                        <Image
                            source={require('../assets/frag2.png')}
                            style={{ height: 32.13 * widthRatio, width: 11.82 * widthRatio }}
                        />
                    </Animated.View>
                    <Animated.View style={[{}, animatedStyle3]}{...this.panResponder3.panHandlers}>
                        <Image
                            source={require('../assets/frag3.png')}
                            style={{ height: 15 * widthRatio, width: 211 * widthRatio }}
                        />
                    </Animated.View>
                    <Animated.View style={[{}, animatedStyle4]}{...this.panResponder4.panHandlers}>
                        <Image
                            source={require('../assets/frag4.png')}
                            style={{ height: 8 * widthRatio, width: 21 * widthRatio }}
                        />
                    </Animated.View>

                </View>
                <View style={{ marginBottom: 15 }}>
                    <Text>Nombre d'extensions bien placées : {this.state.count} </Text>
                </View>


                <View style={{ flex: 1, width: '86%' }}>
                    <TouchableOpacity style={styles.buttonOK} onPress={() => this.checkScore() }>
                        <Text style={styles.textCTA}>Vérifier les emplacements</Text>
                    </TouchableOpacity>
                </View>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20
    },
    buttonOK: {
        alignItems: 'center',
        backgroundColor: '#C1EA69',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
        justifyContent: 'flex-end'
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
        fontWeight: "bold",
    fontSize: 24,
    width: '85%',
    alignSelf: "center"
    },
    text: {
        fontSize: 16
    }
});

export default Louvre3