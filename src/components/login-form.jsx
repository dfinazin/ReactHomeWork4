import { useState } from 'react';

const sendFormData = (formData) => {
    console.log(formData);
};

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        sendFormData({ email, password, repeatedPassword });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={({ target }) => setEmail(target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <input
                    type="password"
                    name="repeatedPassword"
                    value={repeatedPassword}
                    placeholder="Повторите пароль"
                    onChange={({ target }) => setRepeatedPassword(target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};
