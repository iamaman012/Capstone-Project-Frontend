import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './../../components/Layout/Layout';
import UserMenu from '../../components/UserMenu';
import "../../css/tickets.css";
import { useAuth } from '../../context/Auth';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [auth]= useAuth();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`https://eventmanagementproject20240804213240.azurewebsites.net/api/Ticket/get/byUserId?userId=${auth.userId}`);
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h3 className='text-primary'> Your Tickets</h3>
              <div className="row w-75 mt-2">
                {tickets.length > 0 ? (
                  tickets.map(ticket => (
                    <div className="col-md-12 mb-3" key={ticket.ticketId}>
                      <div className="card">
                        <div className="card-header bg-primary">
                          <h5 className="card-title text-light text-center">{ticket.userEventName}</h5>
                        </div>
                        <div className="card-body">
                          <p className="card-text"><strong>Ticket ID:</strong> {ticket.ticketId}</p>
                          <p className="card-text">Start Date: {new Date(ticket.startDate).toLocaleString()}</p>
                          {/* <p className="card-text">Event Timing: {ticket.eventTiming}</p> */}
                          <p className="card-text">Location: {ticket.location}</p>
                          <p className="card-text">City: {ticket.city}</p>
                          <p className="card-text">Total Seats: {ticket.totalSeats}</p>
                          <p className="card-text">Total Amount: ₹{ticket.totalAmount}</p>
                          <p className="card-text">Purchase Date: {ticket.purchaseDate}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className='text-danger text-center'>No tickets available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Tickets;