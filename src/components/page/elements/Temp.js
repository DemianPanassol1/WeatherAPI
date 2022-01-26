import React, { useContext } from 'react';

import styles from '../../../styles/temp.module.css';
import { context } from '../../react/context';

function SecaoTemperatura() {
    const { data } = useContext(context);

    return data !== null && (
        <div className={styles.container}>

            <div className={styles.info}>
                <div>
                    <div className={styles.data}>
                        <h1>{data.temp}</h1>
                        <h3>°</h3>
                    </div>
                    <h4>C</h4>
                </div>

                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default SecaoTemperatura;
