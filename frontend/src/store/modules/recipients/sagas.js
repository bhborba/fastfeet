import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { editSuccess, editFailure, addSuccess, addFailure } from './actions';

export function* edit({ payload }) {
    try {
        const { id, ...rest } = payload.data;

        const newValues = {
            ...rest,
        };

        yield call(api.put, `recipient/${id}`, newValues);

        toast.success('Destinatário atualizado com sucesso!');

        yield put(editSuccess());
    } catch (err) {
        toast.error('Erro ao atualizar destinatário, confira os dados');
        yield put(editFailure());
    }
}

export function* add({ payload }) {
    try {
        const { ...rest } = payload.data;

        const recipientData = { ...rest };

        yield call(api.post, 'recipient', recipientData);

        toast.success('Destinatário cadastrado com sucesso!');

        yield put(addSuccess());
    } catch (err) {
        toast.error('Erro ao cadastrar destinatário, confira os dados');
        yield put(addFailure());
    }
}

export default all([
    takeLatest('@recipient/EDIT_REQUEST', edit),
    takeLatest('@recipient/ADD_REQUEST', add),
]);
