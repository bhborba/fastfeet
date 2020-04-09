import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Packages from '../pages/Packages';
import PackageEdit from '../pages/Packages/Edit';
import PackageAdd from '../pages/Packages/Add';
import Deliverymans from '../pages/Deliverymans';
import DeliverymanAdd from '../pages/Deliverymans/Add';
import DeliverymanEdit from '../pages/Deliverymans/Edit';
import Recipients from '../pages/Recipients';
import RecipientsAdd from '../pages/Recipients/Add';
import RecipientsEdit from '../pages/Recipients/Edit';
import Problems from '../pages/Problems';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/packages" exact component={Packages} isPrivate />
            <Route path="/packages/edit" component={PackageEdit} isPrivate />
            <Route path="/packages/add" component={PackageAdd} isPrivate />
            <Route
                path="/deliverymans"
                exact
                component={Deliverymans}
                isPrivate
            />
            <Route
                path="/deliverymans/add"
                component={DeliverymanAdd}
                isPrivate
            />
            <Route
                path="/deliverymans/edit"
                component={DeliverymanEdit}
                isPrivate
            />
            <Route path="/recipients" exact component={Recipients} isPrivate />
            <Route path="/recipients/add" component={RecipientsAdd} isPrivate />
            <Route
                path="/recipients/edit"
                component={RecipientsEdit}
                isPrivate
            />
            <Route path="/problems" component={Problems} isPrivate />
        </Switch>
    );
}
