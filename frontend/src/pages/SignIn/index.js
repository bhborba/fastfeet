import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo-purple.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    function handleSubmit(data) {}

    return (
        <>
            <div>
                <img src={logo} alt="FastFeet" />
                <Form schema={schema} onSubmit={handleSubmit}>
                    <p>SEU E-MAIL</p>
                    <Input
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                    />
                    <p>SUA SENHA</p>
                    <Input
                        name="password"
                        type="password"
                        placeholder="*************"
                    />
                    <button type="submit">Entrar no sistema</button>
                </Form>
            </div>
        </>
    );
}
