import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/AdminMenu';

const AdminScheduledEvent = ({eventType}) => {
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const fetchScheduledEvents = async () => {
      try {
        const url = eventType === 'Public'
        ? `https://eventmanagementproject20240804213240.azurewebsites.net/api/Event/getAll/scheduled/pub`
        : 'https://eventmanagementproject20240804213240.azurewebsites.net/Event/get/scheduled/pvt';
        const response = await axios.get(url);
        setScheduledEvents(response.data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };

    fetchScheduledEvents();
  }, [eventType]);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h3 className='text-primary'>Scheduled {eventType} Events</h3>
            <div className="row">
            {scheduledEvents.length > 0 ? (
              scheduledEvents.map(event => (
                <div className='card w-75 m-2 p-3'>
                  <div key={event.id} className="col-md-12">
                    
                      
                      
                        <table className="table table-bordered custom-table">
                        <thead className="thead-light">
                      <tr className='bg-primary text-light'>
                        <th colSpan="2" className="text-center">{event.eventName}</th>
                      </tr>
                    </thead>
                          <tbody>
                            <tr>
                              <th className="align-left">Event Name</th>
                              <td className="align-right">{event.eventName}</td>
                            </tr>
                            <tr>
                              <th className="align-left">User Name</th>
                              <td className="align-right">{event.userName}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Quotation Amount</th>
                              <td className="align-right">{event.quotatedAmount}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event Start Date</th>
                              <td className="align-right">{new Date(event.eventStartDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}{' '}
                                        {new Date(event.eventStartDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event End Date</th>
                              <td className="align-right">{new Date(event.eventEndDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}{' '}
                                        {new Date(event.eventEndDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</td>
                            </tr>
                            {/* <tr>
                              <th className="align-left">Event Timing</th>
                              <td className="align-right">{event.eventTiming}</td>
                            </tr> */}
                            <tr>
                              <th className="align-left">Response Message</th>
                              <td className="align-right">{event.responseMessage}</td>
                            </tr>
                            <tr>
                              <th className="align-left">User Email</th>
                              <td className="align-right">{event.userEmail}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Venue Type</th>
                              <td className="align-right">{event.venueType}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Location</th>
                              <td className="align-right">{event.location}</td>
                            </tr>
                            {eventType === 'Public' && (
                              <>
                               <tr>
                                  <th className="align-left">City</th>
                                  <td className="align-right">{event.city}</td>
                                </tr>
                                <tr>
                                  <th className="align-left">Host Name</th>
                                  <td className="align-right">{event.hostName}</td>
                                </tr>
                                <tr>
                                  <th className="align-left">User Event Name</th>
                                  <td className="align-right">{event.userEventName}</td>
                                </tr>
                                <tr>
                                  <th className="align-left">Total Seats</th>
                                  <td className="align-right">{event.totalSeats}</td>
                                </tr>
                                <tr>
                                  <th className="align-left">Ticket Price</th>
                                  <td className="align-right">{event.ticketPrice}</td>
                                </tr>
                                <tr>
                                  <th className="align-left">Remaining Seats</th>
                                  <td className="align-right">{event.remainingSeats}</td>
                                </tr>
                                <tr>
                                  <th className="align-left">Is Active</th>
                                  <td className="align-right">{event.isActive?"YES":"NO"}</td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                  
                
              ))
            ) : (
              <p>No scheduled private events found.</p>
            )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminScheduledEvent;