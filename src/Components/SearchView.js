import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';


export default class SearchView extends Component {
    render() {        
        const rend = this.props.searched.map( t => {
            return<NavLink exact to={`/${t.title}`}><Card movie={t} key={t.title}/></NavLink> 
          })
        return (
            <div className="home">

                {this.props.searched.length === 0 ? <h1 style={{fontSize:'8rem',fontWeight:'200'}} >404<br/> Search not found</h1> : rend }
                           
            </div>
           
        )
    }
}
