import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth";

import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/UserMenu";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserQuotationResponse = ({ eventType }) => {
  const [quotations, setQuotations] = useState([]);
  const [auth] = useAuth();
  const [userEventName, setUserEventName] = useState('');
  const [isEventScheduled, setIsEventScheduled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          eventType === "Public"
            ? `http://localhost:5209/api/Quotation/pub/response/ByuserId?userId=${auth.userId}`
            : `http://localhost:5209/api/Quotation/pvt/response/ByuserId?userId=${auth.userId}`


        const response = await axios.get(apiUrl);
        setQuotations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [eventType]);

  const handleAnotherAction = async (publicQuotationResponseId, eventName, publicQuotationRequestId) => {
    const data = {
      eventName: eventName,
      publicQuotationResponseId: publicQuotationResponseId,
      publicQuotationRequestId: publicQuotationRequestId,
      userId: auth.userId,
      userEventName: userEventName
    };

    try {
      const response = await axios.post('http://localhost:5209/api/Event/add/scheduled/pub', data);
      toast.success('Event scheduled successfully');
      setIsEventScheduled(true);  
      // navigate("/dashboard/user/public-quotation/response")
    
    } catch (error) {
      console.error('Error scheduling event:', error);
    }
  };

  const handleConfirmClick = async (
    privateQuotationRequestId,
    eventName,
    privateQuotationResponseId
  ) => {
    const eventData = {
      eventName, // Replace with actual event name if needed
      privateQuotationResponseId, // Replace with actual response ID if needed
      privateQuotationRequestId,
      userId: auth.userId,
    };

    try {
      const response = await axios.post(
        "http://localhost:5209/api/Event/add/scheduled/pvt",
        eventData
      );
      toast.success("Event scheduled successfully");
      setIsEventScheduled(true);
      // navigate("/dashboard/user/private-quotation/response")
      
      
      // Optionally, update the state or provide feedback to the user
    } catch (error) {
      console.error("There was an error scheduling the event!", error);
    }
  };

  return (
    <div>
      <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h3 className="text-primary">{eventType} Event Quotation Response</h3>
              
               
                {quotations.length > 0 ? (
                  <div className="row">
                    {quotations.map((quotation, index) => (
                      <div className="card w-75 p-3 mt-3">
                      <div key={index} className="col-md-12">
                        <table className="table table-bordered mb-3 custom-table">
                          <thead className="thead-light">
                            <tr className="bg-primary text-light">
                              <th colSpan="2" className="text-center">
                                {quotation.eventName}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="align-left">Event Name</th>
                              <td className="align-right">
                                {quotation.eventName}
                              </td>
                            </tr>
                            <tr>
                              <th className="align-left">Accepted By You</th>
                              <td className="align-right">
                                {quotation.acceptedByYou ? "Yes" : "No"}
                              </td>
                            </tr>
                            <tr>
                              <th className="align-left">Quoted Amount</th>
                              <td className="align-right">
                                {quotation.quotedAmount}
                              </td>
                            </tr>
                            <tr>
                              <th className="align-left">Response Message</th>
                              <td className="align-right">
                                {quotation.responseMessage}
                              </td>
                            </tr>
                            {!quotation.acceptedByYou? (
                              !isEventScheduled && (
                              eventType === "Private" ? (
                                <button
                                  className="btn btn-primary mt-2 text-center"
                                  onClick={() =>
                                    handleConfirmClick(
                                      quotation.privateQuotationRequestId,
                                      quotation.eventName,
                                      quotation.privateQuotationResponseId
                                    )
                                  }
                                >
                                  Click to Confirm
                                </button>
                              ) : (
                                <>
                                <input
                                className="mt-2"
                                type="text"
                                placeholder="Your Event Name"
                                value={userEventName}
                                onChange={(e) => setUserEventName(e.target.value)}
                              />
                                <button
                                  className="btn btn-primary mt-2 text-center"
                                  onClick={() =>
                                    handleAnotherAction(
                                      quotation.publicQuotationResponseId,
                                      quotation.eventName,
                                      quotation.publicQuotationRequestId,
                                      

                                    )
                                  }
                                >
                                  Click for Confirm
                                </button>
                                </>
                              )
                            ) ): null}
                          </tbody>
                        </table>
                      </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-danger">No quotation response to be shown</p>
                )}
              </div>
            
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UserQuotationResponse;
