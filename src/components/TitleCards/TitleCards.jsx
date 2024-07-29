import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';




// eslint-disable-next-line react/prop-types
const TitleCards = ({title, category}) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2I5MTQ0NzkxY2VhZjZjZDQ4NDg1ODNjOTNhMTI0MSIsIm5iZiI6MTcyMjE3Mjc4NC45Nzg3Niwic3ViIjoiNjZhNjQ0NDE4M2U4NTU3YzBmNDBiYTU3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DO56RggNUPiAaon8kbr0YgPjm_4HD7klclvDX0thWO4'
  }
};

 

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    })
  }, [])

  return (
    <div style={{marginTop:'30px'}} className='titlecards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
