import React, { useState } from 'react';
import {
    Alert,
    Button,
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { withNavigation } from 'react-navigation';
import {navigationRef} from "../RootNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StatusBar} from "expo-status-bar";

const passwordAlert = () =>
    Alert.alert('Incorrect Password', 'The password you entered is incorrect. Please try again', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

// const emailAlert = () =>
//     Alert.alert('Incorrect Email', 'The Email you entered is incorrect. Please try again', [
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//     ]);



function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onPress = () => validateLogin(email, password);

    function validateLogin(email, password) {
        for (const userElement of allUsers) {
            if (userElement.email.localeCompare(email) === 0) {
                if (userElement.password.localeCompare(password) === 0) {
                    currentUser = userElement
                    console.log(currentUser)
                    navigationRef.current?.navigate('Home')
                }
                else {
                    passwordAlert()
                }
            }
            else {
                // Alert.alert('Incorrect Email', 'The Email you entered is incorrect. Please try again', [
                //     {text: 'OK', onPress: () => console.log('OK Pressed')}
                // ]);
            }
        }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/mach-logo.png")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={onPress}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.forgot_button}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}
export default withNavigation(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#6bd0f6",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#fff"
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#6bd0f6",
    },
});