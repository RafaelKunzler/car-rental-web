/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,    
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Testimonial = (props) => {
  return (
    <div className="w-2/4 ">
        <Card>

            <CardContent className='flex flex-col p-16 h-[450px] justify-between'>                
                    <h3 className="text-3xl font-semibold">{props.text}</h3>
                    <div className="flex  items-center justify-between ">
                        <div className="flex gap-6">
                            <Avatar className='w-20 h-20'>
                                <AvatarImage  src={props.img}/>
                                <AvatarFallback>LU</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center ">
                                <div>
                                    <h3 className="font-bold text-xl">{props.name}</h3>
                                    <p className="font-medium text-lg">{props.city}</p>
                                </div>                        
                            </div>
                        </div>                    
                        <span className="text-6xl text-orange-600">{props.grade}</span>                
                    </div>
            </CardContent>

        </Card>
    </div>
  )
}

export default Testimonial