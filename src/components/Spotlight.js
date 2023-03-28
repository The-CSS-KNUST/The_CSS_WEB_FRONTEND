import React, { Component } from 'react';
import '../css/Spotlight.css';

class Spotlight extends Component {
  render() {
    const cardsData = [
      {
        image: '../assets/image1.jpg',
        text: 'The Effect of AI on Humanity'
      },
      {
        image: '../assets/image1.jpg',
        text: 'The Future of Space Exploration'
      },
      {
        image: '../assets/image1.jpg',
        text: 'The Impact of Climate Change'
      }
    ];

    return (
      <div className="spotlight">
        <header className="spotlight-header">
          <h1 className="spotlight-title">CSS Spotlight</h1>
          <button className="spotlight-button">View All</button>
        </header>
        <div className="spotlight-cards">
          {cardsData.map((card, index) => (
            <div className="spotlight-card" key={index}>
              <img src={card.image} alt="" className="spotlight-card-image" />
              <p className="spotlight-card-text">{card.text}</p>
              <button className="spotlight-card-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Spotlight;
