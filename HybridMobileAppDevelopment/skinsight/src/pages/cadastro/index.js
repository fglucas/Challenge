import React, { useState } from "react"
import { TouchableOpacity, ScrollView } from "react-native"
import { Container } from "../../components/Container"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import Seta from "../../../assets/svg/seta"
import Logo from "../../../assets/svg/logo"
import { Title, Text, Row, Main, RowBack } from "./style"
import validator from "../../validators/cadastroValidator"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from "react-native-toast-message"

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState()
    const [dtNascimento, setDtNascimento] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [validationErros, setValidationErros] = useState({})



    async function saveUser() {

        const errors = await validator({
            nome,
            dtNascimento,
            email,
            senha
        })

        setValidationErros(errors)

        if (Object.keys(errors).length == 0) {
            const users = await AsyncStorage.getItem("users")
            if (users) {
                const newUser = {
                    nome,
                    dtNascimento,
                    email,
                    senha
                }
                const usersJson = await JSON.parse(users)
                usersJson.push(newUser)
                AsyncStorage.setItem("users", JSON.stringify(usersJson))
                navigation.navigate("login")
                Toast.show({
                    type: "success",
                    position: "bottom",
                    text1: "Usuário criado",
                    autoHide: true,
                    visibilityTime: 2000
                })
            } else {
                AsyncStorage.setItem("users", JSON.stringify([]))
                const usersElse = await AsyncStorage.getItem("users")
                const newUser = {
                    nome,
                    dtNascimento,
                    email,
                    senha
                }
                const usersJson = await JSON.parse(usersElse)
                usersJson.push(newUser)
                AsyncStorage.setItem("users", JSON.stringify(usersJson))
                navigation.navigate("login")
                Toast.show({
                    type: "success",
                    text1: "Usuário criado",
                    position: "bottom",
                    autoHide: true,
                    visibilityTime: 2000
                })
            }
        }

    }


    return (
        <ScrollView>
            <Container>

                <Logo />

                <RowBack>
                    <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Row>
                            <Seta cadastro />
                            <Text>Voltar</Text>
                        </Row>
                    </TouchableOpacity>
                </RowBack>

                <Title>CADASTRO</Title>

                <Main>
                    <Input
                        cadastro
                        value={nome}
                        error={validationErros.nome}
                        onChange={(e) => setNome(e)}
                        placeholder="Nome" />

                    <Input
                        cadastro
                        value={dtNascimento}
                        error={validationErros.dtNascimento}
                        onChange={(e) => setDtNascimento(e)}
                        placeholder="Data de nascimento" />

                    <Input
                        cadastro
                        value={email}
                        error={validationErros.email}
                        onChange={(e) => setEmail(e)}
                        placeholder="E-mail" />

                    <Input
                        cadastro
                        value={senha}
                        error={validationErros.senha}
                        onChange={(e) => setSenha(e)}
                        placeholder="Senha" />

                </Main>
                <Button onClick={() => saveUser()} text="CADASTRAR" />


            </Container>
        </ScrollView>
    )
}

