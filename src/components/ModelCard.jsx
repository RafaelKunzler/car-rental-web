/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,    
    CardFooter,    
} from "@/components/ui/card"

import { Button } from "./ui/button"

const ModelCard = (props) => {
  return (
    <div >
        <Card className=''>
            <CardContent className="flex flex-col gap-6 px-0">
                <img src={props.image} alt="" className="h-60"/>
                <div className="flex flex-col gap-3 px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-2xl">{props.car}</h1>
                        <h1 className=""><span className="flex font-bold text-2xl">${props.price}</span> per day</h1>
                    </div>

                    <div className="flex justify-between text-muted-foreground text-xl">
                        <h3 className="">{props.mark}</h3>
                        <h3>{props.doors}</h3>
                    </div>

                    <div className="flex justify-between text-muted-foreground text-xl">
                        <h3>{props.transmission}</h3>
                        <h3>{props.fuel}</h3>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className='w-full text-2xl p-8 shadow-lg shadow-orange-200'>Book Ride</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ModelCard