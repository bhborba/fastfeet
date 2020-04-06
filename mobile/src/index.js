import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import Routes from './routes';

import './config/ReactotronConfig';
import {store, persistor} from './store';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
                <Routes />
            </PersistGate>
        </Provider>
    );
}
