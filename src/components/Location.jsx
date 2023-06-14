import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Location = ({location, setLocation}) => {

    const [controlled, setControlled] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newLocation = (e.target.newLocation.value)

        const URL = `https://rickandmortyapi.com/api/location/3${newLocation}`

        axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) => console.log(err))

    }

    const handleChangeInputControlled = (e) => {
        setControlled(e.target.value)
    }

  return (
    <section className='hero grid'>
    
        {/* //? Input de busqueda*/}
        <form onSubmit={handleSubmit} className='justify-center text-center'>

        <div>
            <img src="/images/logo.png" alt="" />
        </div>
       
            <input value={controlled} onChange={handleChangeInputControlled} id="newLocation" className='search_1 bg-black text-white ' placeholder="Type a location Id..." type="text" />
           
            <button className='button_1 bg-green-400'>Search <i className='bx bx-search'></i></button>
            
        </form>
        

        {/* //* Informacion location*/}
        <section className='text-center pt-10'>
            <h2 className='text-green-400'>¡Wellcome to the crazy universe!</h2>
            {/* <h2>{location?.name}</h2>
            <ul>
                <li>Type: {location?.type}</li>
                <li>Dimension: {location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
            </ul> */}
        </section>
    </section>
  )
}

export default Location