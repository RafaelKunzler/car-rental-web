/* eslint-disable react/prop-types */
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
  

const FleetCarInfo = (props) => {    

  return (
    <div className="flex h-full mt-4 lg:mt-20  justify-center items-center flex-wrap md:flex-nowrap  lg:justify-between ">
        
        <div>
            <img src={props.img} alt="" className="px-16  lg:mt-24 lg:max-w-xl hidden sm:block lg:hidden xl:block "/>
        </div>

        <div className="mt-7 lg:mt-28 ">
            <Table className="text-xl text-right">
                <TableCaption><Button className='w-full py-6 shadow-2xl text-2xl font-extrabold lg:py-10 lg:w-60'>RESERVE NOW</Button></TableCaption>
                <TableHeader className=''>
                    <TableRow>
                        <TableCell className='text-center bg-orange-500 xl:w-screen'>
                            <span className="font-extrabold text-3xl">${props.price}</span> / rent per day
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Model</TableHead> 
                        <TableCell className='xl:w-96 '>{props.model}</TableCell>                                                    
                    </TableRow> 
                    <TableRow>
                        <TableHead>Mark</TableHead>
                        <TableCell>{props.mark}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Year</TableHead>
                        <TableCell>{props.year}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Doors</TableHead>
                        <TableCell>{props.doors}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>AC</TableHead>
                        <TableCell>{props.ac}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Transmission</TableHead> 
                        <TableCell>{props.transmission}</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Fuel</TableHead>
                        <TableCell>{props.fuel}</TableCell> 
                    </TableRow>
                </TableHeader>
                

            </Table>
        </div>

    </div>
  )
}

export default FleetCarInfo