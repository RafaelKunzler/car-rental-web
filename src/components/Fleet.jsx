import { useState } from 'react'
import { Button } from './ui/button'
import FleetCarInfo from './FleetCarInfo'

const Fleet = () => {

    const [selectedCar, setSelectedCar] = useState("a1")
  return (    
        <div className='px-4 py-12 flex flex-wrap xl:flex-nowrap mb-20 lg:py-0 lg:items-center lg:p-24 lg:justify-between ' >
            <div className='w-full lg:w-fit '>

            <ul className='flex flex-col gap-4'>
                <li>
                    <Button onClick={() => setSelectedCar("a1")}  className={selectedCar == "a1" ? 'bg-orange-500 text-white p-8 text-2xl font-bold lg:w-72 w-full ' : 'bg-slate-200 text-black p-8 text-2xl font-bold lg:w-72 w-full '} >Audi A1 S-Line</Button>                    
                </li>
                <li>
                    <Button onClick={() => setSelectedCar("golf6")} className={selectedCar == "golf6" ? 'bg-orange-500 text-white p-8 text-2xl font-bold lg:w-72 w-full' : 'bg-slate-200 text-black p-8 text-2xl font-bold lg:w-72 w-full'} >VW Golf 6</Button>
                </li>
                <li>
                    <Button onClick={() => setSelectedCar("camry")} className={selectedCar == "camry" ? 'bg-orange-500 text-white p-8 text-2xl font-bold lg:w-72 w-full' : 'bg-slate-200 text-black p-8 text-2xl font-bold lg:w-72 w-full'}>Toyota Camry</Button>
                </li>
                <li>
                    <Button onClick={() => setSelectedCar("320")} className={selectedCar == "320" ? 'bg-orange-500 text-white p-8 text-2xl font-bold lg:w-72 w-full' : 'bg-slate-200 text-black p-8 text-2xl font-bold lg:w-72 w-full'}>BMW 320 ModernLine</Button>
                </li>
                <li>
                    <Button onClick={() => setSelectedCar("glk")} className={selectedCar == "glk" ? 'bg-orange-500 text-white p-8 text-2xl font-bold lg:w-72 w-full' : 'bg-slate-200 text-black p-8 text-2xl font-bold lg:w-72 w-full'}>Mercedez-Benz GLK</Button>
                </li>
                <li>
                    <Button onClick={() => setSelectedCar("passat")} className={selectedCar == "passat" ? 'bg-orange-500 text-white p-8 text-2xl font-bold lg:w-72 w-full' : 'bg-slate-200 text-black p-8 text-2xl font-bold lg:w-72 w-full'}>VW Passat CC</Button>
                </li>
            </ul>
            </div>
            <div className='lg:-mt-40 '>
            {selectedCar === "a1" && (
                <FleetCarInfo 
                    img = "/cars/audi-a1.jpg"
                    price = {45}
                    model = "A1 S-Line"
                    mark = "Audi"
                    year = "2012"
                    doors = "4/5"
                    ac = "Yes"
                    transmission = "Manual"
                    fuel = "Gasoline"
                />                
            )}

            {selectedCar === "golf6" && (
                <FleetCarInfo 
                    img = "/cars/golf6.jpg"
                    price = {37}
                    model = "Golf 6"
                    mark = "Volkswagen"
                    year = "2008"
                    doors = "4/5"
                    ac = "Yes"
                    transmission = "Manual"
                    fuel = "Diesel"
                />                
            )}

            {selectedCar === "camry" && (
                <FleetCarInfo 
                    img = "/cars/toyotacamry.jpg"
                    price = {30}
                    model = "Camry"
                    mark = "Toyota"
                    year = "2006"
                    doors = "4/5"
                    ac = "Yes"
                    transmission = "Automatic"
                    fuel = "Hybrid"
                />                
            )}

            {selectedCar === "320" && (
                <FleetCarInfo 
                    img = "/cars/bmw320.jpg"
                    price = {35}
                    model = "320"
                    mark = "BMW"
                    year = "2012"
                    doors = "4/5"
                    ac = "Yes"
                    transmission = "Manual"
                    fuel = "Diesel"
                />                
            )}

            {selectedCar === "glk" && (
                <FleetCarInfo 
                    img = "/cars/benzglk.jpg"
                    price = {50}
                    model = "GLK"
                    mark = "Mercedes"
                    year = "2006"
                    doors = "4/5"
                    ac = "Yes"
                    transmission = "Manual"
                    fuel = "Diesel"
                />                  
            )}

            {selectedCar === "passat" && (
                <FleetCarInfo 
                    img = "/cars/VWpassat.jpg"
                    price = {25}
                    model = "Passat CC"
                    mark = "Volkswagen"
                    year = "2008"
                    doors = "4/5"
                    ac = "Yes"
                    transmission = "Automatic"
                    fuel = "Gasoline"
                />              
            )}

        </div>
        </div>
  )
}

export default Fleet