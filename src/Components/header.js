import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


export default class header extends Component {
    render() {
        const rend = this.props.popularMovies.map(t => (
            <div style={{height:'600px'}}>
              <img src={`https://image.tmdb.org/t/p/original${t.backdrop_path} `} alt={t.title}/>
            </div>
          ))
        return (
            <Carousel infiniteLoop={true} useKeyboardArrows autoPlay showThumbs={false} showIndicators={true} showStatus={false}>
                {rend}
            </Carousel>
            
        )
    }
}
