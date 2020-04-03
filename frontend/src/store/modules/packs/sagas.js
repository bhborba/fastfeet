import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { editSuccess, editFailure, addSuccess, addFailure } from './actions';

export function* edit({ payload }) {
    try {
        const { id, product, deliveryman, recipient } = payload.data;

        const newValues = {
            product,
            deliveryman_id: deliveryman,
            recipient_id: recipient,
        };

        yield call(api.put, `packages/${id}`, newValues);

        toast.success('Encomenda atualizada com sucesso!');

        yield put(editSuccess());
    } catch (err) {
        toast.error('Erro ao atualizar encomenda, confira os dados');
        yield put(editFailure());
    }
}

export function* add({ payload }) {
    try {
        const values = {
            product: payload.product,
            deliveryman_id: payload.deliveryman,
            recipient_id: payload.recipient,
        };

        yield call(api.post, 'packages', values);

        toast.success('Encomenda cadastrada com sucesso!');

        yield put(addSuccess());
    } catch (err) {
        toast.error('Erro ao cadastrar encomenda, confira os dados');
        yield put(addFailure());
    }
}

export default all([
    takeLatest('@package/EDIT_REQUEST', edit),
    takeLatest('@package/ADD_REQUEST', add),
]);
