import React from 'react'

import { v4 as uuidv4 } from "uuid";
import Country from './Country';

function Countries(props) {
  return (
    <section className='p-4'>
      <div className=''>
      {
        props.countries.map((country)=>{
            const countryNew = {country, id: uuidv4()}

            return <Country onRemoveCountry={props.onRemoveCountry} {...countryNew} key={countryNew.id} />
        })
      }
      </div>
    </section>
  )
}

export default Countries
