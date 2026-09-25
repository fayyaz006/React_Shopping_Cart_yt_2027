import React, { useState } from 'react'
import Searchfilter from '../components/Searchfilter'
import Categoryfilter from '../components/Categoryfilter'
import { usecart } from '../context/Cartcontext'
import Productcart from '../components/Productcart'


const Product_list = () => {
  const { products } = usecart();

  const [searchterm, setSearchterm] = useState("")
  const [selectedcategory, setSelectedcategory] = useState("All")
  const filterproduct = products.filter((product) => {
    const matchsearch = product.name.toLowerCase().includes(searchterm.toLowerCase()) || product.description.toLowerCase().includes(searchterm.toLowerCase());
    const matchcategory = selectedcategory === "All" || product.category === selectedcategory;

    return matchsearch && matchcategory;


  })

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <Searchfilter searchterm={searchterm} setSearchterm={setSearchterm} />
        <Categoryfilter
          selectedcategory={selectedcategory}
          setSelectedcategory={setSelectedcategory}
        />
        <h2 className='text-2xl font-medium mx-auto px-4 md:px-3 pt-4'>Featured Gear ({products.length} Items)</h2>

        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>

          {filterproduct.map((product, index) => <Productcart key={index} product={product} />)}

        </div>





      </div>
    </>
  )
}
export default Product_list