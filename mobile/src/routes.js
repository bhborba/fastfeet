import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Deliveries from './pages/Deliveries';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator({
                    Deliveries,
                }),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );
