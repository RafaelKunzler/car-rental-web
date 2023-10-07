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
    <div className="flex h-96 gap-x-32">
        
        <img src={props.img} alt="" className="flex self-center pl-16 mt-20"/>

        <div className="">
            <Table className="text-xl w-96 text-right">
                <TableCaption><Button className='w-80 py-10 shadow-2xl text-2xl font-extrabold mt-4'>RESERVE NOW</Button></TableCaption>
                <TableHeader className=''>
                    <TableRow>
                        <TableCell className='text-center bg-orange-500 w-screen'>
                            <span className="font-extrabold text-3xl">${props.price}</span> / rent per day
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Model</TableHead> 
                        <TableCell className='w-96'>{props.model}</TableCell>                                                    
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