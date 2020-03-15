import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo-purple.png';

export default function SignIn() {
    function handleSubmit(data) {}

    return (
        <>
            <div>
                <img src={logo} alt="FastFeet" />
                <Form onSubmit={handleSubmit}>
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
