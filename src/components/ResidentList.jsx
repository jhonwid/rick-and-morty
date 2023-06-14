import React, { useEffect } from 'react'
import Resident from './Resident';
import { useState } from 'react';
import { paginationLogic } from '../utils/pagination';

const FIRST_PAGE = 1

const ResidentList = ({residents, location}) => {
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

    const {pages, residentsInPage} = paginationLogic(currentPage, residents)

    useEffect(() => {
        setCurrentPage(FIRST_PAGE)
    }, [location])

  return (
    <section className='page px-3'>

    
        {/*//? Lista de residente*/}
        <section className='grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6'>
    
        {/*//! Generar una lista que por cada residente que muestre un texto "Resident"*/}
        {residentsInPage?.map((resident) => (
        <Resident key={resident} residentUrl={resident}/>
        ))}
    </section>

        {/*//TODO Paginacion*/}
        <section className='flex justify-center gap-4 flex-wrap pb-8'>
            {pages.map((page) => (
                <button 
                key={page} 
                onClick={() => setCurrentPage(page)} 
                className={`p-2 px-3 rounded-md ${currentPage === page ? "bg-green-900" : ""}`}>
                {page}
                </button>
            ))}
        </section>
    </section>
  )
}

export default ResidentList     