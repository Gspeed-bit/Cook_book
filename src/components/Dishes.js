import React from 'react'

export const Dishes = ({list}) => {
  return (
    <div className="wrapper">
      {list.map((dishes)=>{
        const {id, title, img, desc,price} =dishes;
        return(
          <article key={id} className="menu-items">
            <img className="image" src={img} alt={title} />
            <div className="details">
            <header>
            <h4>{title}</h4>
            <h4 style={{color:"#e83af8"}}> €{price}</h4>
            </header>
            <p className="text">{desc}</p>
            </div>
          </article> 
        )
      })}
    </div>
  )
}
