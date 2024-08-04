import Layout from '../components/Layout/Layout';
import "../css/liveEvent.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LiveEvents = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://eventmanagementproject20240804213240.azurewebsites.net/api/Event/getAll/scheduled/pub');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleCardClick = (event) => {
        if (event.remainingSeats > 0) {
            navigate(`/event-description/${event.scheduledPublicEventId}`, { state: { event } });
        }
    };

    return (
        <Layout>
            <div className="container">
                <h2 className='text-center text-primary'>Live Events</h2>
                <div className="row">
                    {events.map(event => (
                        <div className="col-md-4" key={event.scheduledPublicEventId}>
                            <div className="card mb-4 hover-card border-2 border-primary fixed-height-card" onClick={() => handleCardClick(event)}>
                                <img src={event.imageUrl} className="card-img-top img-fluid fixed-height-img" alt={event.eventName} />
                                <div className="card-body">
                                    <h5 className="card-title">{event.userEventName}</h5>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text">
                                        {new Date(event.eventStartDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}{' '}
                                        {new Date(event.eventStartDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                    {event.remainingSeats <= 0 ? (
                                        <p className="text-danger">Sold Out</p>
                                    ) : (
                                        <p className="card-text">Remaining Seats: {event.remainingSeats}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default LiveEvents;