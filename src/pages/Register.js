import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    role:"User"
    
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
   
  });

  const validateField = (field) => {
    const value = formData[field];
    let error = "";

    if (!value) {
      error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    Object.keys(formData).forEach((field) => validateField(field));

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      try {
        const response = await fetch(
          "https://eventmanagementproject20240804213240.azurewebsites.net/api/Auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          toast.success("Registration successful");
          navigate("/login");
        } else {
          toast.error("Email Already Exists");
        }
      } catch (error) {
        // Handle network errors
      }
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="w-50 container">
        <div className="col-12 ">
          <h3 className="text-primary text-center">Register</h3>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              onBlur={() => validateField("email")}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <div id="emailError" style={{ color: "red" }}>
              {errors.email}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              onBlur={() => validateField("fullName")}
              onChange={handleChange}
              required
            />
            <label htmlFor="fullName">Full Name</label>
            <div id="fullNameError" style={{ color: "red" }}>
              {errors.fullName}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onBlur={() => validateField("password")}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <div id="passwordError" style={{ color: "red" }}>
              {errors.password}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Phone Number"
              onBlur={() => validateField("phoneNumber")}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <div id="phoneNumberError" style={{ color: "red" }}>
              {errors.phoneNumber}
            </div>
          </div>
        </div>
        <div className="col-12 mt-1">
          <p>
            Have an account?{" "}
            <NavLink to="/login">Login here</NavLink>
          </p>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100 py-3">
            Register
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Register;
