import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import AuthProvider from './contexts/AuthContext';

import 'boxicons/css/boxicons.min.css';
import GlobalStyle from './styles/global';

const App = () => (
    <AuthProvider>
        <Router history={history}>
            <Routes />
            <GlobalStyle />
        </Router>
    </AuthProvider>
);

export default App;
