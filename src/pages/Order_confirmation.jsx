import { CheckCircle, Zap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Order_confirmation = ({deliverydetails}) => {
  return (
    <>
    <div className="container mx-auto md
    px-8 pt-12">
        <div className='p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white'>
            <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg'/>
        
        <h2 className='text-4xl font-extrabold text-white mb-4'>Order Confirmed!</h2>
        
        <p className='text-lg text-gray-300 mb-6'>Your transaction is complete.A confirmation email has been sent to your account</p>

        <div className='bg-green-900/30 border border-green-700 p-6 text-left rounded-xl inline-block text-green-300 font-mono text-sm '>
            <p className='font-semibol text-lg mb-1'>{deliverydetails?.name}</p>

            <p>{deliverydetails?.address}</p>
            <p>{deliverydetails?.city},{deliverydetails?.zip}</p>

        </div>
        
          <Link to={'/'}
          className='mt-10 mx-auto w-90 px-10 py-4 bg-orange-600 rounded-full font-extrabold text-white shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-200 flex  items-center justify-center space-x-2 transform hover:ring-4 hover:ring-green-600/50 uppercase tracking-wider'>
            
            Continue Shopping
          </Link>
        
        
        </div>


    </div>
    </>
  )
}

export default Order_confirmation