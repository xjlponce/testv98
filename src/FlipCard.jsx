// FlipCard.js
import React from 'react';
import './FlipCard.css';

class FlipCard extends React.Component {
  render() {
    return (
      <div>
        {/* horizontal */}
        <h4>Horizontal Flip</h4>
        <div className="flip">
          <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
            <h1 className="text-shadow">MOUNTAIN</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>
        </div>
        <div className="flip">
          <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
            <h1 className="text-shadow">LAKE</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>
        </div>
        <div className="flip">
          <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
            <h1 className="text-shadow">OCEAN</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>
        </div>

        <br />
        <br />

        {/* vertical */}

        <h4>Vertical Flip</h4>
        <div className="flip flip-vertical">
          <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
            <h1 className="text-shadow">FOREST</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>
        </div>
        <div className="flip flip-vertical">
          <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
            <h1 className="text-shadow">TRACK</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>
        </div>
        <div className="flip flip-vertical">
          <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
            <h1 className="text-shadow">SWAMP</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
