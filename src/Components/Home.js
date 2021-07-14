import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
import './Home.css';

export default class Home extends Component {
    render() {        
        const rend = this.props.movies.map( t => {
            return<NavLink exact to={`/${t.title}`}><Card movie={t} key={t.title}/></NavLink> 
          })
        return (
            <div className="home">
                {rend}
                           
            </div>
           
        )
    }
}
