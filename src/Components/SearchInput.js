import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchInput.css';


export default class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            textChanged : ""
        }

        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState ({
            textChanged: e.target.value
        });
    }
    handleSubmit () {
        let val =this.state.textChanged;
        let newVal="";
        for(let i= 0; i<val.length ; i++ ){
            if(val[i] !== " "){
                newVal+=val[i];
            } else {
                newVal+="%20"
             }
         }
        // console.log(newVal);
         this.props.handleSearch(newVal);
    }
    render() {
        return (
            <div className="input">                
                    <input className="input-search"  placeholder="Search Movies" name="textChanged" type="text" onChange ={this.handleChange}/>
                    <NavLink to="/search">
                        <button className="btn" onClick={this.handleSubmit}>Search</button>
                    </NavLink>   
            </div>
        )
    }
}
