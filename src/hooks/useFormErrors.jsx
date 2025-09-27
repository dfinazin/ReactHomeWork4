import { useState } from 'react';

const initialFormErrors = {
    email: '',
    password: '',
    repeatedPassword: '',
};

export const useFormErrors = () => {
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    return {
        getFormErrors: () => formErrors,
        updateFormErrors: (fieldName, fieldError) => {
            setFormErrors({ ...formErrors, [fieldName]: fieldError });
        },
    };
};
