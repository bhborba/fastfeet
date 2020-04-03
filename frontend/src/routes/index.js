import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import PackageEdit from '../pages/PackageEdit';
import PackageAdd from '../pages/PackageAdd';
import Deliverymans from '../pages/Deliverymans';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';
import Profile from '../pages/Profile';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/register" component={SignUp} isPrivate />
            <Route path="/dashboard" exact component={Dashboard} isPrivate />
            <Route path="/packages/edit" component={PackageEdit} isPrivate />
            <Route path="/packages/add" component={PackageAdd} isPrivate />
            <Route path="/deliverymans" component={Deliverymans} isPrivate />
            <Route path="/recipients" component={Recipients} isPrivate />
            <Route path="/problems" component={Problems} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    );
}
