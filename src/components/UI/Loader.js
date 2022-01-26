import React, { useContext } from 'react';

import styles from '../../styles/loader.module.css';
import { context } from '../react/context';

function Loader() {
    const { loading } = useContext(context);

    return loading && (
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;
