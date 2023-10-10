/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,    
} from "@/components/ui/card"

import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"

const TestimonialCard = (props) => {
  return (
    <>
        <Card>

            <CardContent className='flex flex-col  h-full gap-16 justify-between p-16 lg:gap-0 lg:h-[700px] xl:h-[450px]'>                
                    <h3 className="text-lg lg:text-3xl font-semibold">{props.text}</h3>
                    <div className="flex  items-center justify-between ">
                        <div className="flex gap-6">
                            <Avatar className='w-16 h-16 lg:w-20 lg:h-20'>
                                <AvatarImage  src={props.img}/>                                
                            </Avatar>
                            <div className="flex items-center ">
                                <div>
                                    <h3 className="font-bold text-md lg:text-xl">{props.name}</h3>
                                    <p className="font-medium text-sm lg:text-lg">{props.city}</p>
                                </div>                        
                            </div>
                        </div>                    
                        <span className="hidden lg:block text-6xl text-orange-600">{props.grade}</span>                
                    </div>
            </CardContent>

        </Card>
    </>
  )
}

export default TestimonialCard