import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <header>
        <div className="nav_bar">
            <Link to={'/'} className="brand"><h1>E-Cart</h1></Link>
            <div className="search-bar">
                <input type="text" placeholder='search Products' />
            </div>
            <Link to={'/cart'} className="cart">Cart</Link>
        </div>
        <div className="nav-bar-wrapper">
            <div className="items">Filter by</div>
            <div className="items">No Filter</div>
            <div className="items">Mobile</div>
            <div className="items">Laptop</div>
            <div className="items">Tablets</div>
            <div className="items">29999</div>
            <div className="items">29999</div>
            <div className="items">29999</div>
            <div className="items">29999</div>
            <div className="items">29999</div>
           
        </div>
     </header>
    </>
  )
}

export default Navbar
