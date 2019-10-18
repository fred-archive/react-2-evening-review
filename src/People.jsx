import React from 'react'
import './App.css'

export default function People(props) {
    return (
        <div className='people-card'>
            <img src={`https://robohash.org/${props.data.name}`} alt=""/>
            <h2>Name: {props.data.name} Gender: {props.data.gender}</h2>
            <h2>"{props.data.catchphrase}"</h2>
            <h3>From: {props.data.city}, {props.data.country}</h3>
            <h4>Favorite Movie: {props.data.favorite_movie}</h4>
            <h4>{props.data.movie_genre}</h4>
        </div>
    )
}