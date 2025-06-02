import { useStore } from '../hooks/useStore';

const sendFormData = (formData) => {
    console.log(formData);
};

export const LoginForm = () => {
    const { getState, updateState } = useStore();

    const onSubmit = (event) => {
        event.preventDefault();
        sendFormData(getState());
    };

    const { email, password, repeatedPassword } = getState();

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={({ target }) => updateState('email', target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={({ target }) => updateState('password', target.value)}
                />
                <input
                    type="password"
                    name="repeatedPassword"
                    value={repeatedPassword}
                    placeholder="Повторите пароль"
                    onChange={({ target }) =>
                        updateState('repeatedPassword', target.value)
                    }
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};
