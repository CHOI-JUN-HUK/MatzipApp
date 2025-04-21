import React, {useRef} from "react";
import {MapStackParamList} from "@/navigations/stacks/MapStackNavigator.tsx";
import {StackScreenProps} from "@react-navigation/stack";
import {colors, mapNavigations} from "@/constants";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputComponent, View} from "react-native";
import InputField from "@/components/InputField.tsx";
import Octicons from "react-native-vector-icons/Octicons";
import CustomButton from "@/components/CustomButton.tsx";
import useForm from "@/hooks/useForm.ts";
import {validateAddPost} from "@/utils";

type AddPostScreenProps = StackScreenProps<MapStackParamList, typeof mapNavigations.ADD_POST>

function AddPostScreen({route}: AddPostScreenProps) {
    const {location} = route.params;
    const descriptionRef = useRef<TextInput | null>(null);
    const addPost = useForm({
        initialValue: {
            title: '',
            description: '',
        },
        validate: validateAddPost,
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <InputField value="" disabled icon={
                        <Octicons name="location" size={18} color={colors.GRAY_500}/>
                    }/>

                    <CustomButton label="날짜 선택" variant="outlined" size="large"/>

                    <InputField
                        placeholder="제목을 입력하세요."
                        error={addPost.errors.title}
                        touched={addPost.touched.title}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        onSubmitEditing={() => descriptionRef.current?.focus()}
                        {...addPost.getTextInputProps('title')}
                    />
                    <InputField
                        ref={descriptionRef}
                        placeholder="기록하고 싶은 내용을 입력하세요. (선택)"
                        error={addPost.errors.description}
                        touched={addPost.touched.description}
                        multiline
                        returnKeyType="next"
                        {...addPost.getTextInputProps('description')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        gap: 20,
        marginBottom: 20,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        marginBottom: 10,
    }
});

export default AddPostScreen;
