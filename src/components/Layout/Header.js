import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

const Header = () => {
  const [selectedEvent, setSelectedEvent] = useState('Events');
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    // Synchronize auth state with local storage
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, [setAuth]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleLogout = () => {
    setAuth({
      userId: "",
      token: "",
      fullName: "",
      email: "",
      role: "",
    });
    localStorage.removeItem("auth");
  };
 

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" id="navBar">
      <NavLink to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
        <h1 className="m-0 text-primary"> Events</h1>
      </NavLink>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link" >Home</NavLink>
          <div className="nav-item dropdown">
            <NavLink to="#" className="nav-link dropdown-toggle" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedEvent}
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="eventsDropdown">
              <NavLink to="/events/corporate" className="dropdown-item" onClick={() => handleSelectEvent('Corporate Events')}>Corporate Events</NavLink>
              <NavLink to="/events/wedding" className="dropdown-item" onClick={() => handleSelectEvent('Wedding Events')}>Wedding Events</NavLink>
              <NavLink to="/events/birthdays" className="dropdown-item" onClick={() => handleSelectEvent('Birthday Parties')}>Birthday Parties</NavLink>
            </div>
            
          </div>
          <NavLink to="/events/public" className="nav-item nav-link" >Public Events</NavLink>
          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
          {
            !auth.token ? (
              <NavLink to="/login" className="nav-item nav-link" id="login-register">Login/Register</NavLink>
            ) : (
              <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {auth?.fullName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="userDropdown">
                <NavLink to={`/dashboard/${auth?.role=="User"?'user':'admin'}`} className="dropdown-item">Dashboard</NavLink>
                <NavLink to="/login" onClick={handleLogout} className="dropdown-item">Logout</NavLink>
              </div>
            </div>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
