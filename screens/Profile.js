import * as React from "react";
import {View, StyleSheet, Text} from "react-native";

export default class Profile {
    render(){
        return(
            <View>
                <Text styles = {abc.title}>Profile Screen</Text>
            </View>
        )
    }
}

const abc = StyleSheet.create({
    title:{
        flex:1,
        fontSize: 20,
        alignSelf: "center",
        justifyContent: "center",
    }
})