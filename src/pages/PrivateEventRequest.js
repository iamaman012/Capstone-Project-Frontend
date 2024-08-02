import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/Auth';

import '../css/privateEvent.css'; // Import the CSS file

const PrivateEvent = () => {
  const [auth] = useAuth();
  const initialFormData = {
    eventName: '',
    expectedPeopleCount: '',
    venueType: '',
    locationDetails: '',
    foodPreference: '',
    cateringInstructions: '',
    specialInstructions: '',
    eventStartDate: '',
    eventEndDate: '',
    eventTiming: 'Morning'
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.eventName) newErrors.eventName = 'Event Name is required';
    if (!formData.expectedPeopleCount) newErrors.expectedPeopleCount = 'Expected People Count is required';
    if (!formData.venueType) newErrors.venueType = 'Venue Type is required';
    if (!formData.locationDetails) newErrors.locationDetails = 'Location Details are required';
    if (!formData.foodPreference) newErrors.foodPreference = 'Food Preference is required';
    if (!formData.cateringInstructions) newErrors.cateringInstructions = 'Catering Instructions are required';
    if (!formData.specialInstructions) newErrors.specialInstructions = 'Special Instructions are required';
    if (!formData.eventStartDate) newErrors.eventStartDate = 'Event Start Date is required';
    if (!formData.eventEndDate) newErrors.eventEndDate = 'Event End Date is required';
    if (!formData.eventTiming) newErrors.eventTiming = 'Event Timing is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Fetch the event ID
        const response = await axios.get('http://localhost:5209/api/Event/getid', {
          params: { eventName: formData.eventName }
        });

        const eventId = response.data;

        // Submit the form details
        await axios.post('http://localhost:5209/api/Quotation/add/pvt', {
          userId: auth.userId,
          eventId,
          expectedPeopleCount: formData.expectedPeopleCount,
          venueType: formData.venueType,
          locationDetails: formData.locationDetails,
          foodPreference: formData.foodPreference,
          cateringInstructions: formData.cateringInstructions,
          specialInstructions: formData.specialInstructions,
          eventStartDate: formData.eventStartDate,
          eventEndDate: formData.eventEndDate,
          eventTiming: formData.eventTiming
        });

        toast.success('Form submitted successfully');
        setFormData(initialFormData);
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to submit form details');
      }
    }
  };

  return (
    <div>
      <Layout>
        <h3 className='text-primary text-center m-3'> Private Quotation Request</h3>
        <form onSubmit={handleSubmit} className="container form-container">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Event Name:</label>
            <div className="col-sm-10">
              <select className="form-select" name="eventName" value={formData.eventName} onChange={handleChange} >
                <option value="">Select Event</option>
                <option value="Annual Business Summit">Annual Business Summit</option>
                <option value="Tech Expo 2024">Tech Expo 2024</option>
                <option value="Rustic Vineyard Wedding">Rustic Vineyard Wedding</option>
                <option value="Elegant Ballroom Wedding">Elegant Ballroom Wedding</option>
                <option value="Tropical Luau Party">Tropical Luau Party</option>
                <option value="Superhero Adventure Party">Superhero Adventure Party</option>
              </select>
              {errors.eventName && <div className="text-danger">{errors.eventName}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Expected People Count:</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="expectedPeopleCount" value={formData.expectedPeopleCount} onChange={handleChange}  />
              {errors.expectedPeopleCount && <div className="text-danger">{errors.expectedPeopleCount}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Venue Type:</label>
            <div className="col-sm-10">
              <select className="form-select" name="venueType" value={formData.venueType} onChange={handleChange} >
                <option value="">Select Venue Type</option>
                <option value="Own">Own</option>
                <option value="Private">Private</option>
              </select>
              {errors.venueType && <div className="text-danger">{errors.venueType}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Location Details:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="locationDetails" value={formData.locationDetails} onChange={handleChange}  />
              {errors.locationDetails && <div className="text-danger">{errors.locationDetails}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Food Preference:</label>
            <div className="col-sm-10">
              <select className="form-select" name="foodPreference" value={formData.foodPreference} onChange={handleChange} >
                <option value="">Select Food Preference</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
              </select>
              {errors.foodPreference && <div className="text-danger">{errors.foodPreference}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Catering Instructions:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="cateringInstructions" value={formData.cateringInstructions} onChange={handleChange}  />
              {errors.cateringInstructions && <div className="text-danger">{errors.cateringInstructions}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Special Instructions:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}  />
              {errors.specialInstructions && <div className="text-danger">{errors.specialInstructions}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Event Start Date:</label>
            <div className="col-sm-10">
              <input type="datetime-local" className="form-control" name="eventStartDate" value={formData.eventStartDate} onChange={handleChange}  />
              {errors.eventStartDate && <div className="text-danger">{errors.eventStartDate}</div>}
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Event End Date:</label>
            <div className="col-sm-10">
              <input type="datetime-local" className="form-control" name="eventEndDate" value={formData.eventEndDate} onChange={handleChange}  />
              {errors.eventEndDate && <div className="text-danger">{errors.eventEndDate}</div>}
            </div>
          </div>
          {/* <div className="row mb-3">
            <label className="col-sm-2 col-form-label form-label">Event Timing:</label>
            <div className="col-sm-10">
              <select className="form-select" name="eventTiming" value={formData.eventTiming} onChange={handleChange} >
                <option value="">Select Event Timing</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
              {errors.eventTiming && <div className="text-danger">{errors.eventTiming}</div>}
            </div>
          </div> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Layout>
    </div>
  );
};

export default PrivateEvent;