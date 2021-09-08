import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import InfoCardProvider from './contexts/InfoCard';
import AuthProvider from './contexts/AuthContext';
import { store } from './state';

import './styles/index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'boxicons/css/boxicons.min.css';
import GlobalStyle from './styles/global';

const App = () => (
    <Provider store={store}>
        <AuthProvider>
            <InfoCardProvider>
                <Router>
                    <Routes />
                    <ToastContainer />
                    <GlobalStyle />
                </Router>
            </InfoCardProvider>
        </AuthProvider>
    </Provider>
);

export default App;
