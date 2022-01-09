import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "./Slider.css"


const MoviesSliders = ({movie}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    }
  return (
      <Container>
        <Slider {...settings}>
          { movie.map(function(movie){
            console.log(movie);
            return(
              <React.Fragment>
                <Col>
                  <Card>
                    <Card.Img
                    variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
              </React.Fragment>
            )
          })}
        </Slider>
      </Container>
    );
  }

export default MoviesSliders;