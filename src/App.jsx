import { useEffect } from 'react'
import './App.css';
import { getRandomDimension } from './utils/random';
import axios from 'axios';
import { useState } from 'react';
import Location from './components/Location';
import ResidentList from './components/ResidentList';

function App() {

    const [location, setLocation] = useState(null);

useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err));
}, []);

  return (

    <main className=' min-h-screen text-white bg-[url("/public/images/image.jpg")]'>

        <Location location={location} setLocation={setLocation}/>

        <ResidentList location={location} residents={location?.residents}/>
    </main>
  );
}

export default App
