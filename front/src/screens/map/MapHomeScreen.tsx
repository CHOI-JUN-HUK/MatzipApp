import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import useAuth from "@/hooks/quries/useAuth.ts";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

function MapHomeScreen() {
    const {logoutMutation} = useAuth();
    return (
        <View>
            <MapView
                style={styles.container}
                provider={PROVIDER_GOOGLE}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default MapHomeScreen;
