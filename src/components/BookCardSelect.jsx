/* eslint-disable react/prop-types */

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const BookCardSelect = (props) => {
  return (
    <div>
        <label  >
                    <div className="flex">
                        {props.title}
                    </div>
                    <Select>
                    <SelectTrigger className='text-muted-foreground '>
                      <SelectValue placeholder={props.placeholder} />
                    </SelectTrigger>
                    <SelectContent position="popper" className='text-muted-foreground '>
                        {props.options.map((option) => 
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                        )}                         
                    </SelectContent>
                  </Select>
                </label>
    </div>
  )
}

export default BookCardSelect