import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/Auth'
  import UserMenu from '../../components/UserMenu'

const Dashboard = () => {
  const[ auth ] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3>User Details</h3>
            <div className="card w-75 p-3">
              <h3> User Name : {auth?.fullName}</h3>
              <h3> User Email : {auth?.email}</h3>
              <h3> User Contact : {auth?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
