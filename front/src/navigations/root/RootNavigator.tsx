import React from "react";
import AuthStackNavigator from "../stacks/AuthStackNavigator.tsx";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator.tsx";
import useAuth from "@/hooks/quries/useAuth.ts";

function RootNavigator() {
    const {isLogin} = useAuth();

    return (
        <>
            {isLogin ? <MainDrawerNavigator/> : <AuthStackNavigator/>}
        </>
    );
}

export default RootNavigator;
