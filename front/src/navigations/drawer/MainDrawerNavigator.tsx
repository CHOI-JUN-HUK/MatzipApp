import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FeedHomeScreen from "@/screens/feed/FeedHomeScreen.tsx";
import CalendarHomeScreen from "@/screens/calendar/CalendarHomeScreen.tsx";
import MapStackNavigator, {MapStackParamList} from "@/navigations/stacks/MapStackNavigator.tsx";
import {mainNavigation} from "@/constants";
import {NavigatorScreenParams} from "@react-navigation/native";

export type MainDrawerParamList = {
    [mainNavigation.HOME]: NavigatorScreenParams<MapStackParamList>;
    [mainNavigation.FEED]: undefined;
    [mainNavigation.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function MainDrawerNavigator() {

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: 'front',
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name={mainNavigation.HOME}
                component={MapStackNavigator}
                options={{
                    title: '홈',
                }}/>
            <Drawer.Screen
                name={mainNavigation.FEED}
                component={FeedHomeScreen}
                options={{
                    title: '피드',
                }}/>
            <Drawer.Screen
                name={mainNavigation.CALENDAR}
                component={CalendarHomeScreen}
                options={{
                    title: '캘린더',
                }}/>
        </Drawer.Navigator>
    );
}

export default MainDrawerNavigator;
