import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FeedHomeScreen from "@/screens/feed/FeedHomeScreen.tsx";
import CalendarHomeScreen from "@/screens/calendar/CalendarHomeScreen.tsx";
import MapStackNavigator, {MapStackParamList} from "@/navigations/stacks/MapStackNavigator.tsx";
import {colors, mainNavigation} from "@/constants";
import {NavigatorScreenParams, RouteProp} from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Dimensions} from "react-native";
import CustomDrawerContent from "@/navigations/drawer/CustomDrawerContent.tsx";

export type MainDrawerParamList = {
    [mainNavigation.HOME]: NavigatorScreenParams<MapStackParamList>;
    [mainNavigation.FEED]: undefined;
    [mainNavigation.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function DrawerIcons(route: RouteProp<MainDrawerParamList>, focused: boolean) {
    let iconName = '';

    switch (route.name) {
        case mainNavigation.HOME: {
            iconName = 'location-on';
            break;
        }
        case mainNavigation.FEED: {
            iconName = 'book';
            break;
        }
        case mainNavigation.CALENDAR: {
            iconName = 'event-note';
            break;
        }
        default: {
            break;
        }
    }

    return <MaterialIcons name={iconName} size={20} color={focused ? colors.BLACK : colors.GRAY_500}/>
}

function MainDrawerNavigator() {

    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={({route}) => ({
                drawerType: 'front',
                drawerStyle: {
                    width: Dimensions.get('screen').width * 0.6,
                    backgroundColor: colors.WHITE,
                },
                drawerActiveTintColor: colors.BLACK,
                drawerInactiveTintColor: colors.GRAY_500,
                drawerActiveBackgroundColor: colors.PINK_200,
                drawerLabelStyle: {
                    fontWeight: "600"
                },
                headerShown: false,
                drawerIcon: ({focused}) => DrawerIcons(route, focused),
            })}
        >
            <Drawer.Screen
                name={mainNavigation.HOME}
                component={MapStackNavigator}
                options={{
                    title: '홈',
                    swipeEnabled: false,
                }}
            />
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
