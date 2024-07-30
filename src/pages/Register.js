import React from 'react'
import "../css/register.css"
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Register = () => {
  return (
    <>
    <Layout>
    <div className="centered-container">
  <div className="container w-50 mt-5">
    <div className="row justify-content-center mb-3 pb-3">
      <div className="col-md-8">
        <h2 className="text-primary text-center mb-3">Registration</h2>
        <div className="wow fadeInUp" data-wow-delay="0.5s">
          <form id="registerForm">
            <div className="row g-3">
              <div className="col-12">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Email" onblur="validateEmail()" required />
                  <label htmlFor="email">Email</label>
                  <div id="emailError" style={{color: 'red'}} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" onblur="validateFname()" required />
                  <label htmlFor="firstname">First Name</label>
                  <div id="fnameError" style={{color: 'red'}} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" onblur="validateLname()" required />
                  <label htmlFor="lastName">Last Name</label>
                  <div id="lnameError" style={{color: 'red'}} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="password" className="form-control" id="password" placeholder="Password" onblur="validatePass()" />
                  <label htmlFor="password">Password</label>
                  <div id="passwordError" style={{color: 'red'}} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="contactNumber" placeholder="Phone" onblur="validateEmail()" required />
                  <label htmlFor="Phone">Phone</label>
                  <div id="phoneError" style={{color: 'red'}} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="imageUrl" placeholder="Image Url" />
                  <label htmlFor="Phone">Image Url</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <select className="form-select" id="userType">
                    <option value="JobSeeker">JobSeeker</option>
                    <option value="Employer">Employer</option>
                  </select>
                  <label htmlFor="userType">User Type</label>
                </div>
              </div>
              <div className="col-12">
                <p>Already have an Account? <NavLink to="/login">Login here</NavLink></p>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
              </div>
              <div id="registerError" style={{color: 'red', marginTop: 10}} />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</Layout>

    </>
  )
}

export default Register
