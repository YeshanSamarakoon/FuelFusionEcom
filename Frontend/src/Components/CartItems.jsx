import React, { useContext } from 'react'
import { Shop } from '../context/Shop'
import { TfiTrash } from "react-icons/tfi";

const CartItems = () => {
    const { all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(Shop);

    
        
    return (
        <section className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 text-left">Products</th>
                                <th className="py-2 px-4 text-left">Title</th>
                                <th className="py-2 px-4 text-left">Price</th>
                                <th className="py-2 px-4 text-left">Quantity</th>
                                <th className="py-2 px-4 text-left">Total</th>
                                <th className="py-2 px-4 text-left">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_products.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return (
                                        <tr key={product.id} className="border-b">
                                            <td className="py-2 px-4">
                                                <img src={product.image} alt={product.name} className="h-14 w-14 object-cover" />
                                            </td>
                                            <td className="py-2 px-4">{product.name}</td>
                                            <td className="py-2 px-4">${product.new_price}</td>
                                            <td className="py-2 px-4">{cartItems[product.id]}</td>
                                            <td className="py-2 px-4">${product.new_price * cartItems[product.id]}</td>
                                            <td className="py-2 px-4">
                                                <button onClick={() => removeFromCart(product.id)} className="text-secondary hover:text-red-700">
                                                    <TfiTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="md:w-1/3">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h4 className="text-xl font-bold mb-4">Summary</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between"> 
                                <h4>Subtotal:</h4>
                                <h4>${getTotalCartAmount()}</h4>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <h4>Shipping fee:</h4>
                                <h4>Free</h4>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold">
                                <h4>Total:</h4>
                                <h4>${getTotalCartAmount()}</h4>
                            </div>
                        </div>
                        <button className='ml-36 mt-8 btn-dark w-44 rounded-xl'>Checkout</button>
                    </div>
                    <div className='flex flex-col gap-10'>
                            <h4 className='bold-20 capitalize mt-10 ml-6'>Enter Coupon Code:</h4>
                            <div className='flexBetween pl-5 h-[3.0rem] bg-white ring-1
                            w-full max-w-[360] rounded-3xl'>
                                <input type="text" placeholder='Coupon Code' className='bg-transparent
                                border-none outline-none'/>
                                <button className='btn-dark rounded-3xl relative right-[0.33rem]'>Submit</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartItems