import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="FastFeet" />
                    <Link to="/dashboard">ENCOMENDAS</Link>
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
