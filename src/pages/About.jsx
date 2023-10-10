import AboutInfo from "@/components/AboutInfo"
import BackToTopButton from "@/components/BackToTopButton"
import CallUsBanner from "@/components/CallUsBanner"
import Footer from "@/components/Footer"
import VerticalInfo from "@/components/VerticalInfo"

import { FaCarSide  } from "react-icons/fa"
import { GiHomeGarage } from "react-icons/gi"



const About = () => {
  return (

    <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10 lg:p-10 xl:p-20">
          <img src="./about-main.jpg" alt="" className="hidden xl:block"/>
          <div className="flex flex-col gap-6 w-full items-center ">
            <div className="flex flex-col gap-10 text-center lg:text-left ">
              <h3 className=" text-2xl font-bold lg:font-semibold lg:text-3xl">About Company</h3>
              <h1 className="font-black text-6xl">You start the engine and your adventure begins</h1>
              <p className="text-lg text-gray-600 px-8 lg:p-0">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            </div>
            <div className="flex lg:justify-around  gap-4 flex-wrap lg:flex-nowrap ">
              <AboutInfo
                image = {<FaCarSide color='orangered' className="w-10 h-10 sm:w-[68px] sm:h-[68px]"/>}
                number = '20'
                text = 'Car Types'
              />

              <AboutInfo
                image = {<FaCarSide color='orangered' className="w-10 h-10 sm:w-[68px] sm:h-[68px]"/>}
                number = '85'
                text = 'Rental Outlets'
              />

              <AboutInfo
                image = {<GiHomeGarage color='orangered' className="w-10 h-10 sm:w-[68px] sm:h-[68px]" />}
                number = '20'
                text = 'Repair Shop'
              />
            </div>
          </div> 
        </div>

        <div className="">
          <div className="px-4 py-12 flex flex-col gap-24 lg:p-24 ">
            <div className="flex flex-col gap-6 items-center text-center ">
              <h3 className="font-medium text-3xl lg:font-bold">Plan your trip now</h3>
              <h1 className="font-extrabold text-5xl lg:font-black lg:text-6xl">Quick & easy car rental</h1>          
            </div>
          <div className="flex flex-wrap gap-12 lg:gap-48 lg:flex-nowrap ">
            <VerticalInfo
              image='./public/selectCar.png'
              title='Select Car'
              description='We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs'
            />

            <VerticalInfo 
              image='./public/contact.png'
              title='Contact Operator'
              description='Our knowledgeable and friendly operators are always ready to help with any questions or concerns'
            />

            <VerticalInfo 
              image='./public/drive.png'
              title="Let's Drive"
              description="Whether you're hitting the open road, we've got you covered with our wide range of cars"
            />
        </div>        
      </div>
        </div>

      <CallUsBanner />

      <Footer />

      <BackToTopButton />
    </div>

  )
}

export default About