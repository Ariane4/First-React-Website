import React from 'react';

function SectionTwoColumns() {
    return (
        <section className="SectionTwoColumns">
            <div className="textLinks">
                <h2>SPAZIEREN IN DER NATUR HILFT</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                <a href="">Click here</a>
            </div>
            <img className="Pic_rechts" src="./Picsum_pic.jpg"></img>
            {/* diese Bildeinbindung funktioniert nur, wenn Bild in public Ordner liegt */}
        </section>
    )
}

export default SectionTwoColumns


// Anass Version
//------------------------------------------------
// import React from 'react';
// import picture from '../yoga1.jpeg'
// import './sectiontwocolumn.css'
// const SectionTwoColumn = () => {
//     return (
//         <section className="two">
//             <div>
//                 <h1>Lorem ipsum dolor sit.</h1>
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa odio eius placeat quis dolor voluptatem molestiae molestias exercitationem iste voluptates?</p>
//                 <button>Click</button>
//             </div>
//             <div>
//                 <img src={picture} alt="" />
//             </div>
//         </section>
//     );
// }

// export default SectionTwoColumn;

// Anass Version CSS
//------------------------------------------------
// .two{
//     display: flex;
// }
// .two img{
//     width: 100%;
// }
// .two div{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     padding:2%;
// }