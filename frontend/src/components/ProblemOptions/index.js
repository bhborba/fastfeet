import React, { useState } from 'react';

import { MdMoreHoriz, MdDeleteForever } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';

import { Container, Badge, OptionList, Option } from './styles';

export default function ProblemOptions() {
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
                    <IoMdEye className="icon" color="#8E5BE8" />
                    <button type="button">Visualizar</button>
                </Option>
                <Option>
                    <MdDeleteForever className="icon" color="#DE3B3B" />
                    <button type="button">Cancelar encomenda</button>
                </Option>
            </OptionList>
        </Container>
    );
}
