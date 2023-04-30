import * as React from "react";
import NavBar from "./components/NavBar"
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

// Navigation for the App

// Arrays of the users
global.temp1 = new User ("tim1@gmail.com", "Tim", "Turner", "920-421-4808", "timmyy1", "tim123", 10050)
global.temp2 = new User ("tim2@gmail.com", "Tim", "Turner", "920-421-4808", "timmyy2", "tim123", 1005)
global.temp3 = new User ("tim3@gmail.com", "Tim", "Turner", "920-421-4808", "timmyy3", "tim123", 0)
global.allUsers = [temp1, temp2, temp3]
global.currentUser = new User("", "", "", "", "", "", 0)
const Stack = createNativeStackNavigator();

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
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Awards" component={Awards} />
                <Stack.Screen name="Points" component={Points} />
                <Stack.Screen name="SignUp" component={SignUp} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}