import React from 'react'
import {Navbar} from './Navbar'
import {Footer} from './Footer'


export const Layout = ({ children }) => {
  return (
   <div>
      <div className="content-wrap">
      <Navbar />
      {children}
    </div>
    <Footer />
   </div>
  )
}
