import React from 'react'
import '../App.css'
const Leftbar = () => {
    return (
        <>
        <div className="leftbar-section bg-primary vh-100 text-white d-flex justify-content-between flex-column">
           <div className="left-top">
           <ul className='area my-5 fw-bold'>
                <li className='area1 my-4 '>Dashboard</li>
                <li className='area2 my-4'>Events</li>
                <li className='area3 my-4'>Progress Bar</li>
                <li className='area4 my-4'>Admins</li>
            </ul>
           </div>
           <div className="left-bottom mx-3">
               <span>&copy; hello superstar2021</span>
           </div>

        </div>
            
        </>
    )
}

export default Leftbar

