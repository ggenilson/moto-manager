import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import SignIn from '../pages/signIn';
import Dashboard from '../pages/dashboard';

import { isEmpty } from '../pages/dashboard/utils';

const Routes: FC = () => {
    const data = JSON.parse(localStorage.getItem('info') || '{}');

    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <ProtectedRoute
                isAuthenticated={!isEmpty(data)}
                path="/dashboard"
                exact
                component={Dashboard}
            />
        </Switch>
    );
};

export default Routes;
