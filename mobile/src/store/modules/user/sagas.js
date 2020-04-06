import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { editSuccess, editFailure, addSuccess, addFailure } from './actions';

export function* edit({ payload }) {
    try {
        const { id } = payload;

        const newValues = {
            name: payload.name,
            email: payload.email,
            avatar_id: payload.avatarId,
        };

        yield call(api.put, `deliverymans/${id}`, newValues);

        toast.success('Entregador atualizado com sucesso!');

        yield put(editSuccess());
    } catch (err) {
        toast.error('Erro ao atualizar entregador, confira os dados');
        yield put(editFailure());
    }
}

export function* add({ payload }) {
    try {
        const values = {
            name: payload.name,
            email: payload.email,
            avatar_id: payload.avatarId,
        };

        yield call(api.post, 'deliverymans', values);

        toast.success('Entregador cadastrado com sucesso!');

        yield put(addSuccess());
    } catch (err) {
        toast.error('Erro ao cadastrar o entregador, confira os dados');
        yield put(addFailure());
    }
}

export default all([
    takeLatest('@user/EDIT_REQUEST', edit),
    takeLatest('@user/ADD_REQUEST', add),
]);
