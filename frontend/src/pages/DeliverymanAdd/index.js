import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import AvatarInput from '~/components/AvatarInput';

import { Container, DeliverymanDetails } from './styles';

import { addRequest } from '~/store/modules/user/actions';
import history from '~/services/history';

export default function DeliverymanAdd() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, avatar_id }) {
        dispatch(addRequest(name, email, avatar_id));
        history.push({
            pathname: '/dashboard',
        });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <header>
                    <h1>Cadastro de entregadores</h1>
                    <div>
                        <Link className="back" type="button" to="/dashboard">
                            <MdKeyboardArrowLeft color="#FFFFFF" size={20} />
                            VOLTAR
                        </Link>
                        <button className="save" type="submit">
                            <MdCheck color="#FFFFFF" size={20} />
                            SALVAR
                        </button>
                    </div>
                </header>

                <DeliverymanDetails>
                    <div>
                        <AvatarInput name="avatar_id" />
                        <div>
                            <p>Nome</p>
                            <Input name="name" placeholder="Seu nome" />
                            <p>E-mail</p>
                            <Input
                                name="email"
                                placeholder="example@fastfeet.com"
                            />
                        </div>
                    </div>
                </DeliverymanDetails>
            </Form>
        </Container>
    );
}
