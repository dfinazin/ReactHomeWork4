import { useStore } from '../../hooks/useStore';
import { useFormErrors } from '../../hooks/useFormErrors';
import { useEffect, useRef } from 'react';
import { validateFieldsLimits } from './utilities/validate-fields-limits';
import styles from './login-form.module.css';

const sendFormData = (formData) => {
    console.log(formData);
};

export const LoginForm = () => {
    const { getState, updateState, resetState } = useStore();
    const { getFormErrors, updateFormErrors } = useFormErrors();
    const submitButtonRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        sendFormData(getState());
        resetState();
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
                newError = validateFieldsLimits(target.name, target.value, true);
                break;
            case 'repeatedPassword':
                newError = validateFieldsLimits(target.name, target.value, true);
                break;
            default:
                break;
        }
        updateFormErrors(target.name, newError);
    };

    const onBlur = ({ target }) => {
        let newError = null;
        switch (target.name) {
            case 'email':
                newError = validateFieldsLimits(target.name, target.value, false);
                break;
            case 'password':
                newError = validateFieldsLimits(target.name, target.value, false);
                break;
            case 'repeatedPassword':
                if (getState().password !== getState().repeatedPassword) {
                    newError = 'Пароли не совпадают';
                } else {
                    newError = validateFieldsLimits(target.name, target.value, false);
                }
                break;
            default:
                break;
        }
        updateFormErrors(target.name, newError);
    };

    const isDisabledSubmit = () => {
        return (
            getFormErrors().email ||
            getFormErrors().password ||
            getFormErrors().repeatedPassword ||
            !getState().email ||
            !getState().password ||
            !getState().repeatedPassword ||
            getState().password !== getState().repeatedPassword
        );
    };

    const isFormValid = isDisabledSubmit();

    useEffect(() => {
        if (!isFormValid) {
            submitButtonRef.current.focus();
        }
    }, [isFormValid]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <input
                    type="password"
                    name="repeatedPassword"
                    value={repeatedPassword}
                    placeholder="Повторите пароль"
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <button type="button" onClick={resetState}>
                    Сброс
                </button>
                <button
                    type="submit"
                    disabled={isDisabledSubmit()}
                    ref={submitButtonRef}
                >
                    Отправить
                </button>
            </form>
            {getFormErrors().email && (
                <div className={styles['error-message']}>{getFormErrors().email}</div>
            )}
            {getFormErrors().password && (
                <div className={styles['error-message']}>
                    {getFormErrors().password}
                </div>
            )}
            {getFormErrors().repeatedPassword && (
                <div className={styles['error-message']}>
                    {getFormErrors().repeatedPassword}
                </div>
            )}
        </>
    );
};
