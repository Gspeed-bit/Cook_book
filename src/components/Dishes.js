import React from 'react'

export const Dishes = ({list}) => {
  console.log(list);
  return (
    <div>
      {list.map((dishes)=>{
        const {id, title, img, desc,price} =dishes;
        return(
          <article key={id}>
            <img src={img} alt={title} />
            <div>
            <header>
            <h1>{title}</h1>
            <p>{price}</p>
            </header>
            <p>{desc}</p>
            </div>
          </article> 
        )
      })}
    </div>
  )
}
