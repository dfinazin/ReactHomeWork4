import { fieldsLimits } from '../fields-limit';
export const validateFieldsLimits = (fieldName, fieldValue, isOnChange) => {
    let errorMessage = '';
    for (let limitChars of fieldsLimits[fieldName]['chars']) {
        if (!errorMessage && isOnChange === limitChars.isOnChange) {
            if (limitChars.regExp.test(fieldValue)) {
                errorMessage = limitChars.errorMessage;
            }
        }
    }
    let limitChars = fieldsLimits[fieldName]['length'];
    if (!errorMessage) {
        if (
            fieldValue.length > limitChars.max.value &&
            isOnChange === limitChars.max.isOnChange
        ) {
            errorMessage = limitChars.max.errorMessage;
        } else if (
            fieldValue.length < limitChars.min.value &&
            isOnChange === limitChars.min.isOnChange
        ) {
            errorMessage = limitChars.min.errorMessage;
        }
    }
    return errorMessage;
};
