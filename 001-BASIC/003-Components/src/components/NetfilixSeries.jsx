import React from 'react'
import './NetflixSeries.css'
const NetfilixSeries = ({image, title, rating, description}) => {
  return (
    <>
      <div className="container">
        <img src={image} alt="" />
        <h2> {title} </h2>
        <h3>{rating}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default NetfilixSeries
