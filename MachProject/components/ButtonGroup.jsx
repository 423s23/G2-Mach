import React, {useState} from 'react'
import {
    StyleSheet, View, TouchableOpacity, Text
} from 'react-native'

export const ButtonGroup = ({ buttons,
doSomethingAfterClick}) => {

    const [clickedId, setClickedId] = useState(0)

    const handleClick = (item, id) => {
        setClickedId(id)
        doSomethingAfterClick(item)
    }

    return (
        <View style={styles.container}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity 
                        onPress={(item) => handleClick(item, index)}
                        key={index}
                        style={[
                            index === clickedId ? styles.buttonActive : styles.button,
                            index === 0? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} : "",
                            index === 1? {borderTopRightRadius: 10, borderBottomEndRadius: 10} : ""

                        ]}>
                            <Text 
                            style={index === clickedId ? styles.textActive : styles.text}>
                                {buttonLabel}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 30
    }, 

    button: {
        flex: 1, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#303030',
        borderWidth: 0.5, 
        borderColor: '#303030'
    }, 

    buttonActive: {
        flex: 1,
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e5e5e',
        borderWidth: 0.5, 
        borderColor: '#5e5e5e'
    },

    text: {
        color: 'white'
    },

    textActive: {
        color: 'white'
    }
})