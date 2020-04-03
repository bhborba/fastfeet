import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import DeliveryOptions from '~/components/DeliveryOptions';

import api from '~/services/api';

import { Container, Form, DeliverysTable } from './styles';

export default function Dashboard() {
    const [packs, setPacks] = useState([]);
    const [search, setSearch] = useState('');

    function verifyStatus(pack) {
        const statusProps = {
            name: 'PENDENTE',
            background: '#F0F0DF',
            text: '#C1BC35',
        };
        if (pack.canceled_at) {
            statusProps.name = 'CANCELADA';
            statusProps.background = '#FAB0B0';
            statusProps.text = '#DE3B3B';
            return statusProps;
        }
        if (pack.end_date) {
            statusProps.name = 'ENTREGUE';
            statusProps.background = '#DFF0DF';
            statusProps.text = '#2CA42B';
            return statusProps;
        }
        if (pack.start_date) {
            statusProps.name = 'RETIRADA';
            statusProps.background = '#BAD2FF';
            statusProps.text = '#4D85EE';
            return statusProps;
        }
        return statusProps;
    }

    useEffect(() => {
        async function loadPackages() {
            const response = await api.get('packages');

            setPacks(response.data);
        }

        loadPackages();
    }, []);

    async function handleSearch(e) {
        e.preventDefault();

        const response = await api.get('packages', {
            params: {
                q: search,
            },
        });

        setPacks(response.data);
    }

    return (
        <Container>
            <header>
                <h1>Gerenciando encomendas</h1>
                <div>
                    <Form onSubmit={handleSearch}>
                        <MdSearch color="#999999" size={20} />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            name="search"
                            type="search"
                            placeholder="Buscar por encomendas"
                        />
                    </Form>
                    <Link className="button" to="/packages/add" type="button">
                        <MdAdd color="#FFFFFF" size={20} />
                        CADASTRAR
                    </Link>
                </div>
            </header>

            <DeliverysTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destinatátio</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th className="lastTh">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {packs.map(pack => {
                        const status = verifyStatus(pack);
                        return (
                            <>
                                <tr key={pack.id}>
                                    <td className="firstCell">
                                        <span>{pack.id}</span>
                                    </td>
                                    <td>
                                        <span>{pack.recipient.name}</span>
                                    </td>
                                    <td>
                                        <div className="deliveryMan">
                                            <img
                                                src={
                                                    pack.deliveryman.avatar.url
                                                }
                                                alt="Avatar"
                                            />
                                            <span>{pack.deliveryman.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{pack.recipient.city}</span>
                                    </td>
                                    <td>
                                        <span>{pack.recipient.state}</span>
                                    </td>
                                    <td>
                                        <div
                                            className="status"
                                            style={{
                                                background: status.background,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    background: status.text,
                                                }}
                                                className="ball"
                                            />
                                            <span
                                                style={{
                                                    color: status.text,
                                                }}
                                            >
                                                <p>{status.name}</p>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="lastCell">
                                        <div className="options">
                                            <DeliveryOptions data={pack} />
                                        </div>
                                    </td>
                                </tr>
                                <br />
                            </>
                        );
                    })}
                </tbody>
            </DeliverysTable>
        </Container>
    );
}
