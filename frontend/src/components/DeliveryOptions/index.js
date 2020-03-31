import React, { useState } from 'react';

import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';

import { Container, Badge, Container2, OptionList, Option } from './styles';

export default function DeliveryOptions() {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
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
                        <button type="button">Visualizar</button>
                    </Option>
                    <Option>
                        <MdEdit className="icon" color="#4D85EE" />
                        <button type="button">Editar</button>
                    </Option>
                    <Option>
                        <MdDeleteForever className="icon" color="#DE3B3B" />
                        <button type="button">Excluir</button>
                    </Option>
                </OptionList>
            </Container2>
        </Container>
    );
}
