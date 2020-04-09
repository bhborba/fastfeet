import React, { useState } from 'react';

import { MdMoreHoriz, MdDeleteForever } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';

import api from '~/services/api';

import history from '~/services/history';
import {
    Container,
    Badge,
    OptionList,
    Option,
    Container2,
    Modal,
} from './styles';

export default function Options(problem) {
    const [visible, setVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleView() {
        setModalOpen(!modalOpen);
    }

    async function handleCancel(id) {
        if (window.confirm('Tem certeza que deseja cancelar essa encomenda?')) {
            try {
                await api.delete(`delivery/${id}/cancel-delivery`);
            } catch (err) {
                alert('Erro ao cancelar, tente novamente.');
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
                        <IoMdEye className="icon" color="#8E5BE8" />
                        <button onClick={handleView} type="button">
                            Visualizar
                        </button>
                        <Modal visible={modalOpen}>
                            <div
                                role="button"
                                tabIndex={-1}
                                aria-label="background"
                                className="background"
                                onClick={handleView}
                                onKeyDown
                            />
                            <div className="content">
                                <p className="header">VISUALIZAR PROBLEMA</p>

                                <p>{problem.data.description}</p>
                            </div>
                        </Modal>
                    </Option>
                    <Option>
                        <MdDeleteForever className="icon" color="#DE3B3B" />
                        <button
                            onClick={() => handleCancel(problem.data.id)}
                            type="button"
                        >
                            Cancelar encomenda
                        </button>
                    </Option>
                </OptionList>
            </Container2>
        </Container>
    );
}
