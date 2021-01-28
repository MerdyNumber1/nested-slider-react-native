import React from "react";
import { StyleSheet, View } from "react-native";
import SliderContainer from "./containers/SliderContainer";

export default function AppRoot() {
    return <View style={styles.wrapper}><SliderContainer /></View>;
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
