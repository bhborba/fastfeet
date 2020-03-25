import React from 'react';
import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';

import DeliveryOptions from '~/components/DeliveryOptions';
import api from '~/services/api';

import { Container, Form, DeliverysTable } from './styles';

export default function Dashboard() {
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
                    <tr>
                        <td className="firstCell">
                            <span>#01</span>
                        </td>
                        <td>
                            <span>Ludwig van Beethoven</span>
                        </td>
                        <td>
                            <div className="deliveryMan">
                                <img
                                    src="https://api.adorable.io/avatars/54/abott@adorable.png"
                                    alt="foto"
                                />
                                <span>John Doe</span>
                            </div>
                        </td>
                        <td>
                            <span>Rio do Sul</span>
                        </td>
                        <td>
                            <span>Santa Catarina</span>
                        </td>
                        <td>
                            <span>ENTREGUE</span>
                        </td>
                        <td className="lastCell">
                            <DeliveryOptions />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className="firstCell">
                            <span>#01</span>
                        </td>
                        <td>
                            <span>Ludwig van Beethoven</span>
                        </td>
                        <td>
                            <div className="deliveryMan">
                                <img
                                    src="https://api.adorable.io/avatars/54/abott@adorable.png"
                                    alt="foto"
                                />
                                <span>John Doe</span>
                            </div>
                        </td>
                        <td>
                            <span>Rio do Sul</span>
                        </td>
                        <td>
                            <span>Santa Catarina</span>
                        </td>
                        <td>
                            <span>ENTREGUE</span>
                        </td>
                        <td className="lastCell">
                            <DeliveryOptions />
                        </td>
                    </tr>
                </tbody>
            </DeliverysTable>
        </Container>
    );
}
