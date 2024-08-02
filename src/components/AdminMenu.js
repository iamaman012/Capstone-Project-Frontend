import React from 'react'
import { NavLink } from 'react-router-dom';
import Events from './../pages/Events';

const AdminMenu = () => {
  return (
    <>
    <div className='text-center'>
   <div className="list-group">
  {/* <NavLink to="/dashboard/admin" className="list-group-item list-group-item-action " >
    <h2>Admin Panel</h2>
  </NavLink> */}
  <NavLink to="/dashboard/admin" className="m-1 list-group-item list-group-item-action">Dashboard</NavLink>
  <NavLink to="/dashboard/admin/private-quotation" className="m-1 list-group-item list-group-item-action">Private Event Quotation</NavLink>
  <NavLink to="/dashboard/admin/public-quotation" className="m-1 list-group-item list-group-item-action">Public Event Quotation</NavLink>
  <NavLink to="/dashboard/admin/schedule-private-events" className="m-1 list-group-item list-group-item-action">Scheduled Private Events</NavLink>
  <NavLink to="/dashboard/admin/schedule-public-events" className="m-1 list-group-item list-group-item-action">Scheduled Public Events</NavLink>
  
</div>
</div>

    </>
  )
}

export default AdminMenu
