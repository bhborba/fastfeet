import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="FastFeet" />
                    <NavLink activeClassName="selected" to="/dashboard">
                        ENCOMENDAS
                    </NavLink>
                    <NavLink activeClassName="selected" to="/deliverymans">
                        ENTREGADORES
                    </NavLink>
                    <NavLink activeClassName="selected" to="/recipients">
                        DESTINATÁRIOS
                    </NavLink>
                    <NavLink activeClassName="selected" to="/problems">
                        PROBLEMAS
                    </NavLink>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Admin da FastFeet</strong>
                            <Link to="/">sair do sistema</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
