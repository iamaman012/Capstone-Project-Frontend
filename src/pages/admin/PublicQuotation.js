import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './../../components/Layout/Layout';
import AdminMenu from './../../components/AdminMenu';
import { NavLink } from 'react-router-dom';

const PublicQuotation = () => {
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await axios.get('http://localhost:5209/return/pub');
        setQuotations(response.data); // Directly use the array of objects returned by the API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuotations();
  }, []);

  return (
    <div>
      <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h3>Public Event Quotation</h3>
              <div className="row">
                {quotations.map((quotation, index) => (
                  <div key={index} className="col-md-12">
                    <div className="card mb-3">
                      <div className="card-header bg-primary text-light text-center">
                        {quotation.eventName}
                      </div>
                      <div className="card-body">
                        <table className="table table-bordered custom-table">
                          <tbody>
                            <tr>
                              <th className="align-left">Event Name</th>
                              <td className="align-right">{quotation.eventName}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Host Name</th>
                              <td className="align-right">{quotation.host}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Quotation Status</th>
                              <td className="align-right">{quotation.quotationStatus}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Requested Date</th>
                              <td className="align-right">{new Date(quotation.requestedDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Total Seats</th>
                              <td className="align-right">{quotation.totalSeats}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Venue</th>
                              <td className="align-right">{quotation.venue}</td>
                            </tr>
                            <tr>
                              <th className="align-left">City</th>
                              <td className="align-right">{quotation.city}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Ticket Price</th>
                              <td className="align-right">{quotation.ticketPrice}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event Start Date</th>
                              <td className="align-right">{new Date(quotation.startDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event End Date</th>
                              <td className="align-right">{new Date(quotation.endDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                              <th className="align-left">Event Timing</th>
                              <td className="align-right">{quotation.timing}</td>
                            </tr>
                            {quotation.quotationStatus === 'Pending' && (
                              <tr className='bg-primary text-light text-center'>
                                <th colSpan="2">
                                  <NavLink to={`/dashboard/admin/public-quotation/response/${quotation.publicQuotationRequestId}`} className="text-light text-center">
                                    Send Response
                                  </NavLink>
                                </th>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PublicQuotation;