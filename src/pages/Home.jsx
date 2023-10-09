import VerticalInfo from "@/components/VerticalInfo";
import BookCard from "../components/BookCard";

import { Button } from "../components/ui/button"

import { CheckCircle2, ChevronRight } from 'lucide-react';
import Fleet from "@/components/Fleet";
import Banner from "@/components/Banner";
import HorizontalInfo from "@/components/HorizontalInfo";
import MainBanner from "@/components/MainBanner";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";



const Home = () => {
  return (
    <div className="">

      

      <div className="flex items-center top-0 text-center justify-around content-center lg:py-12 lg:px-24 lg:text-left lg:justify-normal">
        <div className=' flex flex-col gap-4 px-2 lg:gap-8'>
          <h3 className=" text-2xl font-bold lg:font-semibold lg:text-3xl">Plan your trip now</h3>
          <h1 className="font-black text-6xl">Save <span className="text-orange-600">big</span> with our car rental</h1>
          <p className="text-lg text-gray-600">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div className=" flex gap-8 items-center flex-col lg:flex-row">
            <Button className='flex  p-10 gap-4 text-xl font-bold '>
              Book Ride <CheckCircle2/>
            </Button>
            <Button className='flex p-10 gap-4 text-xl font-bold bg-black'>Learn More <ChevronRight /></Button>
          </div>        
        </div>
        <img src="./public/main-car.png" alt="red car" className="w-[620px] h-[400px] hidden xl:block"/>
      </div>     

      <BookCard /> 

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

      <div className="px-4 py-12 lg:pt-14 lg:p-24 ">
        <MainBanner 
          subTitle = 'Vehicle Models'
          title = 'Our rental fleet'
          description = 'Choose from a variety of our amazing vehicles to rent for your next adventure or business trip'
        />
      </div>
      
      <Fleet />
      
      <Banner />

      <img 
        className="flex items-center py-12 px-28 w-screen"
        src="./3car-main.png" alt="3 cars" 
      />

      <div className="flex justify-between px-24 gap-24 w- flex-wrap lg:flex-nowrap ">
        <div className="flex flex-col gap-10 ">

          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h3 className="font-bold text-2xl lg:text-3xl">Why Choose Us</h3>
            <h1 className="font-bold text-5xl max-w-2xl">Best valued deals you will ever find</h1>
          </div>

            <p className="text-muted-foreground text-lg text-center lg:text-left lg:text-xl max-w-2xl">Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>

          <Button className='flex p-10 gap-4 text-xl font-bold lg:w-60'>Find Details <ChevronRight /></Button>
        </div>

        <div className="flex flex-col gap-9 ">
          <HorizontalInfo
            img = "./car-alert.png"
            title = "Cross Country Drive"
            description = "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
          />           

          <HorizontalInfo
            img = "./coin1.png"
            title = "All Inclusive Pricing"
            description = "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
          /> 

          <HorizontalInfo
            img = "./coin2.png"
            title = "No Hidden Charges"
            description = "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
          />                     
        </div>

      </div>

      <div className=" bg-stone-100">
        <div className="pt-14 mt-28">
            <MainBanner 
              subTitle = 'Reviewed by People'
              title = "Client's Testimonials"
              description = "Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
            />          
        </div>

        <div className="flex py-24 px-12 gap-8 lg:px-32">
          <div className="w-full lg:w-2/4 ">
            <Testimonial 
              img = "./luffy.jpg"
              text = '"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable, perfect for the king of the pirates!"' 
              name = "Monkey D. Luffy"
              city = "Guarulhos"
              grade = "99"
            />

          </div>
          
          <div className="w-2/4 hidden lg:block" >
            <Testimonial  
              img = "./zoro.jpg"
              text = '"The car was in great condition and made our trip even better, even though I got lost. Highly recommend for this car rental website!"' 
              name = "Ronoroa Zoro"
              city = "Rio de Janeiro"
              grade = {99}
            />
          </div>

        </div> 
      </div>

      <div className="pt-14 ">
        <MainBanner
          subTitle = "FAQ"
          title = "Frequently Asked Questions"
          description = "Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries."
        />
        <Faq />
      </div>

      <div className="text-center  lg:text-left lg:bg-[url('./bg-phone.png')] lg:bg-no-repeat lg:bg-cover lg:bg-bottom ">
        <div className="px-4 py-12 flex flex-col gap-10 lg:w-1/2 lg:p-24">
          <h1 className="font-bold text-6xl">Download our app to get most out of it</h1>
          <p className="text-muted-foreground text-xl lg:max-w-2xl">Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
          <div className="flex flex-wrap gap-8 items-center justify-center lg:flex-nowrap">
            <img src="./appstore.svg" alt="" />
            <img src="./googleapp.svg" alt="" />
          </div>
        </div> 
      </div>

      <Footer />

      <BackToTopButton />    
      
    </div>
  )
}

export default Home