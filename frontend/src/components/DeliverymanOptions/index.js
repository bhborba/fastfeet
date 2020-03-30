import React, { useState } from 'react';

import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionList, Option } from './styles';

export default function DeliverymanOptions() {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Badge className="badge" onClick={handleToggleVisible}>
                <MdMoreHoriz color="#c6c6c6" size={20} />
            </Badge>

            <OptionList visible={visible}>
                <Option>
                    <MdEdit className="icon" color="#4D85EE" />
                    <button type="button">Editar</button>
                </Option>
                <Option>
                    <MdDeleteForever className="icon" color="#DE3B3B" />
                    <button type="button">Excluir</button>
                </Option>
            </OptionList>
        </Container>
    );
}
