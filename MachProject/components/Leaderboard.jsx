import React from 'react'
import {
    SafeAreaView, View, StyleSheet, Text, Alert
} from 'react-native'
import { ButtonGroup } from './ButtonGroup'


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
            <View style={StyleSheet.container}>
                <ButtonGroup
                buttons={['Local', 'Nation']}
                doSomethingAfterClick={printButtonLabel}
                />

                <Text>GEESE</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    text: {
        fontSize: 100
    }
})

export default Leaderboard
