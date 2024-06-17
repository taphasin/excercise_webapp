import React from 'react'
function Card({type,title,description,pictureimg}) {

    return (
        <div style={{display:"flex"}}>
            <article >
                <h2>{type}</h2>
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
            <div style={{ float : "right", padding : "5%"}}><img src={pictureimg} alt="" style={{ width : '200px'}} /></div>
        </div>
    );
}

export default Card