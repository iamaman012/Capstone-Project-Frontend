import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/UserMenu';
import { useAuth } from '../../context/Auth';

const SchedulePrivateEvents = () => {
  const [events, setEvents] = useState([]);
  const [auth] = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5209/api/Event/get/scheduled/pvt/ByuserId?userId=${auth.userId}`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
              <h3>Scheduled Private Events</h3>
              <div className="card w-75 p-3">
                <h3>Quotation Response</h3>
                {events.map(event => (
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
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SchedulePrivateEvents;