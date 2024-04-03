import React, { useState } from 'react'
import Navbar from '../../PageComponents/NavBar'
import Footer from '../../PageComponents/Footer'
import "./_PageLayout.scss"

function PageLayout({ children }) {
  return (
    <div id='page-layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout