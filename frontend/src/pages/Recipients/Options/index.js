import React, { useState } from 'react';

import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { Container, Badge, Container2, OptionList, Option } from './styles';

export default function Options(recipients) {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleEdit() {
        history.push({
            pathname: '/recipients/edit',
            state: recipients.data,
        });
    }

    async function handleDelete(id) {
        if (
            window.confirm('Tem certeza que deseja deletar esse destinatátio?')
        ) {
            try {
                await api.delete(`recipientss/${id}`);
            } catch (err) {
                alert('Erro ao deletar destinatátio, tente novamente.');
            }
            history.go(0);
        }
    }

    return (
        <Container>
            <Badge className="badge" onClick={handleToggleVisible}>
                <MdMoreHoriz color="#c6c6c6" size={20} />
            </Badge>

            <Container2>
                <OptionList visible={visible}>
                    <Option>
                        <MdEdit className="icon" color="#4D85EE" />
                        <button type="button" onClick={handleEdit}>
                            Editar
                        </button>
                    </Option>
                    <Option>
                        <MdDeleteForever className="icon" color="#DE3B3B" />
                        <button
                            onClick={() => handleDelete(recipients.data.id)}
                            type="button"
                        >
                            Excluir
                        </button>
                    </Option>
                </OptionList>
            </Container2>
        </Container>
    );
}
