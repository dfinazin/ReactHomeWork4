import { useState } from 'react';
import { LoginForm } from './components/login-form';
import './App.css';

export const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <LoginForm></LoginForm>
        </>
    );
};
