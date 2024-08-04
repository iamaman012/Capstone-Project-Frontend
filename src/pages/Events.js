import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import Accordian from './../components/Accordian';
import { useNavigate} from 'react-router-dom';

const Events = (props) => {
  const { category } = props;
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let response;
        if (category!=="Public") {
          response = await axios.get(`https://eventmanagementproject20240804213240.azurewebsites.net/api/Event/getall?category=${category}`);
        } else {
          response = await axios.get('https://eventmanagementproject20240804213240.azurewebsites.net/api/Event/getAll/publicEvents');
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
  function handleButton(eventType) {
    if(eventType==="Public"){
      navigate('/event/public-quotation');
    }
    else
    navigate("/event/private-quotation");
  }

  return (
    <>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='row'>
                {events.map(event => (
                  <div key={event.eventId} className='col-md-12 '>
                    <div className='card mb-3 border-3 border-primary p-2'>
                      <img src={event.imageURL} className='card-img-top ' alt={event.eventName} />
                      <div className='card-body'>
                        <h5 className='card-title text-primary'>{event.eventName}</h5>
                         <p className='card-text' style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-md-4'>
              <Accordian />
              <div className='row mt-3'>
                <div className='col-md-12'>
                {category==="Public" ?( <button onClick={() => handleButton("Public")} className='btn btn-primary w-100 py-3 '>Apply for Public Events</button>):( <button onClick={() => handleButton("Private")}className='btn btn-primary py-3 w-100'>Apply for Private Events</button> )
                  } 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Events;