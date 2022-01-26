import React from 'react';

import clear_day from '../../../images/condition/clear_day.png';
import clear_night from '../../../images/condition/clear_night.png';
import cloud from '../../../images/condition/cloud.png';
import cloudly_day from '../../../images/condition/cloudly_day.png';
import cloudly_night from '../../../images/condition/cloudly_night.png';
import fog from '../../../images/condition/fog.png';
import hail from '../../../images/condition/hail.png';
import rain from '../../../images/condition/rain.png';
import snow from '../../../images/condition/snow.png';
import storm from '../../../images/condition/storm.png';


import styles from '../.././../styles/prevItem.module.css';

function selectImage(condition) {
    let img;

    if (condition === 'storm') img = storm;
    if (condition === 'snow') img = snow;
    if (condition === 'hail') img = hail;
    if (condition === 'rain') img = rain;
    if (condition === 'fog') img = fog;
    if (condition === 'clear_day') img = clear_day;
    if (condition === 'clear_night') img = clear_night;
    if (condition === 'cloud') img = cloud;
    if (condition === 'cloudly_day') img = cloudly_day;
    if (condition === 'cloudly_night') img = cloudly_night;
    if (condition === 'none_day') img = clear_day;
    if (condition === 'none_night') img = clear_night;

    return img;
};

function PrevItem({ data }) {

    const { weekday, max, min, condition } = data;

    return (
        <div className={styles.container}>
            <img src={selectImage(condition)} alt={condition} />
            <h5>{weekday.toUpperCase()}</h5>
            <p>{`${min}°/${max}°`}</p>
        </div>
    );
};

export default PrevItem;