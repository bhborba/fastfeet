import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Options from './Options';

import api from '~/services/api';

import { Container, Form, RecipientsTable } from './styles';

export default function Recipients() {
    const [recipients, setRecipients] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function loadRecipients() {
            const response = await api.get('recipient');

            setRecipients(response.data);
        }

        loadRecipients();
    }, []);

    async function handleSearch(e) {
        e.preventDefault();

        const response = await api.get('recipient', {
            params: {
                q: search,
            },
        });

        setRecipients(response.data);
    }

    return (
        <Container>
            <header>
                <h1>Gerenciando destinatários</h1>
                <div>
                    <Form onSubmit={handleSearch}>
                        <MdSearch color="#999999" size={20} />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            name="search"
                            type="search"
                            placeholder="Buscar por destinatários"
                        />
                    </Form>
                    <Link className="button" to="recipients/add" type="button">
                        <MdAdd color="#FFFFFF" size={20} />
                        CADASTRAR
                    </Link>
                </div>
            </header>

            <RecipientsTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th className="lastTh">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {recipients.map(recipient => {
                        return (
                            <>
                                <tr key={recipient.id}>
                                    <td className="firstCell">
                                        <span>#{recipient.id}</span>
                                    </td>
                                    <td>
                                        <span>{recipient.name}</span>
                                    </td>
                                    <td>
                                        <span>
                                            {recipient.street},{' '}
                                            {recipient.number}, {recipient.city}{' '}
                                            - {recipient.state}
                                        </span>
                                    </td>
                                    <td className="lastCell">
                                        <div className="options">
                                            <Options data={recipient} />
                                        </div>
                                    </td>
                                </tr>
                                <br />
                            </>
                        );
                    })}
                </tbody>
            </RecipientsTable>
        </Container>
    );
}
