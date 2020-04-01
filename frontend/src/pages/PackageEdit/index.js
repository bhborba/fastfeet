import React from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';

import { Container, PackageDetails } from './styles';

export default function PackageEdit() {
    function handleSubmit(data) {}

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <Container>
            <header>
                <h1>Edição de encomendas</h1>
                <div>
                    <button className="back" type="button">
                        <MdKeyboardArrowLeft color="#FFFFFF" size={20} />
                        VOLTAR
                    </button>
                    <button className="save" type="button">
                        <MdCheck color="#FFFFFF" size={20} />
                        SALVAR
                    </button>
                </div>
            </header>

            <PackageDetails>
                <Form onSubmit={handleSubmit}>
                    <div className="selectForm">
                        <div>
                            <p>Destinatário</p>
                            <Select className="select" options={options} />
                        </div>
                        <div>
                            <p>Entregador</p>
                            <Select className="select" options={options} />
                        </div>
                    </div>
                    <p>Nome do Produto</p>
                    <Input name="product" value="Produto" />
                </Form>
            </PackageDetails>
        </Container>
    );
}
