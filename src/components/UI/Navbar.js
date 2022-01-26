import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../styles/header.module.css';

import Form from './Form';

function Navbar() {

    const data = () => {
        let date = new Date().toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        });

        date = date.split(',');

        let semana = date[0].split('-')[0];
        semana = semana[0].toUpperCase() + semana.slice(1);

        let dia = date[1];

        return `${semana} -${dia}`
    };

    return ReactDOM.createPortal(
        <div className={styles.header}>

            <div className={styles.navbar}>
                <h5>Weather App</h5>

                <p>{data()}</p>
            </div>

            <Form />
        </div>,
        document.getElementById('header')
    );
};

export default Navbar;
