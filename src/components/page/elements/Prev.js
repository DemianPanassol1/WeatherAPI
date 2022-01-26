import React, { useContext } from 'react';
import { context } from '../../react/context';

import styles from '../../../styles/prev.module.css';

import PrevItem from './PrevItem';

function PrevisaoProxDias() {

    const { data } = useContext(context);

    return  data !== null && (
        <div className={styles.container}>
            <h2>Previsão para próximos dias</h2>

            <div className={styles.containerItem}>
                {data.forecast.map(item => {
                    return <PrevItem key={item.date} data={item} />
                })}
            </div>
        </div>
    );
};

export default PrevisaoProxDias;
