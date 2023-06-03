import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return (
        <TabNavigator
        screenOptions = {({route})=>({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.Name == 'Feed'){
                    iconName = focused? 'book':'book-outline';
                }
                else if(route.name =='CreatePost'){
                    iconName = focused? 'create ': 'create-outline';
                }
                return <Ionicons name = {iconName} size = {size} color = {color}/>
            }
        })}
        tabBarOptions = {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name = "Feed" component = {Feed}/>
            <Tab.Screen name = "CreatePost" component = {CreatePost}/>
        </TabNavigator>
        
    )
}

export default BottomTabNavigator

//make drawer next!!!