import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Container, PackageDetails, selectStyles } from './styles';

import Select from '~/components/Select';
import Input from '~/components/Input';

import { addRequest } from '~/store/modules/packs/actions';
import api from '~/services/api';
import history from '~/services/history';

export default function PackageAdd() {
    const dispatch = useDispatch();
    const [recipients, setRecipients] = useState([]);
    const [deliverymans, setDeliverymans] = useState([]);

    useEffect(() => {
        async function loadRecipients() {
            const response = await api.get('recipient');

            setRecipients(response.data);
        }

        loadRecipients();

        async function loadDeliverymans() {
            const response = await api.get('deliverymans');

            setDeliverymans(response.data);
        }

        loadDeliverymans();
    }, []);

    function handleSubmit({ recipient, deliveryman, product }) {
        dispatch(addRequest(recipient, deliveryman, product));
        history.push({
            pathname: '/packages',
        });
    }

    const recipientOptions = recipients.map(recipient => {
        return { value: recipient.id, label: recipient.name };
    });

    const deliveryMansOptions = deliverymans.map(deliveryman => {
        return { value: deliveryman.id, label: deliveryman.name };
    });

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <header>
                    <h1>Cadastro de encomendas</h1>
                    <div>
                        <Link className="back" type="button" to="/packages">
                            <MdKeyboardArrowLeft color="#FFFFFF" size={20} />
                            VOLTAR
                        </Link>
                        <button className="save" type="submit">
                            <MdCheck color="#FFFFFF" size={20} />
                            SALVAR
                        </button>
                    </div>
                </header>

                <PackageDetails>
                    <div className="selectForm">
                        <div>
                            <p>Destinatário</p>

                            <Select
                                name="recipient"
                                className="select"
                                options={recipientOptions}
                                styles={selectStyles}
                            />
                        </div>
                        <div>
                            <p>Entregador</p>
                            <Select
                                name="deliveryman"
                                className="select"
                                options={deliveryMansOptions}
                                styles={selectStyles}
                            />
                        </div>
                    </div>
                    <p>Nome do Produto</p>
                    <Input
                        className="product"
                        name="product"
                        placeholder="Produto"
                    />
                </PackageDetails>
            </Form>
        </Container>
    );
}
