import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import {signInSuccess, signFailure} from './actions';

// import history from '~/services/history';
import api from '~/services/api';

export function* signIn({payload}) {
    try {
        const {id} = payload;

        const response = yield call(api.post, `deliveryman/${id}`);

        yield put(signInSuccess(response.data));

        // history.push('/dashboard');
    } catch (err) {
        Alert.alert('Erro no login', 'Verifique seu ID ');
        yield put(signFailure());
    }
}

export function setToken({payload}) {
    if (!payload) return;

    const {token} = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
