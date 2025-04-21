import React, {useEffect, useRef, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, LatLng, LongPressEvent, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import useAuth from '@/hooks/quries/useAuth.ts';
import {alerts, colors, mapNavigations} from '@/constants';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MapStackParamList} from '@/navigations/stacks/MapStackNavigator.tsx';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from '@/navigations/drawer/MainDrawerNavigator';
import useUserLocation from '@/hooks/useUserLocation';
import usePermission from '@/hooks/usePermissions.ts';
import mapStyle from '@/assets/styles/map-styls.ts';
import CustomMarker from "@/components/CustomMarker.tsx";

type Navigation = CompositeNavigationProp<
    StackNavigationProp<MapStackParamList>,
    DrawerNavigationProp<MainDrawerParamList>
>;

function MapHomeScreen() {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation<Navigation>();
    const mapRef = useRef<MapView | null>(null);
    const [selectLocation, setSelectLocation] = useState<LatLng | null>();
    const {userLocation, isUserLocationError} = useUserLocation();
    usePermission('LOCATION');

    const handleLongPressMapView = ({nativeEvent}: LongPressEvent) => {
        setSelectLocation(nativeEvent.coordinate);
    };

    const handlePressUserLocation = () => {
        if (isUserLocationError) {
            // 에러메세지를 표시하기
            return;
        }

        mapRef?.current?.animateToRegion({
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    };

    const handlePressAddPost = () => {
        if (!selectLocation) {
            return Alert.alert(alerts.NOT_SELECTED_LOCATION.TITLE, alerts.NOT_SELECTED_LOCATION.DESCRIPTION);
        }

        navigation.navigate(mapNavigations.ADD_POST, {location: selectLocation});
        setSelectLocation(null);
    };

    return (
        <>
            <MapView
                ref={mapRef}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                followsUserLocation
                showsMyLocationButton={false}
                customMapStyle={mapStyle}
                onLongPress={handleLongPressMapView}
            >
                <CustomMarker coordinate={userLocation} color="RED" score={4}/>
                {selectLocation && (
                    <Callout>
                        <CustomMarker coordinate={selectLocation} color="RED" score={1}/>
                    </Callout>)
                }

            </MapView>
            <Pressable
                style={[styles.drawerButton, {top: inset.top || 20}]}
                onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" color={colors.WHITE} size={25}/>
            </Pressable>
            <View style={styles.buttonList}>
                <Pressable style={styles.mapButton} onPress={handlePressAddPost}>
                    <MaterialIcons name="add" color={colors.WHITE} size={25}/>
                </Pressable>
                <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
                    <MaterialIcons name="my-location" color={colors.WHITE} size={25}/>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerButton: {
        position: 'absolute',
        left: 0,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.PINK_700,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: colors.BLACK,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        elevation: 4,
    },
    buttonList: {
        position: 'absolute',
        bottom: 30,
        right: 15,
    },
    mapButton: {
        backgroundColor: colors.PINK_700,
        marginVertical: 5,
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowColor: colors.BLACK,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.5,
        elevation: 2,
    },
});

export default MapHomeScreen;
