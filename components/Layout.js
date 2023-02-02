import React from 'react'
import { Footer } from './Footer'
import NavbarApp  from './NavbarApp'

export const Layout = ({ children }) => {
  return (
    <div>
      <NavbarApp/>
      <div className="content-wrap">
        {children}
      </div>
      <Footer />
    </div>
  )
}
