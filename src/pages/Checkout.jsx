import React, { useState } from "react";
import { usecart } from "../context/Cartcontext";
import { MapPin, Package } from "lucide-react";
import { Link } from "react-router-dom";
import Order_confirmation from "./Order_confirmation";

const Checkout = () => {
  const { carttotal, clearCart, cart } = usecart();

  const [deliverydetails, setDeliverydetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isconfirm, setIsconfirm] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;

    setDeliverydetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    clearCart();
    setIsconfirm(true);
  };

  if (isconfirm) {
    return <Order_confirmation deliverydetails={deliverydetails} />;
  }

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">

      <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
        Finalize Order
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Shipping Information */}
        <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">

          <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
            <MapPin className="w-7 h-7 text-orange-500" />
            <span>Shipping Information</span>
          </h3>

          <form className="space-y-5" onSubmit={handlesubmit}>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={deliverydetails.name}
                onChange={handlechange}
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl text-white bg-gray-800"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                Address
              </label>

              <input
                type="text"
                id="address"
                name="address"
                value={deliverydetails.address}
                onChange={handlechange}
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl text-white bg-gray-800"
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                City
              </label>

              <input
                type="text"
                id="city"
                name="city"
                value={deliverydetails.city}
                onChange={handlechange}
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl text-white bg-gray-800"
              />
            </div>

            {/* Pin Code */}
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                Pin Code
              </label>

              <input
                type="number"
                id="zip"
                name="zip"
                value={deliverydetails.zip}
                onChange={handlechange}
                required
                className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl text-white bg-gray-800"
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                className="py-4 w-full bg-orange-600 rounded-full font-extrabold text-xl text-white shadow-lg hover:bg-orange-700 transition"
              >
                Pay and Confirm Order (₹{carttotal.toFixed(2)})
              </button>
            </div>

          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 h-fit">

          <h3 className="text-3xl font-bold text-white mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2">
            <Package className="h-6 w-6 text-orange-400" />
            <span>Summary</span>
          </h3>

          <div className="space-y-4 text-gray-400">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-base border-b border-gray-800 pb-2"
              >
                <span className="truncate text-gray-300">
                  {item.name}
                </span>

                <span className="text-orange-300 font-medium">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}


            <div className="flex justify-between mt-6">
              <span className="text-gray-300">
                Shipping
              </span>

              <span className="font-semibold text-green-400">
                Free
              </span>
            </div>

            <div className="flex justify-between pt-6 mt-6 border-t border-gray-700">
              <span className="text-xl font-extrabold text-white">
                Total Due
              </span>

              <span className="text-3xl font-extrabold text-orange-400">
                ₹{carttotal.toFixed(2)}
              </span>
            </div>
          </div>

       

        </div>

      </div>
    </div>
  );
};

export default Checkout;