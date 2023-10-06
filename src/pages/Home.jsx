import VerticalInfo from "@/components/VerticalInfo";
import BookCard from "../components/BookCard";

import { Button } from "../components/ui/button"

import { CheckCircle2, ChevronRight } from 'lucide-react';
import Fleet from "@/components/Fleet";


const Home = () => {
  return (
    <div className="">

      <div className="flex w-full items-center justify-around px-24">
        <div className='flex flex-col gap-8'>
          <h3 className="text-3xl font-semibold">Plan your trip now</h3>
          <h1 className="text-6xl font-black">Save <span className="text-orange-600">big</span> with our car rental</h1>
          <p className="text-lg text-gray-600">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div className="flex gap-8">
            <Button className='flex p-10 gap-4 text-xl font-bold'>
              Book Ride <CheckCircle2/>
              </Button>
            <Button className='flex p-10 gap-4 text-xl font-bold bg-black'>Learn More <ChevronRight /></Button>
          </div>        
        </div>
        <img src="./public/main-car.png" alt="red car" className="w-120 h-120"/>
      </div>     

      <BookCard /> 

      <div className="flex flex-col gap-24 m-28">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="font-bold text-2xl">Plan your trip now</h3>
          <h1 className="font-black text-6xl">Quick & easy car rental</h1>          
        </div>
        <div className="flex gap-48">
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

      <div className="pt-14">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="font-bold text-2xl">Vehicle Models</h3>
          <h1 className="font-black text-6xl">Our rental fleet</h1>
          <p className="text-muted-foreground text-xl max-w-2xl text-center">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <Fleet />
      </div>

      


      
    </div>
  )
}

export default Home