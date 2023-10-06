import { useState } from 'react'
import { Button } from './ui/button'
import FleetCarInfo from './FleetCarInfo'

const Fleet = () => {

    const [selectedCar, setSelectedCar] = useState("Audi")
  return (
    <div className='flex p-24 justify-between items-center'>
        <div >
            <ul className='flex flex-col gap-3'>
                <li>
                    <Button className='bg-slate-200 text-black p-8 text-2xl font-bold w-80'>Audi A1 S-Line</Button>                    
                </li>
                <li>
                    <Button className='bg-slate-200 text-black p-8 text-2xl font-bold w-80'>VW Golf 6</Button>
                </li>
                <li>
                    <Button className='bg-slate-200 text-black p-8 text-2xl font-bold w-80'>Toyota Camry</Button>
                </li>
                <li>
                    <Button className='bg-slate-200 text-black p-8 text-2xl font-bold w-80'>BMW 320 ModernLine</Button>
                </li>
                <li>
                    <Button className='bg-slate-200 text-black p-8 text-2xl font-bold w-80'>Mercedez-Benz GLK</Button>
                </li>
                <li>
                    <Button className='bg-slate-200 text-black p-8 text-2xl font-bold w-80'>VW Passat CC</Button>
                </li>
            </ul>
        </div>

        <div>
            <FleetCarInfo />
        </div>




    </div>
  )
}

export default Fleet