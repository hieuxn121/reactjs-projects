import React from 'react'

const MenuItem = ({menu}) => {
    return (
        <>
        {menu.map((item,key) => (
            <article className = "menu-item" key = {item.id}>
                <img className = "img-menu" src = {item.img}/>
                <div className = "menu-info">
                    <header>
                        <h4>{item.title}</h4>
                        <h4>${item.price}</h4>
                    </header>
                    <p className = "item-text">{item.desc}</p>
                </div>
            </article>
        ))}
        </>

    )
}

export default MenuItem
