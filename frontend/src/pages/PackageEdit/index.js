import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input, useField } from '@rocketseat/unform';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';

import api from '~/services/api';

import { Container, PackageDetails, selectStyles } from './styles';

export default function PackageEdit() {
    function handleSubmit(data) {
        console.log(data);
    }

    const location = useLocation();
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

        console.log(location.state.recipient);
        console.log(location.state.deliveryman);
        console.log(location.state.product);
    }, [location]);

    const recipientOptions = recipients.map(recipient => {
        return { value: recipient.id, label: recipient.name };
    });

    const deliveryMansOptions = deliverymans.map(deliveryman => {
        return { value: deliveryman.id, label: deliveryman.name };
    });

    return (
        <Container>
            <Form onSubmit={handleSubmit} initialData={location.state}>
                <header>
                    <h1>Edição de encomendas</h1>
                    <div>
                        <button className="back" type="button">
                            <MdKeyboardArrowLeft color="#FFFFFF" size={20} />
                            VOLTAR
                        </button>
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
                                className="select"
                                options={recipientOptions}
                                styles={selectStyles}
                                defaultValue={{
                                    value: location.state.recipient.id,
                                    label: location.state.recipient.name,
                                }}
                            />
                        </div>
                        <div>
                            <p>Entregador</p>
                            <Select
                                className="select"
                                options={deliveryMansOptions}
                                styles={selectStyles}
                                defaultValue={{
                                    value: location.state.deliveryman.id,
                                    label: location.state.deliveryman.name,
                                }}
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
