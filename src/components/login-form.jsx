import { useState } from 'react';

const sendFormData = (formData) => {
    console.log(formData);
};

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatedPassword: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        sendFormData(formData);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Почта"
                    onChange={({ target }) =>
                        setFormData({ ...formData, email: target.value })
                    }
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Пароль"
                    onChange={({ target }) =>
                        setFormData({ ...formData, password: target.value })
                    }
                />
                <input
                    type="password"
                    name="repeatedPassword"
                    value={formData.repeatedPassword}
                    placeholder="Повторите пароль"
                    onChange={({ target }) =>
                        setFormData({ ...formData, repeatedPassword: target.value })
                    }
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};
