import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';

export default class Popular extends Component {

    componentDidMount(){
        this.props.getPopular()
    }
    render() {
        const rend = this.props.movie.map( t => {
            return<NavLink exact to={`/${t.title}`}><Card movie={t} key={t.title}/></NavLink> 
          })
        return (
            <div className="home">
                
            {rend}
                   
            </div>
        )
    }
}
