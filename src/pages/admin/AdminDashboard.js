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
            <h2 className='text-primary'>Admin Details</h2>
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
  </div>
  )
}

export default AdminDashboard
