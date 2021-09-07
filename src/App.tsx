import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import AuthProvider from './contexts/AuthContext';

import './styles/index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'boxicons/css/boxicons.min.css';
import GlobalStyle from './styles/global';

const App = () => (
    <AuthProvider>
        <Router>
            <Routes />
            <ToastContainer />
            <GlobalStyle />
        </Router>
    </AuthProvider>
);

export default App;
