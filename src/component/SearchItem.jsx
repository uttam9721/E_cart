import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
const SearchItem = () => {
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = ()=>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLocaleLowerCase()));
      setFilterData(data)
    }
    filteredData();
   
  }, [term])
  
  // console.log(useParams)
  return (
   <Product items={filterData}/>
  )
}

export default SearchItem
