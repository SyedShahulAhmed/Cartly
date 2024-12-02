import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartTab from './CartTab'
import { useSelector } from 'react-redux'
import ScrollToTop from './ScrollTop'
const Layout = () => {
  const stausCart  = useSelector(store => store.cart.tabStatus)
  return (
    <div className='bg-gray-800 '>
      <main className='w-[1200px] max-w-full m-auto p-5 text-white'>
        <ScrollToTop/>
        <Header />
        <Outlet />
      </main>
      <CartTab/>
    </div>
  )
}

export default Layout