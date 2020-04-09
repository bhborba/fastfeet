import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Deliveries from './pages/Deliveries';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Details from './pages/Deliveries/Details';
import ReportProblem from './pages/Deliveries/ReportProblem';
import ListProblems from './pages/Deliveries/ListProblems';
import ConfirmDelivery from './pages/Deliveries/ConfirmDelivery';
import Camera from './pages/Camera';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator(
                    {
                        Deliveries,
                        Notifications,
                        Profile,
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#7D40E7',
                            inactiveTintColor: '#999999',
                            background: '#FFFFFF',
                        },
                    }
                ),
                Stack: createStackNavigator(
                    {
                        Details,
                        ReportProblem,
                        ListProblems,
                        ConfirmDelivery,
                        Camera,
                    },
                    {
                        defaultNavigationOptions: {
                            headerTransparent: true,
                            headerTintColor: '#FFF',
                            headerLeftContainerStyle: {
                                marginLeft: 20,
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );
