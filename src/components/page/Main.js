import React, { useContext } from 'react';

import styles from '../../styles/main.module.css';

import SecaoTemperatura from './elements/Temp';
import DetalhesClima from './elements/Stats';
import PrevisaoProxDias from './elements/Prev';
import Error from '../UI/Error';
import { context } from '../react/context';

function Main() {
    const { data } = useContext(context);

    return (
        <section className={styles.mainContainer}>
            <Error />

            <SecaoTemperatura />

            <div className={styles.containerInfo}>
                <DetalhesClima />
                {data !== null && (<span className={styles.bar}></span>)}
                <PrevisaoProxDias />
            </div>

        </section>
    );
};

export default Main;
