import React from 'react'
import { Footer } from './Footer'
import { NavbarApp } from './NavbarApp'


export const Layout = ({ children }) => {
  return (
    <div>
      <div className="content-wrap">
        {children}
      </div>
      <Footer />
    </div>
  )
}
