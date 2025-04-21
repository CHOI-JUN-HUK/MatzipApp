import React from "react";
import {SafeAreaView, View, Image, StyleSheet, Dimensions} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "@/navigations/stacks/AuthStackNavigator.tsx";
import CustomButton from "@/components/CustomButton.tsx";
import {authNavigations} from "@/constants";

type AuthHomeProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH>;

function AuthHomeScreen({navigation}: AuthHomeProps) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={require('../../assets/images/matzip.png')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton label="로그인"
                              onPress={() => navigation.navigate(authNavigations.LOGIN)}
                              size="large"
                />
                <CustomButton label="회원가입"
                              variant="outlined"
                              onPress={() => navigation.navigate(authNavigations.SIGN_IN)}
                              size="large"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        gap: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        flex: 1.5,
        width: Dimensions.get('screen').width / 2,
    }
});

export default AuthHomeScreen;
