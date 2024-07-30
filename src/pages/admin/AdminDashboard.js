import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/AdminMenu'
import { useAuth } from '../../context/Auth'

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div>
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h3>Admin Details</h3>
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.fullName}</h3>
              <h3> Admin Email : {auth?.email}</h3>
              <h3> Admin Contact : {auth?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
  )
}

export default AdminDashboard
