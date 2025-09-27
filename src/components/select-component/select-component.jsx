import styles from './select-component.module.css';
import Select from 'react-select';

const productOptions = [
    { value: 'tv', label: 'Телевизор' },
    { value: 'smartphone', label: 'Смартфон' },
    { value: 'laptop', label: 'Ноутбук' },
];

const colorOptions = [
    { value: 'black', label: 'Черный' },
    { value: 'silver', label: 'Серебристый' },
    { value: 'white', label: 'Белый' },
];

export const SelectComponent = () => {
    return (
        <div className={styles.selcomp}>
            <Select options={productOptions} defaultValue={productOptions[0]} />
            <Select
                isMulti="true"
                options={colorOptions}
                defaultValue={[colorOptions[0], colorOptions[1]]}
            />
        </div>
    );
};
