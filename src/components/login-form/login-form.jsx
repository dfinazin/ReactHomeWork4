import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsSchema } from './fields-schema';
import styles from './login-form.module.css';

const sendFormData = (formData) => {
    console.log(formData);
};

export const LoginForm = () => {
    const submitButtonRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            repeatedPassword: '',
        },
        resolver: yupResolver(fieldsSchema),
    });

    let formErrors;
    if (errors.email?.message) {
        formErrors = errors.email?.message;
    } else if (errors.password?.message) {
        formErrors = errors.password?.message;
    } else if (errors.repeatedPassword?.message) {
        formErrors = errors.repeatedPassword?.message;
    }

    useEffect(() => {
        if (!formErrors) {
            submitButtonRef.current.focus();
        }
    }, [formErrors]);

    return (
        <>
            <form onSubmit={handleSubmit(sendFormData)}>
                <input
                    type="email"
                    name="email"
                    placeholder="Почта"
                    {...register('email')}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    {...register('password')}
                />
                <input
                    type="password"
                    name="repeatedPassword"
                    placeholder="Повторите пароль"
                    {...register('repeatedPassword')}
                />
                <button type="submit" disabled={!!formErrors} ref={submitButtonRef}>
                    Отправить
                </button>
            </form>
            {formErrors && (
                <div className={styles['error-message']}>{formErrors}</div>
            )}
        </>
    );
};
