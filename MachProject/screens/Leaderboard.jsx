import React from 'react'
import {
    SafeAreaView, View, StyleSheet, Text, Alert
} from 'react-native'
import { ButtonGroup } from '../components/ButtonGroup'


const Leaderboard = () => {

    
    const printButtonLabel = (item) => {
        //Alert.alert("damn")
        return(
            <View style={StyleSheet.container}>
                <Text>TEST2</Text>
            </View>
        )
    }
    

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <ButtonGroup
                buttons={['Local', 'Nation']}
                doSomethingAfterClick={printButtonLabel}
                />
            </View>
            <View>
                <Text style={styles.text}>#1 - 45,000: Maverick</Text>
            </View>
            <View>
                <Text style={styles.text}>#2 - 44,960: Goose</Text>
            </View>
            <View>
                <Text style={styles.text}>#3 - 1: Tim</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 25,
    },

    text: {
        paddingTop: 15,
        fontSize: 25,
        flexDirection: "column",
        marginLeft: 10
    }
})

export default Leaderboard
