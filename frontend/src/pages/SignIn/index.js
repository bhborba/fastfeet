import React from 'react';

import logo from '~/assets/logo-purple.png';

export default function SignIn() {
    return (
        <>
            <div>
                <img src={logo} alt="FastFeet" />
                <form>
                    <p>SEU E-MAIL</p>
                    <input type="email" placeholder="exemplo@email.com" />
                    <p>SUA SENHA</p>
                    <input type="password" placeholder="*************" />
                    <button type="submit">Entrar no sistema</button>
                </form>
            </div>
        </>
    );
}
