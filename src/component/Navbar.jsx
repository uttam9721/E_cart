import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'

const Navbar = ({ setData, cart }) => {
  const navigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const filterByCategory = (category) => {
    const element = items.filter(product => product.category === category);
    setData(element);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/search/${searchTerm}`);
    setSearchTerm("");
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  }

  return (
    <>
      <header className='sticky-top'>
        <div className="nav_bar">
          <Link to={'/'} className="brand text-black"><h1>E-Cart</h1></Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder='Search Products' />
          </form>

          <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>

          {/* Hamburger icon to toggle the mobile menu */}
          <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile-friendly sliding menu */}
        <div className={`nav-bar-wrapper ${isOpen ? 'show-menu' : ''}`}>
          <div className="items" onClick={() => setData(items)}>No Filter</div>
          <div className="items" onClick={() => filterByCategory('mobiles')}>Mobile</div>
          <div className="items" onClick={() => filterByCategory('laptops')}>Laptop</div>
          <div className="items" onClick={() => filterByCategory('tablets')}>Tablets</div>
        </div>
      </header>

      {/* CSS for mobile-friendly navbar */}
      <style jsx="true">{`
        .nav_bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
        }

        .text-black {
          color: black;
        }

        .hamburger {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-bar-wrapper {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        @media (min-width: 768px) {
          .nav-bar-wrapper .items {
            color: black; /* Ensure black text for all md and larger devices */
          }
          .brand {
            color: black; /* Black text for the brand name */
          }
        }

        @media (max-width: 768px) {
          .nav-bar-wrapper {
            display: none;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            z-index: 999;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease-in-out;
            transform: translateX(-100%);
          }

          .nav-bar-wrapper.show-menu {
            transform: translateX(0);
          }

          .hamburger {
            display: block;
          }

          .items {
            padding: 15px;
            font-size: 18px;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar;
