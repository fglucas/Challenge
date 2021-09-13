import React, { useState, useEffect } from "react"
import { Text } from "react-native"
import { Container } from "../../components/Container"
import Logo from "../../../assets/svg/logo"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {

    useEffect(() => {
        handleUser();
    },[]);

    async function handleUser(){
        const user = await JSON.parse(await AsyncStorage.getItem("logado"))
        setUser(user)
    }

    const [user, setUser] = useState({})

    return (
        <Container>
            <Logo />

            <Text>Bem vindo {user.nome}</Text>

        </Container>
    )

}