import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';

import styles from '../../styles/form.module.css';
import { context, dispatchContext } from '../react/context';

function Form() {
    const pesquisaNome = useContext(dispatchContext);
    const { data, city } = useContext(context);

    const [disabled, setDisabled] = useState(true);
    const [inputInfo, setInputInfo] = useState('');

    const input = useRef('');

    useEffect(() => {

        if (data === null) {
            pesquisaNome(city);
        };

        if (data !== null) {
            setInputInfo(data.city)
        };

        if (!disabled) {
            input.current.focus();
        };

        //eslint-disable-next-line
    }, [data, disabled]);

    const setOnSubmit = (e) => {
        e.preventDefault();
        setDisabled(!disabled);

        if (input.current.value !== '') {
            pesquisaNome(input.current.value);
        };
    };

    const setCancelChanges = () => {
        if (data !== null) {
            setInputInfo(data.city);
            setDisabled(!disabled);
        };
    };

    return data !== null && (
        <form className={styles.container} onSubmit={setOnSubmit}>
            <input
                type="text"
                ref={input}
                value={inputInfo}
                onChange={(e) => setInputInfo(e.target.value)}
                disabled={disabled}
            />

            {disabled ? (
                <i
                    className="far fa-edit"
                    onClick={() => setDisabled(!disabled)}
                />
            ) : (
                <Fragment>
                    <i onClick={setOnSubmit} className={`fas fa-check ${styles.conf}`}></i>
                    <i onClick={setCancelChanges} className={`fas fa-times ${styles.cancel}`}></i>
                </Fragment>
            )}

        </form>
    );
};


export default Form;
