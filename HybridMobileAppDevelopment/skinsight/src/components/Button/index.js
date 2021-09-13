import React from "react"
import { TouchableOpacity } from "react-native"
import { Text, BackgroundButton } from "./style"

export function Button({ text, onClick }) {

    return (
        <BackgroundButton onPress={() => onClick()} >
            <Text>{text}</Text>
        </BackgroundButton>
    )

}