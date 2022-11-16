import React from 'react';

function Article({info, image, title, price}) {
    return (
        <article className={"article"}>
            <span className={"article span"}>{info}</span>
            <img src={image} alt={title}/>
            <p className={"article p"}>{title}</p>
            <h4>{price}</h4>
        </article>

    )
}
export default Article