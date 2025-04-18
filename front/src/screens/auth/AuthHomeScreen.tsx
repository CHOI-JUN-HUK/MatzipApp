import React from "react";
import {SafeAreaView, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "../../navigations/stacks/AuthStackNavigator.tsx";
import {authNavigations} from "../../constants";
import CustomButton from "../../components/CustomButton.tsx";

type AuthHomeProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH>;

function AuthHomeScreen({navigation}: AuthHomeProps) {

    return (
        <SafeAreaView>
            <View>
                <CustomButton label="로그인"
                              onPress={() => navigation.navigate(authNavigations.LOGIN)}
                              size="large"
                />
            </View>

            <View>
                <CustomButton label="회원가입"
                              variant="outlined"
                              onPress={() => navigation.navigate(authNavigations.SIGN_IN)}
                              size="large"
                />
            </View>
        </SafeAreaView>
    );
}

export default AuthHomeScreen;
