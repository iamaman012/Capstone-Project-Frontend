import React from 'react'
import { NavLink } from 'react-router-dom';
import Events from './../pages/Events';

const AdminMenu = () => {
  return (
    <>
    <div className='text-center'>
   <div className="list-group">
  <NavLink to="/dashboard/admin" className="list-group-item list-group-item-action " >
    <h2>Admin Panel</h2>
  </NavLink>
  <NavLink to="/dashboard/admin/private-quotation" className="list-group-item list-group-item-action">Private Event Quotation</NavLink>
  <NavLink to="/dashboard/admin/public-quotation" className="list-group-item list-group-item-action">Public Event Quotation</NavLink>
  <NavLink to="/dashboard/admin/schedule-private-events" className="list-group-item list-group-item-action">Scheduled Private Events</NavLink>
  
</div>
</div>

    </>
  )
}

export default AdminMenu
