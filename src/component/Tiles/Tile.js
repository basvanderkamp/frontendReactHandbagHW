import React from 'react';

function Tile({image, title, children}) {
    return(
        <section className={"section"}>
            {image &&<img className={"section img"} src={image} alt={title}/>}
            <h2>{title}</h2>
            {children}
        </section>
    )
}
export default Tile