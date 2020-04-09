import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import {signInSuccess, signFailure} from './actions';

import api from '~/services/api';

export function* signIn({payload}) {
    try {
        const {id} = payload;

        const response = yield call(api.post, `deliveryman/${id}`);

        yield put(signInSuccess(response.data));
    } catch (err) {
        Alert.alert('Erro no login', 'Verifique seu ID ');
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
