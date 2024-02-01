import React from 'react'
import Navbar from '../components/Public/Navbar'

import Footer from '../components/Public/Footer'
import HonorsView from '../components/Achivement/HonorsView'
import Hons from '../components/Achivement/Hons2'
import Hons3 from '../components/Achivement/Hons3'
import Hons4 from '../components/Achivement/Hons4'
import Hons5 from '../components/Achivement/Hons5'

const Achivement = () => {
  return (
   <div>

      <Navbar/>
       {/*Start Honours and Achivment */}

       <HonorsView/>
       <Hons/>
       <Hons3/>
       <Hons4/>
       <Hons5/>

       {/*End Honours and Achivment */}


      <Footer/>




    </div>
  
  )
}

export default Achivement
