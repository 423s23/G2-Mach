import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


//Screens
import Home from '../screens/Home'
import Leaderboard from '../screens/Leaderboard'
import Profile from '../screens/Profile'
import Tasks from '../screens/Tasks'

//Screen names
const homeName = 'Home'
const tasksName = 'Tasks'
const leaderboardName = 'Leaderboard'
const profileName = 'Profile'
const settingsName = 'Settings'

const Tab = createBottomTabNavigator()

export default function NavBar() {
    return (
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    } else if(rn === tasksName){
                        iconName = focused ? 'ribbon' : 'ribbon-outline'
                    } else if(rn === leaderboardName){
                        iconName = focused ? 'podium' : 'podium-outline'
                    } else if(rn === profileName){
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name ={iconName} size={size} color={color}/>
                },
            })}
            testID={"NavBar"}
            >

                <Tab.Screen name={homeName} options={{headerShown: false}} component={Home}/>
                <Tab.Screen name={tasksName} options={{headerShown: false}} component={Tasks}/>
                <Tab.Screen name={leaderboardName} options={{headerShown: false}} component={Leaderboard}/>
                <Tab.Screen name={profileName} options={{headerShown: false}} component={Profile}/>
            </Tab.Navigator>
    )
}
