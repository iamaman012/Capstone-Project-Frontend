import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useAuth } from '../context/Auth';
import{toast} from 'react-hot-toast'

import "../css/publicQuotation.css"



const PublicEventRequest = () => {
    const [auth] = useAuth();
  

  const [errors, setErrors] = useState({});
    const initialFormData = {
        userId: auth.userId,
        eventName: '',
        host: '',
        description: '',
        totalSeats: '',
        imageURL: '',
        ticketPrice: '',
        startDate: '',
        endDate: '',
        timing: 'Morning',
        venue: '',
        city: '',
        location: '',
      };
      const [formData, setFormData] = useState(initialFormData);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isPeakTime = (timing, date) => {
    const peakTimes = ['evening', 'night']; // Example peak times
    const peakDays = [0, 6]; // Sunday (0) and Saturday (6)
    const eventDate = new Date(date);
    const isWeekend = peakDays.includes(eventDate.getDay());
    return peakTimes.includes(timing) || isWeekend;
  };

  const validateTicketPrice = () => {
    const newErrors = {};
    if (!isPeakTime(formData.timing, formData.startDate) && formData.ticketPrice > 50) {
      newErrors.ticketPrice = 'Ticket price cannot be greater than 50 Rs during non-peak time.';
    }
    setErrors(newErrors);
  };

  const handleBlur = (e) => {
    if (e.target.name === 'ticketPrice') {
      validateTicketPrice();
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.eventName) tempErrors.eventName = "Event Name is required";
    if (!formData.host) tempErrors.host = "Host is required";
    if (!formData.description) tempErrors.description = "Description is required";
    if (!formData.totalSeats || formData.totalSeats <= 0) tempErrors.totalSeats = "Total Seats must be greater than 0";
    if (!formData.imageURL) tempErrors.imageURL = "Image URL is required";
    if (!formData.ticketPrice || formData.ticketPrice <= 0) tempErrors.ticketPrice = "Ticket Price must be greater than 0";
    if (!formData.startDate) tempErrors.startDate = "Start Date is required";
    if (!formData.endDate) tempErrors.endDate = "End Date is required";
    else{
      if (new Date(formData.startDate) > new Date(formData.endDate)) tempErrors.endDate = "End Date should be greater than Start Date";
    }
    // if (!formData.timing) tempErrors.timing = "Timing is required";
    if (!formData.venue) tempErrors.venue = "Venue is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.location) tempErrors.location = "Location is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateTicketPrice();
    if (Object.keys(errors).length > 0) {
      toast.error('Please fix the errors in the form.');
      return;
    }
    if (validate()) {
      try {
        const response = await axios.post('https://eventmanagementproject20240804213240.azurewebsites.net/api/Quotation/add/pub', formData);
        console.log(response.data);
        toast.success('Event Request Submitted Successfully');
        setFormData(initialFormData); // Clear the form
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Layout>
        <div className="container mt-5">
          <h2 className='text-center text-primary'>Public Quotation Request</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
              <label htmlFor="eventName">Event Name</label>
            <select className="form-control" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange}>
              <option value="">Select an event</option>
              <option value="Organize Your Comedy Show">Organize Your Comedy Show</option>
              <option value="Organize Your Music Event">Organize Your Music Event</option>
              <option value="Organize Your Magic Show">Organize Your Magic Show</option>
              <option value="Organize Your Stand-Up Comedy Night">Organize Your Stand-Up Comedy Night</option>
            </select>
                {errors.eventName && <div className="error">{errors.eventName}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="host">Host</label>
                <input type="text" className="form-control" id="host" name="host" value={formData.host} onChange={handleChange}  />
                {errors.host && <div className="error">{errors.host}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                {errors.description && <div className="error">{errors.description}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="totalSeats">Total Seats</label>
                <input type="number" className="form-control" id="totalSeats" name="totalSeats" value={formData.totalSeats} onChange={handleChange} />
                {errors.totalSeats && <div className="error">{errors.totalSeats}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="imageURL">Image URL</label>
                <input type="text" className="form-control" id="imageURL" name="imageURL" value={formData.imageURL} onChange={handleChange} />
                {errors.imageURL && <div className="error">{errors.imageURL}</div>}
              </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-3">
                <label htmlFor="startDate">Start Date</label>
                <input type="datetime-local" className="form-control" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />
                {errors.startDate && <div className="error">{errors.startDate}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="endDate">End Date</label>
                <input type="datetime-local" className="form-control" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />
                {errors.endDate && <div className="error">{errors.endDate}</div>}
              </div>
             
            </div>
            <div className="row">
            <div className="col-md-6 mb-3">
                <label htmlFor="ticketPrice">Ticket Price</label>
                <input type="number" className="form-control" id="ticketPrice" name="ticketPrice" value={formData.ticketPrice} onChange={handleChange} onBlur={handleBlur} />
                {errors.ticketPrice && <div className="error">{errors.ticketPrice}</div>}
              </div>
              {/* <div className="col-md-6 mb-3">
                <label htmlFor="timing">Timing</label>
                <select className="form-control" id="timing" name="timing" value={formData.timing} onChange={handleChange}>
                <option value="">Select a timing</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
                {errors.timing && <div className="error">{errors.timing}</div>}
              </div> */}
              <div className="col-md-6 mb-3">
                <label htmlFor="venue">Venue</label>
                <select className="form-control" id="venue" name="venue" value={formData.venue} onChange={handleChange}>
              <option value="">Select a venue</option>
              <option value="Own">Own</option>
              <option value="Private">Private</option>
            </select>
                {errors.venue && <div className="error">{errors.venue}</div>}
              </div>
            </div>
            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} />
                {errors.location && <div className="error">{errors.location}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
                {errors.city && <div className="error">{errors.city}</div>}
              </div>
            </div>
            <div className='row'>
                <div className='col-12'>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
            </div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default PublicEventRequest;