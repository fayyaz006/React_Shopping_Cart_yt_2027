import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { initialProducts } from '../data/Product'
import { ChevronLeft, Tag, Zap, ShoppingCart } from 'lucide-react'
import { usecart } from '../context/Cartcontext'
import Cart from './Cart'



const Product_detail = () => {
  // console.log("data ",useParams())
  const { id } = useParams();
  const [product, setproduct] = useState();

  
  const {addtocart} = usecart();

  // const { addToCart } = useCart();

  useEffect(() => {
    setproduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  // console.log("my Product details=", product)



  return <>

    <div className="container mx-auto px-4 md:px-8 bg-gray-800 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
      <Link to="/">
        <button className='flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg cursor-pointer'>
          <ChevronLeft className='w-6 h-6 mr-1' />
          <span className="">
            Back to All Products
          </span>
        </button>
      </Link>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>

        <div className='w-full'>
          <img src={product?.image} alt={product?.name} className='w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800' />

        </div>

        <div className='flex flex-col  justify-between '>
          <div>
            <h1 className='text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter'>{product?.name}</h1>
          </div>
          <p className='text-3xl font-extrabold text-orange-400 mb-4'> ₹{product?.price.toFixed(2)}</p>

          <h2 className='flex items-center text-gray-200 font-bold text-xl mb-2 border-b border-orange-900/50 pb-2 space-x-2'>
            <Tag className='w-5 h-5 text-orange-500' />
            <span>Product Overview</span>
          </h2>


          <p className='text-gray-500 text-lg leading-relaxed mb-3'>{product?.description}</p>

          <ul className='space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700'>
            <li className='flex items-center space-x-3 text-lg'> < Zap className='w-5 h-5 text-orange-500' />
              <span className=''>High Quality Professional Grade Materials </span>
            </li>
            <li className='flex items-center space-x-3 text-lg'> < Zap className='w-5 h-5 text-orange-500' />
              <span>Comprehensive 1-year Manufecturer Warrenty</span>
            </li>
            <li className='flex items-center space-x-3 text-lg'> < Zap className='w-5 h-5 text-orange-500' />
              <span>Immediate Shipping For In-Stack Items</span>
            </li>
          </ul>

        

        <div className='flex justify-center space-y-4 mt-5 items-center flex-col'>

          <button onClick={()=> addtocart(product)} className='py-3 w-full bg-orange-600 rounded-full font-bold text-white shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-200 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-green-600/50 uppercase tracking-wider'>
            <ShoppingCart className='w-6 h-6' />
            <span>ADD TO CART</span>
          </button>

          <Link to={'/'} className='py-3 w-full border-2 bg-green-950 border-orange-600 rounded-full font-bold text-gray-300 shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-200 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-green-600/50 uppercase tracking-wider'>
            <ShoppingCart className='w-6 h-6' />

          
            <span>Keep Shopping</span>
          
          
          </Link>

        </div>
        
        </div>




      </div>

    </div>

  </>;

};

export default Product_detail;