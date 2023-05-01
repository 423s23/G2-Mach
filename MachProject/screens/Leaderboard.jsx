import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {withNavigation} from "react-navigation";
import { ScrollView } from 'react-native';

// Displays a local and global leaderboard based on points

const namesLocal = ['Dan                         120 Points', 'Bob                         100 Points', 'Tim                         66 Points'];
const namesGlobal = ['Jack                       10001 Points', 'Keith                        9465 Points', 'Josh                       3000 Points', 'Brady                      1276 Points', 'Abby                          1001 Points'];
 

const Leaderboard = () => {

  let duties = [
    { id: 1, title: 'Jack', points: 5, description: 'Write a Jersey review on machapparel.com' },
    {id: 2, title: 'Write a Bib Review',points: 5,description: "Write a Bib review on machapparel.com"},
    {id: 3, title: 'Write a Tri-Suit Review',points: 5,description: "Write a Tri-Suit review on machapparel.com"},
    { id: 4, title: 'Race in Mach Kit', points: 5, description: 'Everytime you race in your kit you receive 5 points.' + '\nLet the Athlete Director know when/where you raced (photos encouraged for more points!).'},
    { id: 5, title: 'Place Handle in Bio', points: 10, description: '@machappareltri' + '\nLet us know if you place our instagram handle in your bio and you’ll receive points.' + '\nFor every new calendar year you’ll receive 10 points.'},
    { id: 6, title: 'Send Us A Quality Photo', points: 10, description: 'MACH Rights' + '\nCollaborate via instagram or send us your quality training photos'},
    { id: 7, title: 'Race Finish Photo', points: 20, description: 'MACH Rights' + '\nCollaborate via instagram or send us your race photos.'},
    { id: 8, title: 'Create A Quality Post', points: 10, description: 'MACH Rights' + '\nCollaborate with us via instagram.' + '\nImage needs to be professional quality.'},
    { id: 9, title: 'Create A Quality Tiktok', points: 10, description: 'MACH Rights' + '\nCollaborate with us via instagram/TikTok.' + '\nVideo needs to be professional quality.'},
    { id: 10, title: 'Order Team Bundle', points: 200, description: 'From machapparel.com' + '\nTeam bundle includes ordering team tri-suit, t-shirt, socks, hat.'},
];    
    

    const [button1Clicked, setButton1Clicked] = useState(true);
    const [button2Clicked, setButton2Clicked] = useState(false);


    const [showNames, setShowNames] = useState(true);
  
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
        <View style={{position: 'absolute'}}>
            {/* <Text style={styles.demo}>  Name          Points</Text> */}
        </View>
        </View>
        {button1Clicked && namesLocal.map((name) => (
            <Text style={styles.button} key={name}>{name}</Text>
            
        ))}
        {button2Clicked && namesGlobal.map((name) => (
            <Text style={styles.button} key={name}>{name}</Text>
            
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
        
    },


    container: {
      flex: 1,
      padding: 30,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: "flex-start",
  },

  button: {
      width: '75%',
      backgroundColor: '#6bd0f6',
      borderRadius: 30,
      padding: 20,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      fontSize: 20,
      fontWeight: 'bold'
  },
  buttonContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
  },
  points: {
      fontSize: 16,
      fontWeight: 'bold',
  },


  

  })

