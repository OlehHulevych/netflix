import React from 'react'
import Header from './Components/Header'

interface props {
  children:React.ReactNode
}

export default function Layout({children}:props) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
