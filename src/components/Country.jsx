import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Country(props) {

    // Destructuring -->
    const {country} = props;
    const {name, flags, population, area, capital} = country;

    const handleRemoveCountry=(name)=>{
      props.onRemoveCountry(name);
    }

  return (
   <article className='inline-block' >
    <div className='bg-slate-500 w-64 mr-5 ml-5 mb-5 p-4 rounded-md hover:scale-105 transition'>
        <img className='w-48 h-36 ml-auto mr-auto' src={flags.png} alt={name.common} />
        <h3 className='mt-4 ml-4 font-bold'>Name : {name.common}</h3>
        <h3 className='ml-4 font-bold'>Capital : {capital}</h3>
        <h3 className='ml-4 font-bold'>Population : {population}</h3>
        <h3 className='ml-4 font-bold'>Area : {area}</h3>
        <button onClick={()=>{ handleRemoveCountry(name.common)}} className='bg-red-700 p-1 text-white rounded-md mt-2 ml-6 hover:bg-red-950'><FaTrashAlt className='inline mb-1 mr-2'/>Remove</button>
        <button className='bg-blue-800 rounded-md p-1 text-white ml-4 hover:bg-blue-950'>View in map</button>
    </div>
   </article>
  )
}

export default Country
