import React from 'react'
import { NavLink } from 'react-router-dom';
import Dashboard from './../pages/user/UserDashboard';

const UserMenu = () => {
  return (
    <>
    <div className='text-center'>
   <div className="list-group">
  {/* <NavLink to="/dashboard/admin" className="list-group-item list-group-item-action " >
    <h2>User Panel</h2>
  </NavLink> */}
   <NavLink to="/dashboard/user" className="list-group-item list-group-item-action m-1">Dashboard</NavLink>
  <NavLink to="/dashboard/user/private-quotation/response" className="m-1 list-group-item list-group-item-action">Private Event Quotation Response</NavLink>
  <NavLink to="/dashboard/user/public-quotation/response" className="m-1 list-group-item list-group-item-action">Public Event Quotation Response</NavLink>
  {/* <NavLink to="" className="list-group-item list-group-item-action">Scheduled Events</NavLink> */}
  <NavLink to="/dashboard/user/private/schedule-events" className="m-1 list-group-item list-group-item-action">Scheduled Private Events</NavLink>
  <NavLink to="/dashboard/user/public/schedule-events" className="m-1 list-group-item list-group-item-action">Scheduled Public Events</NavLink>
  <NavLink to="/dashboard/user/tickets" className="m-1 list-group-item list-group-item-action">Ticket History</NavLink>
  
</div>
</div>

    </>
  )
}

export default UserMenu
