import { object, string } from 'yup';

export default async function cadastroValidator(values) {

    let errors = {}

    try {

        const schema = object().shape({
            nome: string().required('Nome Obrigatorio').max(50, 'Maximo 50 caracteres').min(10, 'Minimo 10 caracteres '),
            email: string().required('Email obrigatório').email('Digite um email valido'),
            dtNascimento: string().required('Campo obrigatório'),
            senha: string().required('Senha obrigatória').min(6, 'Sua senha deve ter no mínimo 6 caracteres.'),
        })

        await schema.validate(values, { abortEarly: false });

        return {}

    } catch (err) {

        err.inner.forEach(element => {
            errors[element.path] = element.message
        });

        return errors
    }
}