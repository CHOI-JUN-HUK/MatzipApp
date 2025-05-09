import React, {useRef} from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import InputField from "@/components/InputField.tsx";
import useForm from "@/hooks/useForm.ts";
import CustomButton from "@/components/CustomButton.tsx";
import {validateSignUp} from "@/utils";
import useAuth from "@/hooks/quries/useAuth.ts";

function SignUpScreen() {
    const passwordRef = useRef<TextInput | null>(null);
    const {signupMutation, loginMutation} = useAuth();
    const passwordConfirmRef = useRef<TextInput | null>(null);
    const signUp = useForm({
        initialValue: {email: '', password: '', passwordConfirm: ''},
        validate: validateSignUp,
    });

    const handleSubmit = () => {
        const {email, password} = signUp.values;
        signupMutation.mutate({email, password}, {
            onSuccess: () => loginMutation.mutate({email, password}),
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputField
                    autoFocus
                    placeholder="이메일"
                    error={signUp.errors.email}
                    touched={signUp.touched.email}
                    inputMode="email"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    {...signUp.getTextInputProps('email')}
                />
                <InputField
                    ref={passwordRef}
                    placeholder="비밀번호"
                    textContentType="oneTimeCode"
                    error={signUp.errors.password}
                    touched={signUp.touched.password}
                    secureTextEntry
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => passwordConfirmRef.current?.focus()}
                    {...signUp.getTextInputProps('password')}
                />
                <InputField
                    ref={passwordConfirmRef}
                    placeholder="비밀번호 확인"
                    error={signUp.errors.passwordConfirm}
                    touched={signUp.touched.passwordConfirm}
                    secureTextEntry
                    returnKeyType="join"
                    blurOnSubmit={false}
                    onSubmitEditing={handleSubmit}
                    {...signUp.getTextInputProps('passwordConfirm')}
                />
            </View>
            <CustomButton label="회원가입" onPress={handleSubmit}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    inputContainer: {
        gap: 20,
        marginBottom: 30,
    },
});

export default SignUpScreen;
