import React from 'react';

export default function House(props) {
  return (
    <div className="House">
        <h1 >House</h1>
          <p>Location Name: {props.name}</p>
          <p>Address: {props.address}</p>
          <p>City: {props.city}</p>
          <p>State: {props.state}</p>
          <p>ZIP Code: {props.zip}</p>
          <p>Image URL: {props.imgURL}</p>
          <p>Mortgage: {props.mortgage}</p>
          <p>Rent: {props.rent}</p>
          <button onClick={()=> props.deleteHouse(props.id)}>Delete</button>
          <hr />
    </div> 
  )
}