import React, { Component } from 'react';
import '../css/Spotlight.css';
<<<<<<< HEAD

=======
>>>>>>> origin/divines-branch
class Spotlight extends Component {
  render() {
    const cardsData = [
      {
        image: '../assets/image1.jpg',
<<<<<<< HEAD
        text: 'The Effect of AI on Humanity'
      },
      {
        image: '../assets/image1.jpg',
        text: 'The Future of Space Exploration'
      },
      {
        image: '../assets/image1.jpg',
        text: 'The Impact of Climate Change'
=======
        name: 'Tabari Linus',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!'
      },
      
      {
        image: '../assets/image1.jpg',
        name: 'Tabari Linus',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!'

      },
      {
        image: '../assets/image1.jpg',
        name: 'Tabari Linus',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!'

>>>>>>> origin/divines-branch
      }
    ];

    return (
<<<<<<< HEAD
=======
      
>>>>>>> origin/divines-branch
      <div className="spotlight">
        <header className="spotlight-header">
          <h1 className="spotlight-title">CSS Spotlight</h1>
          <button className="spotlight-button">View All</button>
        </header>
        <div className="spotlight-cards">
          {cardsData.map((card, index) => (
            <div className="spotlight-card" key={index}>
              <img src={card.image} alt="" className="spotlight-card-image" />
<<<<<<< HEAD
              <p className="spotlight-card-text">{card.text}</p>
=======
              <h2 className="spotlight-card-text">{card.name}</h2>
              <p className="comment">{card.comment}</p>
>>>>>>> origin/divines-branch
              <button className="spotlight-card-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Spotlight;
