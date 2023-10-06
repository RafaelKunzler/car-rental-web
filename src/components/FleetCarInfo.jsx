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
  

const FleetCarInfo = () => {

    const car = [{
        model: "A1 S-Line",
        mark: "Audi",
        year: "2012",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Gasoline",
    }]

  return (
    <div className="flex h-96 gap-x-52">
        <img src="/cars/audi-a1.jpg" alt="" />

        <div >
            <Table className="text-xl">
                <TableCaption><Button>RESERVE NOW</Button></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Model</TableHead> 
                        <TableCell>A1 S-Line</TableCell>                                                    
                    </TableRow> 
                    <TableRow>
                        <TableHead>Mark</TableHead>
                        <TableCell>Audi</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Year</TableHead>
                        <TableCell>2012</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Doors</TableHead>
                        <TableCell>4/5</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>AC</TableHead>
                        <TableCell>Yes</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Transmission</TableHead> 
                        <TableCell>Manual</TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableHead>Fuel</TableHead>
                        <TableCell>Gasoline</TableCell> 
                    </TableRow>
                </TableHeader>
                

            </Table>
        </div>

    </div>
  )
}

export default FleetCarInfo