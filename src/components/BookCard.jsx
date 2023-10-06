import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"

import { CalendarDays, Car, MapPin, Calendar as CalendarIcon } from "lucide-react"


import { format } from "date-fns"
import { useState } from "react"

const BookCard = () => {

    const [pickUpDate, setPickUpDate] = useState()
    const [dropOfDate, setDropOfDate] = useState()
    const [pickUpCalendarOpen, setPickUpCalendarOpen] = useState(false)
    const [dropOfCalendarOpen, setDropOfCalendarOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <Card className=''>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Book a car</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div >
              <div >
                <label  >
                    <div className="flex">
                        <Car />Select Your Car Type<span className="text-orange-600">*</span>
                    </div>
                    <Select>
                    <SelectTrigger className='text-muted-foreground'>
                      <SelectValue placeholder="Select your car type" />
                    </SelectTrigger>
                    <SelectContent position="popper" className='text-muted-foreground'>
                      <SelectItem value="A1">Audi A1 S-Line</SelectItem>
                      <SelectItem value="Golf">VW Golf 6</SelectItem>
                      <SelectItem value="Camry">Toyota Camry</SelectItem>
                      <SelectItem value="320">BMW 320 ModernLine</SelectItem>
                      <SelectItem value="GLK">Mercedez-Benz GLK</SelectItem>
                      <SelectItem value="Passat">VW Passat CC</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
              </div>

              <div>
                <label>
                    <div className="flex">
                    <MapPin />Pick-up<span className="text-orange-600">*</span>
                    </div>
                  <Select>
                    <SelectTrigger className='text-muted-foreground'>
                      <SelectValue placeholder="Select pick up location"/>
                    </SelectTrigger>
                    <SelectContent position="popper" className='text-muted-foreground'>
                      <SelectItem value="Guarulhos">Guarulhos</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="Tokyo">Tokyo</SelectItem>                      
                      <SelectItem value="Paris">Paris</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
              </div>

              <div>
                <label>
                    <div className="flex">
                        <MapPin />Drop-of<span className="text-orange-600">*</span>
                    </div>
                  <Select >
                    <SelectTrigger className='text-muted-foreground'>
                      <SelectValue placeholder="Select drop off location"/>
                    </SelectTrigger>
                    <SelectContent position="popper" className='text-muted-foreground'>
                      <SelectItem value="Guarulhos">Guarulhos</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="Tokyo">Tokyo</SelectItem>                      
                      <SelectItem value="Paris">Paris</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
              </div>

              <div>
                <label>
                    <div className="flex">
                        <CalendarDays />Pick-up<span className="text-orange-600">*</span>
                    </div>
                    <Popover open={pickUpCalendarOpen} onOpenChange={setPickUpCalendarOpen}>
                        <PopoverTrigger asChild>
                            <Button className='text-muted-foreground' variant={"outline"}>
                                {pickUpDate ? format(pickUpDate, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode='single'
                                selected={pickUpDate}
                                onSelect={(e) => {
                                    setPickUpDate(e);
                                    setPickUpCalendarOpen(false)  
                                    }
                                }                                                        
                            />    
                            </PopoverContent>
                    </Popover>
                </label>
              </div>

              <div>
                <label>
                    <div className="flex">
                        <CalendarDays />Drop-of<span className="text-orange-600">*</span>
                    </div>
                    <Popover open={dropOfCalendarOpen} onOpenChange={setDropOfCalendarOpen}>
                        <PopoverTrigger asChild>
                            <Button className='text-muted-foreground' variant={"outline"}>
                                {dropOfDate ? format(dropOfDate, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode='single'
                                selected={pickUpDate}
                                onSelect={(e) => {
                                    setDropOfDate(e);
                                    setDropOfCalendarOpen(false)  
                                    }
                                }                                                        
                            />    
                            </PopoverContent>
                    </Popover>
                </label>
              </div>

              <Button>Search</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default BookCard