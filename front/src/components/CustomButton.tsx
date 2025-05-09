import React from "react";
import {Pressable, StyleSheet, Text, PressableProps, Dimensions, View} from "react-native";
import {colors} from "../constants";

interface CustomButtonProps extends PressableProps {
    label: string;
    variant?: 'filled' | 'outlined';
    size?: 'large' | 'medium';
    inValid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({label, variant = 'filled', size = 'large', inValid = false, ...props}: CustomButtonProps) {

    return (
        <Pressable
            style={
                ({pressed}) => [
                    styles.container,
                    styles[size],
                    inValid && styles.inValid,
                    pressed ? styles[`${variant}Pressed`] : styles[variant]
                ]
            }
            {...props}
            disabled={inValid}>
            <View style={styles[size]}>
                <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    filled: {
        backgroundColor: colors.PINK_700,
    },
    filledPressed: {
        backgroundColor: colors.PINK_500,
    },
    outlined: {
        borderColor: colors.PINK_700,
        borderWidth: 1,
    },
    outlinedPressed: {
        borderColor: colors.PINK_700,
        borderWidth: 1,
        opacity: 0.5,
    },
    large: {
        width: '100%',
        paddingVertical: deviceHeight > 700 ? 15 : 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    medium: {
        width: '50%',
        paddingVertical: deviceHeight > 700 ? 12 : 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
    },
    filledText: {
        color: colors.WHITE,
    },
    outlinedText: {
        color: colors.PINK_700,
    },
    inValid: {
        opacity: 0.5,
    }
});

export default CustomButton;
