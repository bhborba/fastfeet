import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { editSuccess, editFailure } from './actions';

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

export default all([takeLatest('@package/EDIT_REQUEST', edit)]);
