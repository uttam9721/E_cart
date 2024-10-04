import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'

const Navbar = ({setData,cart}) => {
  const navigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory =(category)=>{
    const element = items.filter(product=>product.category === category)
    // console.log(element);
    setData(element);
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigation(`/search/${searchTerm}`)
    setSearchTerm(" ");

  }
  
  return (
    <>
     <header className='sticky-top'>
        <div className="nav_bar">
            <Link to={'/'} className="brand"><h1>E-Cart</h1></Link>

            <form onSubmit={handleSubmit} className="search-bar">
                <input 
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)}
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
        </div>
        <div className="nav-bar-wrapper">
            <div  className="items">Filter by</div>
            <div  onClick={()=>setData(items)}  className="items">No Filter</div>
            <div  onClick={()=>filterByCategory('mobiles')} className="items">Mobile</div>
            <div  onClick={()=>filterByCategory('laptops')} className="items">Laptop</div>
            <div  onClick={()=>filterByCategory('tablets')} className="items">Tablets</div>
            {/* <div className="items">29999</div>
            <div className="items">29999</div>
            <div className="items">29999</div>
            <div className="items">29999</div>
            <div className="items">29999</div> */}
           
        </div>
     </header>
    </>
  )
}

export default Navbar
