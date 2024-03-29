import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Button,
    TouchableOpacity,
    RefreshControl,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import reloadInstructions from "react-native/Libraries/NewAppScreen/components/ReloadInstructions.js";

// Displays the level and star bars based on the users points
// and a column of pictures.

const images = [
    { source: require('../images/homepic1.jpeg') },
    { source: require('../images/homepic2.jpeg') },
    { source: require('../images/homepic3.jpeg') },
];

function LevelBar(props){
    const [currentPoints, setCurrentPoints] = useState(props.currentPoints);
    console.log("Level bar points: " + currentPoints)

    // Level Bar
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

    if (machID == 'Legend'){ //MACH LEGEND
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    source={filledStar}
                    style={{ width: 50, height: 50 }}
                />
            );
        }
    } else if (machID == 'Hero'){ //MACH HERO
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
    } else if (machID == 'Icon') { //MACH ICON
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
    } else if (machID == 'Star') { //MACH STAR
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
    } else{ //MACH BADASS
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
        <View style={{alignItems: 'center', marginTop: 60}}>
            <View>
                <Text style={[styles.text, {fontSize: 40}]}>Mach {machID}</Text>
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
            <View>
                <Text style={[styles.text, {alignItems: 'center', justifyContent: 'center', marginBottom: 5,}]}>Recent Uploads</Text>
            </View>
        </View>
    );
}
//need this so we can refresh
function Container( {navigation}) {
    const [key, setKey] = React.useState(0);
    const reload = React.useCallback(() => setKey((prevKey) => prevKey + 1), []);
    return <Home reload={reload} key={key} />;
}

//returns the home page data
const Home = ( {reload}) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        reload;
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={reload} />
                }>
            <StatusBar style="auto" />
            <View>
                <LevelBar currentPoints={currentUser.points}/>
            </View>
            <View style={{ flex: 1}}>
                <Image source={require('../images/homepic1.jpeg') } style={styles.image}/>
                <Image source={require('../images/homepic2.jpeg') } style={styles.image}/>
                <Image source={require('../images/homepic3.jpeg') } style={styles.image} />
            </View>
            </ScrollView>
        </View>
    );
}

export default withNavigation(Container);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
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
        width: 300,
        height: 300,
        margin: 10,
    },
    levelBarNums: {
        color: '#DDD'
    },
    text: {
        color: '#6ccff6',
    },

});