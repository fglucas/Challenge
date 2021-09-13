import React from "react"
import { View, StatusBar } from "react-native"
import { SafeArea, Main } from "./style"


export function Container({ children }) {

    return (
        <SafeArea>
            <StatusBar
                backgroundColor="#F2F2F2"
                barStyle="dark-content"
            />
            <Main>
                {children}
            </Main>

        </SafeArea>
    )

}