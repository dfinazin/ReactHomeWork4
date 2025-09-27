import { useStore } from '../../hooks/useStore';
import { useFormErrors } from '../../hooks/useFormErrors';
import { validateFieldsLimits } from './utilities/validate-fields-limits';
import styles from './login-form.module.css';

const sendFormData = (formData) => {
    console.log(formData);
};

export const LoginForm = () => {
    const { getState, updateState, resetState } = useStore();
    const { getFormErrors, updateFormErrors } = useFormErrors();

    const onSubmit = (event) => {
        event.preventDefault();
        sendFormData(getState());
    };

    const { email, password, repeatedPassword } = getState();

    const onChange = ({ target }) => {
        updateState(target.name, target.value);

        let newError = null;

        switch (target.name) {
            case 'email':
                newError = validateFieldsLimits(target.name, target.value, true);
                break;
            case 'password':
                break;
            default:
                break;
        }
        updateFormErrors(target.name, newError);
    };
    /*    console.log(
        getFormErrors().email,
        getFormErrors().password,
        getFormErrors().repeatedPassword,
    );*/
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
                <button type="button" onClick={resetState}>
                    Сброс
                </button>
                <button type="submit" disabled={getFormErrors().email}>
                    Отправить
                </button>
            </form>
            {getFormErrors().email && (
                <div className={styles['error-message']}>{getFormErrors().email}</div>
            )}
        </>
    );
};
