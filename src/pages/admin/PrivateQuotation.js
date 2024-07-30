import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/AdminMenu';
import "../../css/privateQuotation.css"
import { NavLink, useNavigate } from 'react-router-dom';

const PrivateQuotation = () => {
  const [quotations, setQuotations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await axios.get('http://localhost:5209/api/Quotation/return/pvt');
        setQuotations(response.data);
      } catch (error) {
        console.error('Error fetching the quotations:', error);
      }
    };

    fetchQuotations();
  }, []);

  const handleRedirect = (id) => {
     navigate("/");
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h3>Private Event Quotations</h3>
            <div className="row">
              {quotations.map((quotation, index) => (
                <div key={index} className="col-md-12">
                  <table className="table table-bordered mb-3 custom-table">
                    <thead className="thead-light">
                      <tr className='bg-primary text-light'>
                        <th colSpan="2" className="text-center">{quotation.eventName}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="align-left">Event Name</th>
                        <td className="align-right">{quotation.eventName}</td>
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
                        <th className="align-left">Expected People Count</th>
                        <td className="align-right">{quotation.expectedPeopleCount}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Venue Type</th>
                        <td className="align-right">{quotation.venueType}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Location Details</th>
                        <td className="align-right">{quotation.locationDetails}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Food Preference</th>
                        <td className="align-right">{quotation.foodPreference}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Catering Instructions</th>
                        <td className="align-right">{quotation.cateringInstructions}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Special Instructions</th>
                        <td className="align-right">{quotation.specialInstructions}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Event Start Date</th>
                        <td className="align-right">{new Date(quotation.eventStartDate).toLocaleString()}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Event End Date</th>
                        <td className="align-right">{new Date(quotation.eventEndDate).toLocaleString()}</td>
                      </tr>
                      <tr>
                        <th className="align-left">Event Timing</th>
                        <td className="align-right">{quotation.eventTiming}</td>
                      </tr>
                      {quotation.quotationStatus === 'Pending'?( <tr className='bg-primary text-light text-center'>
                      <th colSpan="2"><NavLink to={`/dashboard/admin/private-quotation/response/${quotation.privateQuotationRequestId}`} className="text-light text-center">Send Response</NavLink></th>
                      </tr>):(null)}
                     
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivateQuotation;