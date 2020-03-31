import React from 'react';

function Hero() {
    return (
        <section className="Section1">
            <img className="container" src="./Hero_pic.jpeg"></img>
            <div className="textCentered">
                <h1>CORONA HIN ODER HER...</h1>
                <p>Reisen wird auch irgendwann wieder möglich sein</p>
                <a href=""></a>
            </div>
        </section>
    )
}

export default Hero


// Anass Version
//-----------------------------------------
//imrc -> nur als Beispiel, gibt hier keinen Grund, um imrc zu nutzen
// import React, { Component } from 'react';
// import './hero.css'

// //cc
// class Hero extends Component {
//     state = {}
//     render() {
//         return (
//             <section className="hero">
//                 <div>
//                     <h1>Good Vibes Only</h1>
//                     <a href="#">Subscribe</a>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Hero;

// // Anass Version CSS
// //-----------------------------------------
// .hero{
//     height: 90vh;
//     background: url(../yoga2.jpeg) center/cover no-repeat;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     color:#fff;
//     font-size: 3em;
// }
// .hero h1{
//     margin: 0;
// }