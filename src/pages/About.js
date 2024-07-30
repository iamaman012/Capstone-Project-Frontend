import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/Auth'

const About = () => {
  const [auth,setAuth]=useAuth();
  return (
    <div>
      <Layout>
        welcome to the about page
        <p>
          auth.userId: {auth.token}
        </p>
      </Layout>
    </div>
  )
}

export default About
