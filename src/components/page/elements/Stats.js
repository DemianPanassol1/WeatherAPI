import React, { useContext } from 'react';
import { context } from '../../react/context';

import styles from '../../../styles/stats.module.css';

import wind from '../../../images/stats/wind.png';
import sun_rise from '../../../images/stats/sun_rise.png';
import sun_set from '../../../images/stats/sun_set.png';
import humidity from '../../../images/stats/humidity.png';

function DetalhesClima() {

    const { data } = useContext(context);
    
    return data !== null && (
        <div className={styles.container}>
            <span className={styles.line}></span>
            <div className={styles.stats}>
                <div className={styles.statsColum}>
                    <div className={styles.statsItem}>
                        <img src={wind} alt="Velocidade do vento" />
                        <div>
                            <p>Vento</p>
                            <small>{data.wind_speedy}</small>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <img src={sun_rise} alt="Horário do nascer do sol" />
                        <div>
                            <p>Nascer do sol</p>
                            <small>{data.sunrise.toUpperCase()}</small>
                        </div>
                    </div>
                </div>

                <div className={styles.statsColum}>
                    <div className={styles.statsItem}>
                        <img src={humidity} alt="Humidade da atmosfera" />
                        <div>
                            <p>Humidade</p>
                            <small>{data.humidity} %</small>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <img src={sun_set} alt="Horário do pôr do sol" />
                        <div>
                            <p>Pôr do Sol</p>
                            <small>{data.sunset.toUpperCase()}</small>
                        </div>
                    </div>
                </div>
            </div>
            <span className={styles.line}></span>
        </div>
    );
};

export default DetalhesClima;
