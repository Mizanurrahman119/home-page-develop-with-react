import React from 'react';
import poster from "../../images/poster1.jpg"
import "./Homepage.css"

const HomePage = () => {
    return (
        <div className='container' >
            <div class="row">
                <div class="col-6 detail-container">
                    <div>
                        <span className="year">2014</span>
                        <span className="catagory">Action</span>
                        <span className='adven'>Adventure</span>
                        <h1>Captain America</h1>
                        <p>Captain America: The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fifth film in the Marvel Cinematic Universe</p>
                        <button className='play-btn'><i class="fas fa-play"></i>Play Trailer</button>
                        <button className='add-btn'><i class="fas fa-plus"></i>Add to List</button>
                    </div>
                </div>
                <div class="col-6 images-container">
                    <img src={poster} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;