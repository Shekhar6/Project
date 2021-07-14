import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './Card.css';


export default class Cardi extends Component {
    render() {
        const {poster_path,title} =this.props.movie;
       
        return (
            <Card  className="Card">
                <img className="img" src={`https://image.tmdb.org/t/p/w500`+poster_path} alt={title} />
            </Card>
        )
    }
}
