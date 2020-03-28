import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import DeliveryOptions from '~/components/DeliveryOptions';

import api from '~/services/api';

import { Container, Form, DeliverysTable } from './styles';

export default function Dashboard() {
    const [packs, setPacks] = useState([]);

    function verifyStatus(pack) {
        if (pack.canceled_at) return 'CANCELADA';
        if (pack.end_date) return 'ENTREGUE';
        if (pack.start_date) {
            return 'RETIRADA';
        }
        return 'PENDENTE';
    }

    useEffect(() => {
        async function loadPackages() {
            const response = await api.get('packages');

            setPacks(response.data);
        }

        loadPackages();
    }, []);

    return (
        <Container>
            <header>
                <h1>Gerenciando encomendas</h1>
                <div>
                    <Form onSubmit={() => {}}>
                        <MdSearch color="#999999" size={20} />
                        <input
                            name="search"
                            type="search"
                            placeholder="Buscar por encomendas"
                        />
                    </Form>
                    <button type="button">
                        <MdAdd color="#FFFFFF" size={20} />
                        CADASTRAR
                    </button>
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
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {packs.map(pack => (
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
                                            src={pack.deliveryman.avatar.url}
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
                                    <div className="status">
                                        <span className="ball" />
                                        <span>{verifyStatus(pack)}</span>
                                    </div>
                                </td>
                                <td className="lastCell">
                                    <DeliveryOptions />
                                </td>
                            </tr>
                            <br />
                        </>
                    ))}
                </tbody>
            </DeliverysTable>
        </Container>
    );
}
