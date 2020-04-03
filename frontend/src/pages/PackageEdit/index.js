import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { useLocation, Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Container, PackageDetails, selectStyles } from './styles';

import { editRequest } from '~/store/modules/packs/actions';
import Select from '~/components/Select';
import Input from '~/components/Input';

import api from '~/services/api';

export default function PackageEdit() {
    const dispatch = useDispatch();
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
    }, [location]);

    async function handleSubmit(formValues) {
        dispatch(editRequest(formValues));
    }

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

                <PackageDetails>
                    <div className="selectForm">
                        <div>
                            <p>Destinatário</p>

                            <Select
                                name="recipient"
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
                                name="deliveryman"
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
                    <Input name="id" type="hidden" />
                </PackageDetails>
            </Form>
        </Container>
    );
}
