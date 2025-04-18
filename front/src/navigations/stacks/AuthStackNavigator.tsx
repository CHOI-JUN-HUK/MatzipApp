import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "@/screens/auth/LoginScreen.tsx";
import AuthHomeScreen from "@/screens/auth/AuthHomeScreen.tsx";
import {authNavigations} from "@/constants";
import SignUpScreen from "@/screens/auth/SignUpScreen.tsx";

export type AuthStackParamList = {
    [authNavigations.AUTH]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGN_IN]: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {

    return (
        <Stack.Navigator
            screenOptions=
                {
                    {
                        cardStyle: {backgroundColor: 'white'},
                        headerStyle: {backgroundColor: 'white', shadowColor: 'gray'},
                        headerTitleStyle: {fontSize: 15},
                        headerTintColor: 'black',
                    }
                }
        >
            <Stack.Screen name={authNavigations.AUTH} component={AuthHomeScreen}
                          options={{headerTitle: '', headerShown: false}}/>
            <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} options={{headerTitle: '로그인'}}/>
            <Stack.Screen name={authNavigations.SIGN_IN} component={SignUpScreen} options={{headerTitle: '회원가입'}}/>
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;
