import { RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = {
    isAuthenticated?: boolean;
} & RouteProps;
