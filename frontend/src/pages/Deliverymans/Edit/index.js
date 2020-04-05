import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import AvatarInput from '~/components/AvatarInput';

import { Container, DeliverymanDetails } from './styles';

import { editRequest } from '~/store/modules/user/actions';

export default function Edit() {
    const dispatch = useDispatch();
    const location = useLocation();

    function handleSubmit({ id, name, email, avatar_id }) {
        dispatch(editRequest(id, name, email, avatar_id));
    }

    return (
        <Container>
            <Form initialData={location.state} onSubmit={handleSubmit}>
                <header>
                    <h1>Cadastro de entregadores</h1>
                    <div>
                        <Link className="back" type="button" to="/deliverymans">
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
                    <Input name="id" type="hidden" />
                </DeliverymanDetails>
            </Form>
        </Container>
    );
}
