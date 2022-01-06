import React from 'react';
import './Person.css';

const Person= ({image,name,years}) =>{
 return(
  <div className='person'>
    <img src={image} alt={name} />

    <div className='personDescription'>

    <h4>{name}</h4>

    <p>{years} years</p>

    </div>

  </div>
 );
}

export default Person;