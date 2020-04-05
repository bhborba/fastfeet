import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { useLocation, Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { editRequest } from '~/store/modules/recipients/actions';
import history from '~/services/history';
import { Container, RecipientDetails } from './styles';

export default function Edit() {
    const dispatch = useDispatch();
    const location = useLocation();

    function handleSubmit(data) {
        dispatch(editRequest(data));
        history.push({
            pathname: '/recipients',
        });
    }

    return (
        <Container>
            <Form initialData={location.state} onSubmit={handleSubmit}>
                <header>
                    <h1>Edição de destinatário</h1>
                    <div>
                        <Link className="back" type="button" to="/recipients">
                            <MdKeyboardArrowLeft color="#FFFFFF" size={20} />
                            VOLTAR
                        </Link>
                        <button className="save" type="submit">
                            <MdCheck color="#FFFFFF" size={20} />
                            SALVAR
                        </button>
                    </div>
                </header>

                <RecipientDetails>
                    <p>Nome</p>
                    <Input name="name" placeholder="Seu nome" />
                    <div>
                        <div className="street">
                            <p>Rua</p>
                            <Input name="street" placeholder="Rua" />
                        </div>
                        <div>
                            <p>Número</p>
                            <Input name="number" placeholder="Número" />
                        </div>
                        <div>
                            <p>Complemento</p>
                            <Input
                                name="complement"
                                placeholder="Complemento"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="city">
                            <p>Cidade</p>
                            <Input name="city" placeholder="Cidade" />
                        </div>
                        <div>
                            <p>Estado</p>
                            <Input name="state" placeholder="Estado" />
                        </div>
                        <div>
                            <p>CEP</p>
                            <Input name="zip" placeholder="CEP" />
                        </div>
                    </div>
                    <Input name="id" type="hidden" />
                </RecipientDetails>
            </Form>
        </Container>
    );
}
