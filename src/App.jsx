import React from 'react'
import Navbar from './components/Navbar'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Productcart from './components/Productcart'
import Product_list from './pages/Product_list'
import Product_details from './pages/Product_detail'
import Searchfilter from './components/Searchfilter'
import Loading from './components/Loading'
import footer from './components/Footer'
import Categoryfilter from './components/Categoryfilter'
import Cartitem from './components/Cartitem'
import Footer from './components/Footer'

import { ToastContainer, toast,Bounce } from 'react-toastify';
// import Order_confirmation from './pages/Order_confirmation'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product_detail from './pages/Product_detail'


const App = () => {
  return <>
    <Router>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />


      <div className="min-h-screen bg-gray-950 font-sans">
        <Navbar />

        <Routes>
          <Route path='/' element={<Product_list />} />
          <Route path='/product/:id' element={<Product_detail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
        <Footer />

      </div>


    </Router>

  </>;



}

export default App