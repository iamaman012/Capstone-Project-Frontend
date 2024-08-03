import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout'; // Adjust the import path as necessary
import "../css/eventDescription.css"; // Adjust the import path as necessary
import { useAuth } from '../context/Auth';
import {toast} from "react-hot-toast";

const EventDescription = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Destructure event from location.state
  const [ticketCount, setTicketCount] = useState(0);
  const [showTicketOptions, setShowTicketOptions] = useState(false);
  const [auth] = useAuth();

  if (!event) {
    return <div>Event data not found</div>;
  }

  const handleBuyTicket = () => {
    if(!auth.userId){
        toast.error('Please login to buy ticket');
        return
    }
    setShowTicketOptions(true);
  };

  const incrementTicket = () => {
    if(ticketCount+1 > event.remainingSeats){
      toast.error('Only '+event.remainingSeats+' tickets are available');
      return;
    }
    setTicketCount(ticketCount + 1);
  };

  const decrementTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  const totalPrice = ticketCount * event.ticketPrice;
  const handleProceed = async () => {
   
    const ticketData = {
      scheduledPublicEventId: event.scheduledPublicEventId,
      userId: auth.userId, // Replace with actual user ID
      numberOfSeats: ticketCount,
      amount: totalPrice,
    };

    try {
      const response = await fetch('http://localhost:5209/api/Ticket/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData),
      });

      if (response.ok) {
        // Clear states after successful submission
        setTicketCount(0);
        setShowTicketOptions(false);
        toast.success('Ticket purchased successfully');
      } else {
        alert('Failed to purchase ticket.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while purchasing the ticket.');
    }
  };

  return (
    <Layout>
      <div className="event-container">
        
        <img src={event.imageUrl} alt="Event" className="border-primary event-image" />
        
        <h2 className='text-primary m-2'>{event.userEventName}</h2>
        <p>{event.description}</p>
        <p>Host : {event.hostName}</p>
        <p> {new Date(event.eventStartDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}{' '}
                                        {new Date(event.eventStartDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</p>
        <p>Location: {event.location}</p>
        <p>City: {event.city}</p>
        <h3>Price: ₹{event.ticketPrice}</h3>
        {!showTicketOptions ? (
          <button onClick={handleBuyTicket} className="buy-ticket-button btn btn-primary">
            Buy Ticket
          </button>
        ) : (
          <div className="ticket-options">
            <button onClick={decrementTicket} className='btn btn-primary'>-</button>
            <span>{ticketCount}</span>
            <button onClick={incrementTicket} className='btn btn-primary'>+</button>
          </div>
        )}
        {showTicketOptions && (
          <div className="total-price-container">
            <div className="price-info">
              <p className='text-dark'>Total Price: ₹{totalPrice}</p>
              <p className='text-dark'>Tickets: {ticketCount}</p>
            </div>
            <button onClick={handleProceed} className="proceed-button btn btn-primary">Proceed</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EventDescription;