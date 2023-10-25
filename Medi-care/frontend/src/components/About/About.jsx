

import React from 'react'; 
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
    return ( 
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
           {/* =====about img====  */}
           <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt=""/>
            <div className="absolute z-20 bottom-2 w-[200px] md:w-[300px] right-[-1%] md:right-[-7%]
            lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
            </div>
           </div>

           {/* ====About content ==== */}

           <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nation best</h2>
            <p className="text__para">
            The hardest part of being a doctor is to stay dissociated - that is to care enough without distressing yourself.
            And to know that in spite of your very best efforts, the outcome can be less than desirable. 
            But if the patient understands that you tried your best, then the hardest part can also be the most rewarding.
            </p>

            <p className="text__para mt-[30px]">
            Being a doctor means taking care of those who need you the most.
            Being a doctor means helping save lives. 
            </p>

            <button className="btn">Learn More</button> 
           </div>
         </div>
        </div>  
    </section> 
    );  
};

export default About;