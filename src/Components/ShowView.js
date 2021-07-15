import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import './MovieView.css';
import axios from 'axios';

export default class ShowView extends Component {

    constructor(props){
        super(props);

        this.state ={
            video: [{name:'name'}]
        }
    }

   async componentDidMount(){
        this.props.value();
        const {id} =this.props.popularMovies;
        const{ data }= await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=3aae812026f46e299a173c37b8baf674&language=en-US`)

        console.log(data.results);
        this.setState({
            video:[...data.results]
        })

    }
    render() {
        

        const {backdrop_path,name,title,overview,release_date,vote_average} =this.props.popularMovies;          

        return (
            <Card className="view">
                
             {this.state.video.length === 0 ? <img width="100%" src={`https://image.tmdb.org/t/p/original${backdrop_path}`}  alt={title}/> :
                <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${this.state.video[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

             }
               <Typography >
                {name != null ? <h1>{name}</h1> : <h1>{title}</h1> }
               
                <span>
                Overview:
                <p>{overview}</p>
                </span>
                
                <p>Release Date : {release_date}</p>
                <p>ImDb Rating: {vote_average}</p> 
                
                </Typography> 
                
            </Card>
        )
    }
    
}
