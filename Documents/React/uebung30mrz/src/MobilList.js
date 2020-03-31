import React from 'react';
import MobileItems from './MobileItems';
import './MobilList.css';

const MobilList = () => {
    return (
        <section>
            <MobileItems mobilURL="./Samsung.jpeg" mobilName="Samsung S10+" mobilPrice="699 EUR" />
            <MobileItems mobilURL="./Iphone11Pro.jpeg" mobilName="Iphone 11 Pro" mobilPrice="979 EUR" />
            <MobileItems mobilURL="./nokia_6_2_front_back_ice10.png" mobilName="Nokia 6.2" mobilPrice="249 EUR" />
        </section>
    );
}

export default MobilList;