import React from 'react';
import award from '../assests/award.png';
import ceremony from '../assests/ceremony.png';
import products from '../assests/products.png';

const MidBody = () => {
  return (
    <>
    <div className='body'>
        <div className='container '>
            <div>
            <   img src={award} alt = "award" className="award"/>
            </div>
            <div className="ceremony">
                <h4><b>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h4>
                <ul>
                    <li>C.R.I's energy efficient products are well recogonized by various Government 
                        Institutions, as trustworthy products for various projets accross the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL{"(Energy Efficient Service Limited)"}
                    to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel</li>
                </ul>
                <img src={ceremony} alt = "ceremony" className='ceremony'/>
                <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. Selvaraj, Joint Managing Director
                of C.R.I. Group recieved the award from Smt. Sumitra Mahajan,Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
        <div className='mid-text'>
            INSTALL OVER 10 LAKHS STAR RATED PUMPSETS ACCROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </div>
        <div className='div-product'>
            <img src={products} alt = "products" className='products'/>
        </div>
    </div>
    </>
  )
}

export default MidBody