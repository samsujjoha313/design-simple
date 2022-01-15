import React from 'react'
import About from './About'
import Header from './Header'
import Leftbar from './Leftbar'

const Navbar = () => {
    return (
        <>
       <Header/>
       <div className="main-section">
        <div className="row">
          <div className="col col-sm-10 col-md-3 col-lg-3  ">
              <Leftbar/>
          </div>
           <div className="col col-sm-3 col-md-9 col-lg-9">
             <About/>  
        </div> 
            
    </div>   
       </div>
            
        </>
    )
}

export default Navbar
