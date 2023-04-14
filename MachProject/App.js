import * as React from "react";
import NavBar from "./components/NavBar"
import * as Device from 'expo-device';

import * as SQLite from 'expo-sqlite';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationRef} from "./RootNavigation";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import TaskList from "./screens/TaskList";
import Task from "./screens/Tasks";
import LoginPage from "./screens/Login.jsx";
import Awards from "./screens/Awards.jsx";
import Points from "./screens/Points.jsx"
import SignUp from "./screens/SignUp.jsx"
import User from "./components/User.js"

const Stack = createNativeStackNavigator();

global.temp1 = new User("temp", "temp", "temp@email.com", "temp123", "tempa", "texas", "92029283", "Marathon")
let temp2 = new User("temp2", "temp2", "temp2@email.com", "temp123", "tempa", "texas", "92029283", "Marathon")
let temp3 = new User("temp3", "temp3", "temp3@email.com", "temp123", "tempa", "texas", "92029283", "Marathon")

global.allUsers = [temp1, temp2, temp3]
global.currentUser = null
export default function App() {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Navigation"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="TaskList" component={TaskList} />
                <Stack.Screen name="Task" component={Task} />
                <Stack.Screen name={"Login"} component={LoginPage} />
                <Stack.Screen name="Awards" component={Awards} />
                <Stack.Screen name="Points" component={Points} />
                <Stack.Screen name="SignUp" component={SignUp} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}