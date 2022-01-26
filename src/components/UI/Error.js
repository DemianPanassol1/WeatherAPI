import React, { useContext } from 'react';
import { context } from '../react/context';

import styles from '../../styles/error.module.css';

function Error() {
    const { error } = useContext(context);

    return error !== null && (
        <div className={styles.container}>
            <p>{error}</p>
        </div>
    );
};

export default Error;
