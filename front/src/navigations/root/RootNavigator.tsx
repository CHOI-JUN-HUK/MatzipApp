import React from "react";
import AuthStackNavigator from "../stacks/AuthStackNavigator.tsx";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator.tsx";

function RootNavigator() {

    const isLoggedIn = false;


    return (
        <>
            {isLoggedIn ? <MainDrawerNavigator/> : <AuthStackNavigator/>}
        </>
    );
}

export default RootNavigator;
