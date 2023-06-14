import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Resident = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive" : "bg-green-500",
        "Dead" : "bg-red-500",
        "unknown" : "bg-gray-400"
    }

    useEffect(() => {

        axios.get(residentUrl)
            .then(({data}) => setResidentInfo(data))
            .catch((err) => console.log(err))
    }, [])

  return (
    <article className='resident_Info pb-3 rounded-md'>
        <div className='relative'>
            <img src={residentInfo?.image} alt="" className='images_list rounded-sm'/>
            <div className='statusLive flex items-center gap-2 justify-center absolute bottom-3 left-[50%] -translate-x-[50%]'>
            <div className= {`h-3  aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
            {residentInfo?.status}
            </div>
        </div>

        <section className='residentDataList'>
            <h4 className='px-2 text-justify text-xl'>{residentInfo?.name}</h4>
            <ul>
                <li className='list_one px-2 text-gray-500 text-xs py-1'>Spcecies: <span className='span_one text-white text-xs text-right'>{residentInfo?.species}</span></li>
                <li className='px-2 text-gray-500 text-xs py-1'>Origin: <span className='text-white text-xs text-right'>{residentInfo?.origin.name}</span></li>
                <li className='px-2 text-gray-500 text-xs py-1'>T text-xsimes appear: <span className='text-white text-xs'>{residentInfo?.episode.length}</span></li>
            </ul>
        </section>
    </article>
            
  );
}

export default Resident