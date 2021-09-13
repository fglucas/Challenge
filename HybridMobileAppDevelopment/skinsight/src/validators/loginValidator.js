import { object, string } from 'yup';

export default async function loginValidator(values) {

    let errors = {}

    try {

        const schema = object().shape({
            email: string().required('Email obrigatório').email('Digite um email valido'),
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