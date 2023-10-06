import { Button } from "./ui/button"

import { CheckCircle2, ChevronRight } from 'lucide-react';


const Home = () => {
  return (
    <div className="flex items-center justify-around px-24">
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
  )
}

export default Home