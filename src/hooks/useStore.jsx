import { useState } from 'react';

const initialState = {
    email: '',
    password: '',
    repeatedPassword: '',
};

export const useStore = () => {
    const [state, setState] = useState(initialState);

    return {
        getState: () => state,
        updateState: (fieldName, newValue) => {
            setState({ ...state, [fieldName]: newValue });
        },
        resetState: () => {
            setState(initialState);
        },
    };
};
