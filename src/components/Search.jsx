import React, { useState, useEffect } from 'react'

function Search(props) {

    const [searchText, setSearchText] = useState("");

    const handleChange=(event)=>{

        setSearchText(event.target.value);
    }

    useEffect(() => {
      props.onSearch(searchText);
    }, [searchText])
    

  return (
    <div className='text-center'>
      <input type="text" placeholder='Search country' value={searchText} onChange={handleChange} className='border-2 border-black p-2 rounded-xl w-72'/>
    </div>
  )
}

export default Search
