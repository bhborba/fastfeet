import React, { useState, useEffect } from 'react';

import ProblemOptions from '~/components/ProblemOptions';

import api from '~/services/api';

import { Container, ProblemsTable } from './styles';

export default function Problems() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadProblems() {
            const response = await api.get('delivery/problems');

            setProblems(response.data);
        }

        loadProblems();
    }, []);

    return (
        <Container>
            <header>
                <h1>Problemas na Entrega</h1>
            </header>

            <ProblemsTable>
                <thead>
                    <tr>
                        <th>Encomenda</th>
                        <th>Problema</th>
                        <th className="lastTh">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map(problem => {
                        return (
                            <>
                                <tr key={problem.id}>
                                    <td className="firstCell">
                                        <span>#{problem.id}</span>
                                    </td>
                                    <td>
                                        <span>{problem.description}</span>
                                    </td>
                                    <td className="lastCell">
                                        <div className="options">
                                            <ProblemOptions />
                                        </div>
                                    </td>
                                </tr>
                                <br />
                            </>
                        );
                    })}
                </tbody>
            </ProblemsTable>
        </Container>
    );
}
