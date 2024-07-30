import React from 'react'
import Header from './Header'
import Footer from './Footer'


const Layout = (props) => {
  return (
    <>
    
    <div className="container-xxl bg-white p-0 ">
    <Header />
    <main style={{minHeight:"50vh"}}>
    {props.children}
    </main>
    <Footer />
    </div>
    
    </>
  )
}

export default Layout
