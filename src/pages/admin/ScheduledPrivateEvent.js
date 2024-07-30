import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/AdminMenu';

const ScheduledPrivateEvent = () => {
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const fetchScheduledEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5209/api/Event/get/scheduled/pvt');
        setScheduledEvents(response.data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };

    fetchScheduledEvents();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h3>Scheduled Private Events</h3>
            {scheduledEvents.length > 0 ? (
              scheduledEvents.map(event => (
                <div className="row" key={event.id}>
                  <div className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-header bg-primary text-light text-center">
                        {event.eventName}
                      </div>
                      <div className="card-body">
                        <table className="table table-bordered custom-table">
                          <tbody>
                            <tr>
                              <th className="align-left">Event Name</th>
                              <td className="align-right">{event.eventName}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Host Name</th>
                              <td className="align-right">{event.userName}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Quotation Amount</th>
                              <td className="align-right">{event.quotatedAmount}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event Start Date</th>
                              <td className="align-right">{new Date(event.eventStartDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event End Date</th>
                              <td className="align-right">{new Date(event.eventEndDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event Timing</th>
                              <td className="align-right">{event.eventTiming}</td>
                            </tr>
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No scheduled private events found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScheduledPrivateEvent;