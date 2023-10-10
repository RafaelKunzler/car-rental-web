/* eslint-disable react/prop-types */
import {
    Card,
    CardContent,  
} from "@/components/ui/card"

const TeamCard = (props) => {
  return (
    <div>
        <Card>
            <CardContent className="flex flex-col gap-8 px-0">
                <img src={props.image} alt="" />
                <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-bold text-2xl">{props.name}</h3>
                    <p className="font-medium text-muted-foreground">{props.job}</p>
                </div>

            </CardContent>
        </Card>
    </div>
  )
}

export default TeamCard