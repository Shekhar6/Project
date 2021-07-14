import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';
import './Home.css';

export default class TvShows extends Component {
    componentDidMount(){
        this.props.getTvShows()
    }
    render() {
        const rend = this.props.tv.map( t => {
            return<NavLink to={`/${t.name}`}> <Card movie={t} key={t.id} /> </NavLink> 
          })
        return (
            <div className="home">
              
                {rend}
            
            </div>
        )
    }
}
