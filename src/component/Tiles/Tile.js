import React from 'react';

function Tile({image, title, para1, para2}) {
    return(
        <section className={"section"}>
            {image &&<img className={"section img"} src={image} alt={title}/>}
            <h2>{title}</h2>
            <p className={"section p"}>{para1}</p>
            <p className={"section p"}>{para2}</p>

        </section>
    )
}
export default Tile