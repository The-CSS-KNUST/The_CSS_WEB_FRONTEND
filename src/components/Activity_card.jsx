import React, { useState } from 'react';
import "../css/Activity_card.css";

const Activity_card = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      subtext: 'This is event 1',
      date: 'April 1, 2023',
      imageUrl: '../assets/image1.jpg',
    },
    {
      id: 2,
      title: 'Event 2',
      subtext: 'This is event 2',
      date: 'April 2, 2023',
      imageUrl: '../assets/image1.jpg',
    },
  ]);

  return (
    <div className="event-cards">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <div className="event-card__image">
            <img src={event.imageUrl} alt="Event" />
          </div>
          <div className="event-card__text">
            <h2>{event.title}</h2>
            <p>{event.subtext}</p>
            <p>{event.date}</p>
            <button>View Event</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity_card;
