import React, { useState } from 'react';

import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';

import { Container, Badge, OptionList, Option } from './styles';

export default function DeliveryOptions() {
    const [visible, setVisible] = useState(true);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible}>
                <MdMoreHoriz color="#c6c6c6" size={20} />
            </Badge>

            <OptionList>
                <Option>
                    <IoMdEye color="#8E5BE8" />
                    <button type="button">Visualizar</button>
                </Option>
                <Option>
                    <MdEdit color="#4D85EE" />
                    <button type="button">Editar</button>
                </Option>
                <Option>
                    <MdDeleteForever color="#DE3B3B" />
                    <button type="button">Excluir</button>
                </Option>
            </OptionList>
        </Container>
    );
}
