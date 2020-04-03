import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import DeliverymanOptions from '~/components/DeliverymanOptions';

import api from '~/services/api';

import { Container, Form, DeliverymansTable } from './styles';

export default function Deliverymans() {
    const [deliverymans, setDeliverymans] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadDeliverymans() {
            const response = await api.get('deliverymans');

            setDeliverymans(response.data);
        }

        loadDeliverymans();
    }, []);

    async function handleSearch(e) {
        e.preventDefault();

        const response = await api.get('deliverymans', {
            params: {
                q: search,
            },
        });

        setDeliverymans(response.data);
    }

    return (
        <Container>
            <header>
                <h1>Gerenciando entregadores</h1>
                <div>
                    <Form onSubmit={handleSearch}>
                        <MdSearch color="#999999" size={20} />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            name="search"
                            type="search"
                            placeholder="Buscar por entregadores"
                        />
                    </Form>
                    <Link
                        className="button"
                        to="deliverymans/add"
                        type="button"
                    >
                        <MdAdd color="#FFFFFF" size={20} />
                        CADASTRAR
                    </Link>
                </div>
            </header>

            <DeliverymansTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th className="lastTh">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {deliverymans.map(deliveryman => {
                        return (
                            <>
                                <tr key={deliveryman.id}>
                                    <td className="firstCell">
                                        <span>#{deliveryman.id}</span>
                                    </td>
                                    <td>
                                        <div className="deliveryMan">
                                            <img
                                                src={deliveryman.avatar.url}
                                                alt="Avatar"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <span>{deliveryman.name}</span>
                                    </td>
                                    <td>
                                        <span>{deliveryman.email}</span>
                                    </td>
                                    <td className="lastCell">
                                        <div className="options">
                                            <DeliverymanOptions />
                                        </div>
                                    </td>
                                </tr>
                                <br />
                            </>
                        );
                    })}
                </tbody>
            </DeliverymansTable>
        </Container>
    );
}
