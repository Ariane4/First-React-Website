import React from 'react';
import MobileList from './MobilList'
import './MobileItems.css';

let mobilURL
const MobileItems = (props) => {
    return (
        <article>
            <img src={props.mobilURL}></img>
            <h1>{props.mobilName}</h1>
            <p>{props.mobilPrice}</p>
        </article>
    )
}

export default MobileItems