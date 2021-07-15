import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Netflex.css';
import SearchInput from './/SearchInput';
import './Navbar.css';


export default class Navbar extends Component {
    

    render() {
        return (
                   
            <div className="Navbar">
                <div className="logo-img">
                  <NavLink to="/">  <img className="logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflex"/></NavLink>
                </div>
                <nav className="navbar-container">  
                  
                    <NavLink className="NavLink" exact to="/" >Home</NavLink>
                    <NavLink className="NavLink" exact to ="/tvshows" >TvShows</NavLink >
                    <NavLink className="NavLink" exact to="/movies" >Movies</NavLink >
                    <NavLink className="NavLink" exact to="/new"  >New & Popular</NavLink >   
                                     
                </nav>
                <div className="search-input">
                    <SearchInput handleSearch={this.props.handleSearch} data={this.props.searched}/>
                </div>
            </div>     
                  
            
        )
    }
}
