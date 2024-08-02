import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/Auth'
import UserMenu from '../../components/UserMenu'

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3 className='text-primary'>User Details</h3>
            <div className="card w-75 p-3">
              <div key={auth.userId} className="col-md-12">
                <table className="table table-bordered mb-3 custom-table">
                  <thead className="thead-light">
                    <tr className="bg-primary text-light">
                      <th colSpan="2" className="text-center">
                        {auth.fullName}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="align-left">Email</th>
                      <td className="align-right">
                        {auth.email}
                      </td>
                    </tr>
                    <tr>
                      <th className="align-left">Role</th>
                      <td className="align-right">
                        {auth.role}
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Dashboard
