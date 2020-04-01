import React, { useState } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';

import {
    Container,
    Badge,
    Container2,
    OptionList,
    Option,
    Modal,
} from './styles';

export default function DeliveryOptions(pack) {
    const [visible, setVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleView() {
        setModalOpen(!modalOpen);
    }

    function convertDate(date) {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatedDate = format(
            utcToZonedTime(date, timezone),
            'dd/MM/yyyy'
        );

        return formatedDate;
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
                                <div className="infos">
                                    <p className="header">
                                        Informação da encomenda
                                    </p>
                                    <p>
                                        {pack.data.recipient.street},{' '}
                                        {pack.data.recipient.number}
                                    </p>
                                    <p>
                                        {pack.data.recipient.city} -{' '}
                                        {pack.data.recipient.state}
                                    </p>
                                    <p>{pack.data.recipient.zip}</p>
                                </div>
                                <div className="infos">
                                    <p className="header">Datas</p>
                                    <div>
                                        <p className="dateInfo">Retirada: </p>
                                        <p>
                                            {pack.data.start_date
                                                ? convertDate(
                                                      pack.data.start_date
                                                  )
                                                : 'Encomenda não retirada'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="dateInfo">Entrega: </p>
                                        <p>
                                            {pack.data.end_date
                                                ? convertDate(
                                                      pack.data.end_date
                                                  )
                                                : 'Encomenda não entregue'}
                                        </p>
                                    </div>
                                </div>
                                <div className="infos">
                                    <p className="header">
                                        Assinatura do destinatário
                                    </p>
                                    <div className="signature">
                                        {pack.data.signature ? (
                                            <img
                                                src={pack.data.signature.url}
                                                alt="Assinatura"
                                            />
                                        ) : (
                                            <p>
                                                Não há assinatura para essa
                                                encomenda
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Modal>
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
