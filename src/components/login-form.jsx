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

    const onChange = ({ target }) => {
        updateState(target.name, target.value);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="repeatedPassword"
                    value={repeatedPassword}
                    placeholder="Повторите пароль"
                    onChange={onChange}
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};
