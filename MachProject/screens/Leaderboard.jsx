import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {withNavigation} from "react-navigation";

const namesLocal = ['Dan          120', 'Bob          100', 'Tim          66'];
const namesGlobal = ['Jack               10001', 'Bob               90465', 'Josh               3000', 'Brady               1276', 'Abby               1001'];


const Leaderboard = () => {
    const [button1Clicked, setButton1Clicked] = useState(false);
    const [button2Clicked, setButton2Clicked] = useState(false);


    const [showNames, setShowNames] = useState(false);
  
    const handleButton1Click = () => {
      setButton1Clicked(true);
      setButton2Clicked(false);
      setShowNames(true);
    };
  
    const handleButton2Click = () => {
      setButton1Clicked(false);
      setButton2Clicked(true);
    };
  

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000',}}>
        <View style={{position: 'absolute', top: 100, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#6e6e6e',
            padding: 20,
            margin: 10,
            opacity: button1Clicked ? 1 : 0.5,
          }}
          onPress={handleButton1Click}>
          <Text style={styles.buttonText}>Local</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#6e6e6e',
            padding: 20,
            margin: 10,
            opacity: button2Clicked ? 1 : 0.5,
            shadowOffset: {
                width: 0,
                height: 2,
              },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={handleButton2Click}>
          <Text style={styles.buttonText}>Global</Text>
        </TouchableOpacity>
        <View style={{position: 'absolute', top: 100}}>
            <Text style={styles.demo}>  Name          Points</Text>
        </View>
        </View>
        {button1Clicked && namesLocal.map((name) => (
            <Text style={styles.people} key={name}>{name}</Text>
            
        ))}
        {button2Clicked && namesGlobal.map((name) => (
            <Text style={styles.people} key={name}>{name}</Text>
            
        ))}
      </View>
    );
  };

  export default withNavigation(Leaderboard);

  const styles = StyleSheet.create({

    buttonText:{
        color: '#ffffff', 
        fontSize: 25,
        
    },

    people: {
        color: '#ffffff',
        fontSize: 30,
        margin: 8,
        textAlign: 'left',
        borderWidth: 1,
        borderColor: '#737270',
        paddingLeft: 20,
        paddingRight: 20,

    },

    demo:{
        color: '#3aa1f0',
        fontSize: 30,
        position: 'absolute',
        
    }

  })
