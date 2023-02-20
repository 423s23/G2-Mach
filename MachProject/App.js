import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from "./components/header";

const currentPoints = 50;
const maxPoints = 100;

const images = [
    { source: require('./images/homepic1.jpeg') },
    { source: require('./images/homepic2.jpeg') },
    { source: require('./images/homepic3.jpeg') },
];

function LevelBar(props){
    const [currentPoints, setCurrentPoints] = useState(props.currentPoints);
    let maxPoints = 100;
    let machID = 'Badass'
    let nextMachID = 'Complete';

    if (currentPoints > 30000) { //MACH LEGEND
        maxPoints = 50000;
        machID = "Legend"

    } else if (currentPoints > 10000) { //MACH HERO
        maxPoints = 25000;
        machID = 'Hero'
        nextMachID = 'Legend';

    } else if (currentPoints > 4500) { //MACH ICON
        maxPoints = 7500;
        machID = 'Icon'
        nextMachID = 'Hero';

    } else if (currentPoints > 1750) { //MACH STAR
        maxPoints = 4000;
        machID = 'Star'
        nextMachID = 'Icon';

    } else{ //MACH BADASS
        maxPoints = 1500;
        nextMachID = 'Star';
    }

    const progress = (currentPoints / maxPoints) * 100;
    const diff = (maxPoints - currentPoints);

    return (
        <View style={{alignItems: 'center'}}>
            <View>
                <Text style={[styles.text, {fontSize: 20}]}>Mach {machID}</Text>
            </View>
            <View>
                <Text style={styles.massive}>*****</Text>
            </View>
            <Text style={[styles.text, {marginBottom: 5}]}>{diff} points to Mach {nextMachID} </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
                <View
                    style={{
                        height: 15,
                        backgroundColor: '#DDD',
                        borderRadius: 5,
                        width: '80%',
                        //flex: 1,
                        //margin: 2,
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
export default function App() {
    // const fillPercentage = (currentPoints / maxPoints) * 100;

    return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
        <View>
            <LevelBar currentPoints={350} />
        </View>

        <View>
            <Text style={styles.text}>Recent Uploads</Text>
        </View>
        <View style={{ flex: 1 }}>
            <FlatList
                data={images}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={item.source} style={styles.image} />
                )}
            />
        </View>
        <View style={styles.button}>
            <Text> Upload Image </Text>
        </View>

        <View style={styles.button}>
            <Text> Duty Request </Text>
        </View>

        <View style={styles.button}>
            <Text> Team Leaderboard </Text>
        </View>

    </View>
  );
}

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
