import React, { useState } from 'react';

import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { Container, Badge, Container2, OptionList, Option } from './styles';

export default function Options(deliveryman) {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleEdit() {
        const { id, name, product, email, avatar } = deliveryman.data;
        history.push({
            pathname: '/deliverymans/edit',
            state: { id, name, product, email, avatar },
        });
    }

    async function handleDelete(id) {
        if (window.confirm('Tem certeza que deseja deletar esse entregador?')) {
            try {
                await api.delete(`deliverymans/${id}`);
            } catch (err) {
                alert('Erro ao deletar entregador, tente novamente.');
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
                            onClick={() => handleDelete(deliveryman.data.id)}
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
