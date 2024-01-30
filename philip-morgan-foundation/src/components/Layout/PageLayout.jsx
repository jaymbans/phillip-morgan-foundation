import React from 'react'
import Navbar from '../../PageComponents/NavBar'
import Footer from '../../PageComponents/Footer'

function PageLayout({ children }) {
  return (
    <div className='page-layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout