import React from 'react'
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';


export const Layout = ({ children }) => {
  return (
    <div>
        <Header/>
        <div>
        <main className="main-container">
        {children}
      </main>
        </div>
       <Footer/>
    </div>
  )
}
