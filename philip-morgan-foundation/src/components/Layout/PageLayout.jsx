import React, { useState } from 'react'
import Navbar from '../../PageComponents/NavBar'
import Footer from '../../PageComponents/Footer'
import "./_PageLayout.scss"
import EventCountDown from '../EventCountDown/EventCountDown'

function PageLayout({ children }) {
  return (
    <div id='page-layout'>
      <EventCountDown />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout