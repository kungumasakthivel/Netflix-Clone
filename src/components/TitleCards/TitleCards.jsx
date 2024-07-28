import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'




const TitleCards = ({title, category}) => {

  const cardsRef = useRef();

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    })
  }, [])

  return (
    <div style={{marginTop:'30px'}} className='titlecards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            {/* <p>{card.name}</p> */}
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
