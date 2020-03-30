import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

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
                            <strong>{profile.name}</strong>
                            <button type="button" onClick={handleSignOut}>
                                sair do sistema
                            </button>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
