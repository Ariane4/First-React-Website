// imr - import react
import React from 'react'

//sfc - stateless function component
function Navigation() {
    return (
        <nav>
            <p>Logo</p>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation

//Anass Version
//------------------------------
// import React from 'react';
// import logo from '../yoga-logo.jpg'
// // -> hier 2 Punkte, da Anass einen separaten Ordner für alle Components erstellt hat, d.h. 
// // erst raus aus Components-Ordner
// // -> "Logo" ist eine Variable, JS geschwungene Klammer unten notwendig

// //sfc
// const Navigation = () => {
//     return (
//         <header>
//             <div className="logo">
//                 <img src={logo} alt="" />
//             </div>
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// //Anass CSS Version für Navigation in separater Navigation.css Datei
// //-------------------------------------------------------------------
// header{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid rgba(0,0,0,.4);
//     padding: 0 10%;
// }
// header img{
//     width: 70px;
// }
// header ul{
//     display: flex;
//     list-style: none;
// }
// header li{
//     padding-right: 20px;
// }
