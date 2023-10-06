import { Button } from "./ui/button"    
import { Calendar } from "@/components/ui/calendar"

import { format } from "date-fns"

import { Calendar as CalendarIcon } from "lucide-react"

import { useState } from "react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const BookCardCalendar = () => {

    const [calendarOpen, setCalendarOpen] = useState(false)
    const [date, setDate] = useState()

  return (
    <div>
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
                <Button className='flex gap-72 text-muted-foreground' variant={"outline"}>
                    {date ? format(date, "P") : <span>Pick a date</span>}
                    <CalendarIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto  p-0" align="start">
                <Calendar
                    mode='single'
                    selected={date}
                    onSelect={(e) => {
                        setDate(e);
                        setCalendarOpen(false)  
                        }
                    }                                                        
                />    
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default BookCardCalendar