import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card" 


import { Button } from "./ui/button"    


import { CalendarDays, Car, MapPin } from "lucide-react"

import { useState, useEffect } from "react"
import BookCardSelect from "./BookCardSelect"
import BookCardCalendar from "./BookCardCalendar"

const BookCard = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="m-24">
        <Card className='p-8 shadow-2xl '>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Book a car</CardTitle>
        </CardHeader>
        <CardContent className=" text-2xl font-semibold ">
          <form onSubmit={handleSubmit}>            

            <div className="grid grid-cols-3 gap-8">

                <div className="flex flex-col gap-4 ">
                    <h1 className="flex"><Car />Select Your Car Type<span className="text-orange-600">*</span></h1>
                    <BookCardSelect                 
                        placeholder='Select Your Car Type'
                        options={[
                            'Audi A1 S-Line',
                            'VW Golf 6',
                            'Toyota Camry',
                            'BMW 320 ModernLine',
                            'Mercedez-Benz GLK',
                            'VW Passat CC'
                        ]}                
                    />
                </div>  

                <div className="flex flex-col gap-4">
                    <h1 className="flex"><MapPin />Pick-up<span className="text-orange-600">*</span></h1>
                    <BookCardSelect                 
                        placeholder='Select pick up location'
                        options={[
                            'Guarulhos',
                            'São Paulo',
                            'Rio de Janeiro',
                            'Ubatuba',
                            'Fortaleza',
                            'Belo Horizonte'
                        ]}                
                    />
                </div> 

                <div className="flex flex-col gap-4">
                    <h1 className="flex"><MapPin />Drop-of<span className="text-orange-600">*</span></h1>
                    <BookCardSelect                 
                        placeholder='Select drop of location'
                        options={[
                            'Guarulhos',
                            'São Paulo',
                            'Rio de Janeiro',
                            'Ubatuba',
                            'Fortaleza',
                            'Belo Horizonte'
                        ]}                
                    />
                </div>             

                <div >
                    <label className="flex flex-col gap-4">
                        <div className="flex">
                            <CalendarDays />Pick-up<span className="text-orange-600">*</span>
                        </div>
                        <BookCardCalendar />
                    </label>
                </div>

                <div >
                    <label className="flex flex-col gap-4">
                        <div className="flex">
                            <CalendarDays />Drop-of<span className="text-orange-600">*</span>
                        </div>
                        <BookCardCalendar />
                    </label>
                </div>

                <Button className='self-end h-20 text-2xl'>Search</Button>              
              
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default BookCard