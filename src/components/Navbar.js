import React from 'react'
import '../index.css'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav  className='bg-blue-500 flex justify-center' >
        <div className='bg-blue-500 w-10/12 h-14 flex items-center justify-around px-10'>
            
            <div className="search flex ic w-2/3 items-center">
                <div className="logo text-white font-medium text-xl italic gap-y-0 mr-3">Flipkart </div>
                <input type="text" name="" id="" placeholder='Search for products, brands and more' className='shadow focus:outline-none px-3 py-1 w-3/5 rounded-tl-sm rounded-bl-sm h-9' />
                <div className="shadow2 bg-white flex items-center justify-center rounded-tr-sm rounded-br-sm pr-3 h-9"><box-icon name='search-alt-2' color='#2874f0' ></box-icon></div>
  
            </div>
            <div className="other flex justify-between w-1/5">
                <div className="name text-white font-medium text-sm ">OM <i class="fas fa-angle-down"></i></div>
                <div className="name text-white font-medium text-sm ">More <i class="fas fa-angle-down"></i></div>
                <div className="name flex items-center text-white font-medium text-sm "><box-icon name='cart-alt' type='solid' color='#fefefe' ></box-icon>Cart</div>
            </div>
            
        </div>
        </nav>
    )
}

export default Navbar
