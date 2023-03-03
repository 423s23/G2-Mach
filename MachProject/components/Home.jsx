import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, FlatList, Button} from 'react-native';
import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';

const images = [
    { source: require('../images/homepic1.jpeg') },
    { source: require('../images/homepic2.jpeg') },
    { source: require('../images/homepic3.jpeg') },
];

function LevelBar(props){
    const [currentPoints, setCurrentPoints] = useState(props.currentPoints);

    const increasePoints = () =>{
        const newPoints = 1000;
        setCurrentPoints(newPoints);
    }

    let maxPoints = 100;
    let machID = 'Badass'
    let nextMachID = 'Complete';

    if (currentPoints > 30000) { //MACH LEGEND
        maxPoints = 50000;
        machID = "Legend"

    } else if (currentPoints > 10000) { //MACH HERO
        maxPoints = 30000;
        machID = 'Hero'
        nextMachID = 'Legend';

    } else if (currentPoints > 4500) { //MACH ICON
        maxPoints = 10000;
        machID = 'Icon'
        nextMachID = 'Hero';

    } else if (currentPoints > 1750) { //MACH STAR
        maxPoints = 4500;
        machID = 'Star'
        nextMachID = 'Icon';

    } else{ //MACH BADASS
        maxPoints = 1750;
        nextMachID = 'Star';
    }

    const progress = (currentPoints / maxPoints) * 100;
    const diff = (maxPoints - currentPoints);

    //Star Bar
    const emptyStar = require('../images/star_corner.png');
    const filledStar = require('../images/star_filled.png');
    const stars = [];

    if (machID == 'Legend'){
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={filledStar}
                    style={{ width: 50, height: 50 }}
                />
            );
        }
    } else if (machID == 'Hero'){
        for (let i = 0; i < 4; i++) {
            stars.push(
                <Image
                    key={i}
                    source={filledStar}
                    style={{ width: 50, height: 50 }}
                />
            );
        }
        stars.push(
            <Image
                key={4}
                source={emptyStar}
                style={{ width: 50, height: 50 }}
            />
        );
    } else if (machID == 'Icon') {
        for (let i = 0; i < 3; i++) {
            stars.push(
                <Image
                    key={i}
                    source={filledStar}
                    style={{width: 50, height: 50}}
                />
            );
        }
        for (let i = 3; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={emptyStar}
                    style={{width: 50, height: 50}}
                />
            );
        }
    } else if (machID == 'Star') {
        for (let i = 0; i < 2; i++) {
            stars.push(
                <Image
                    key={i}
                    source={filledStar}
                    style={{width: 50, height: 50}}
                />
            );
        }
        for (let i = 2; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={emptyStar}
                    style={{width: 50, height: 50}}
                />
            );
        }
    } else{
        stars.push(
            <Image
                key={0}
                source={filledStar}
                style={{width: 50, height: 50}}
            />
        );
        for (let i = 1; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={emptyStar}
                    style={{width: 50, height: 50}}
                />
            );
        }
    }

    return (
        <View style={{alignItems: 'center'}}>
            <View>
                <Text style={[styles.text, {fontSize: 20}]}>Mach {machID}</Text>
            </View>
            <View>
                <Text>{stars}</Text>
            </View>
            <Text style={[styles.text, {marginBottom: 5}]}>{diff} points to Mach {nextMachID} </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
                <View
                    style={{
                        height: 15,
                        backgroundColor: '#DDD',
                        borderRadius: 5,
                        width: '80%',
                    }}
                >
                    <View
                        style={{
                            height: '100%',
                            backgroundColor: '#6ccff6',
                            borderRadius: 5,
                            width: `${progress}%`,
                        }}
                    >
                        <Text style={{position: 'absolute', right: 5, color: '#000' }}>
                            {currentPoints}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        width: '75%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >
                    <Text style={styles.levelBarNums}>{0}</Text>
                </View>
                <Text style={styles.levelBarNums}>{maxPoints}</Text>
            </View>
        </View>
    );
}
function Home( { navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <LevelBar currentPoints={5000}/>
            </View>
            <View>
                <Text style={[styles.text, {alignItems: 'center', justifyContent: 'center', marginBottom: -5}]}>Recent Uploads</Text>
            </View>
            <View style={{ flex: 1, marginBottom: -100 }}>
                <FlatList
                    data={images}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image source={item.source} style={styles.image} />
                    )}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View style={styles.button}>
                    {/*<Button>*/}
                    {/*    title="Upload Image"*/}
                    {/*    onPress={()=> navigation.navigate('Home')}*/}
                    {/*</Button>*/}
                    <Text> Upload Image </Text>
                </View>

                <View style={styles.button}>
                    <Text> Duty Request </Text>
                </View>

                <View style={styles.button}>
                    <Text> Team Leaderboard </Text>
                </View>
            </View>

        </View>
    );
}

export default withNavigation(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    massive: {
        fontSize: 160,
        color: "#FFE133",
    },
    button: {
        backgroundColor: '#FFF',
        padding: 15,
        width: 200,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        margin: 10,
    },
    levelBarNums: {
        color: '#DDD'
    },
    text: {
        color: '#6ccff6',
    },

});