import { PhoneCall, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

const Footer = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setEmail("")
    }

  return (    

    <div className="flex px-24 py-32 justify-between gap-40">
        <div className="flex flex-col gap-8 w-1/4">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl"><span className="text-3xl font-bold">CAR</span> Rental</h2>
                <p className="text-muted-foreground text-2xl">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="flex font-bold text-xl"><PhoneCall /> (12) 3456-7890 </h3>
                <h3 className="flex font-bold text-xl"><Mail /> carrental@gmail.com</h3>
            </div>
        </div>

        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">COMPANY</h2>
            <ul className="flex flex-col gap-4 text-xl">
                <li className=" hover:text-orange-600"><a href="">Guarulhos</a></li>
                <li className=" hover:text-orange-600"><a href="">Careers</a></li>
                <li className=" hover:text-orange-600"><a href="">Mobile</a></li>
                <li className=" hover:text-orange-600"><a href="">Blog</a></li>
                <li className=" hover:text-orange-600"><a href="">How we work</a></li>
            </ul>
        </div>

        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">WORKING HOURS</h2>
            <ul className="flex flex-col gap-4 text-xl">
                <li>Mon - Fri: 9:00 - 21:00</li>
                <li>Sat: 9:00 - 19:00</li>
                <li>Sun: Closed</li>
            </ul>
        </div>

        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">SUBSCRIPTION</h2>
            <p className="flex flex-col gap-4 text-xl">Subscribe your Email address for latest news & updates.</p>
            <form className='flex flex-col gap-4'onSubmit={handleSubmit}>
                <label>
                    <Input className='h-16 text-center text-xl' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter Email Address"/>
                </label>
                <Button className='w-full text-xl p-8' type='submit'>Submit</Button>
            </form>
        </div>


    </div>
    
  )
}

export default Footer