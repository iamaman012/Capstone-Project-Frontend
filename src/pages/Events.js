import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import Accordian from './../components/Accordian';

const Events = (props) => {
  const { category } = props;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let response;
        if (category) {
          response = await axios.get(`http://localhost:5209/api/Event/getall?category=${category}`);
        } else {
          response = await axios.get('http://localhost:5209/api/Event/getAll/publicEvents');
        }
        const data = response.data;
        console.log(data); // Log the fetched data
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [category]);

  return (
    <>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='row'>
                {events.map(event => (
                  <div key={event.eventId} className='col-md-12'>
                    <div className='card mb-3'>
                      <img src={event.imageURL} className='card-img-top' alt={event.eventName} />
                      <div className='card-body'>
                        <h5 className='card-title'>{event.eventName}</h5>
                        <p className='card-text'>{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-md-4'>
              <Accordian />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Events;