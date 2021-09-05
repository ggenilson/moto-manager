import Api from '../../services/api';

interface UserProps {
    email: string;
    password: string;
}

const handleLogin = async (data: UserProps) => {
    const res = await Api.post('/user/login', data);

    return res;
};

export default handleLogin;
