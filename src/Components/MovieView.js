import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';


export default class MovieView extends Component {
    render() {
        //console.log(this.props.popularMovies);

        const {backdrop_path,original_title,overview,release_date,vote_average} =this.props.popularMovies;

        return (
            <Card >
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`}  alt={original_title}/>
               
                <Typography >
                
                
                <h1>{original_title}</h1>
                <span >
                <span >Overview:</span>
                <p>{overview}</p>
                </span>
                
                <p>Release Date : {release_date}</p>
                <p>ImDb Rating: <span >{vote_average}</span> </p>
                

                </Typography>
                
            </Card>
        )
    }
}
