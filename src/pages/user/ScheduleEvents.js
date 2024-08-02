import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/UserMenu';
import { useAuth } from '../../context/Auth';

const ScheduleEvents = ({eventType}) => {
  const [events, setEvents] = useState([]);
  const [auth] = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = eventType === 'Public'
        ? `http://localhost:5209/api/Event/get/scheduled/pub/ByuserId?userId=${auth.userId}`
         : `http://localhost:5209/api/Event/get/scheduled/pvt/ByuserId?userId=${auth.userId}`;
        const response = await axios.get(url);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [eventType]);

  return (
    <div>
      <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h3 className='text-primary'>Scheduled {eventType} Events</h3>
              
                {events.length > 0 ? (
                events.map(event => (
                  <div className="card w-75 p-3 mt-3">
                  <table key={event.scheduledPrivateEventId} className="table table-bordered mb-3 custom-table">
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
                        <th className="align-left">Quoted Amount</th>
                        <td className="align-right">{event.quotatedAmount}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Start Date</th>
                        <td className="align-right">{new Date(event.eventStartDate).toLocaleString()}</td>
                      </tr>
                      <tr>
                        <th className="align-left">End Date</th>
                        <td className="align-right">{new Date(event.eventEndDate).toLocaleString()}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Timing</th>
                        <td className="align-right">{event.eventTiming}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Venue Type</th>
                        <td className="align-right">{event.venueType}</td>
                      </tr>
                      {
                        eventType === 'Public' && (
                          <>
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
                              <td className="align-right">{event.isActive?"Yes":"No"}</td>
                            </tr>
                          </>
                        )
                      }
                    </tbody>
                  </table>
                  </div>
                ))
                ):(<p className='text-danger'> No scheduled events to be shown</p>)
                }

              </div>
            
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ScheduleEvents;