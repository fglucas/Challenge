import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Container } from "../../components/Container"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import Seta from "../../../assets/svg/seta"
import Logo from "../../../assets/svg/logo"
import Background from "../../../assets/svg/background_login"
import { Title, Text, Row, Main } from "./style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from "react-native-toast-message"
import validator from "../../validators/loginValidator"

export default function Login({ navigation }) {


    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [validationErrors, setValidationErrors] = useState({})

    async function login() {


        const errors = await validator({ email, senha })
        setValidationErrors(errors)


        if (Object.keys(errors).length == 0) {

            const users = await AsyncStorage.getItem("users")


            if(users){

                const lista = await JSON.parse(users)

                const existe = lista.filter((obj) => {
                    return obj.senha == senha && obj.email == email ? true : false
                })

                if(existe.length > 0){

                    AsyncStorage.setItem("logado",JSON.stringify(existe[0]))

                    return navigation.navigate("home")
                }

                Toast.show({
                    text1: 'Usuário incorreto',
                    type: "error",
                    autoHide: true,
                    position:"bottom",
                    visibilityTime: 2000
                })


            }else {
                Toast.show({
                    text1: 'Não há usuários cadastrados',
                    type: "error",
                    autoHide: true,
                    position:"bottom",
                    visibilityTime: 2000
                })
            }

        }

        const users = await AsyncStorage.getItem("users")



    }

    return (
        <Container>
            <Background />
            <Logo />
            <Title>LOGIN</Title>

            <Main>
                <Input
                    value={email}
                    error={validationErrors.email}
                    onChange={(e) => setEmail(e)}
                    placeholder="EMAIL" />

                <Input value={senha}
                    error={validationErrors.senha}
                    onChange={(e) => setSenha(e)}
                    placeholder="SENHA" />

                <Button onClick={() => login()} text="ENTRAR" />
                <Text>Primeira vez aqui?</Text>

                <TouchableOpacity onPress={() => navigation.navigate("cadastro")}>
                    <Row>
                        <Text>Cadastre-se</Text>
                        <Seta />
                    </Row>
                </TouchableOpacity>

            </Main>


        </Container>
    )
}

