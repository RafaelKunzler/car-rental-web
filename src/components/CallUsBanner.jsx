import { Phone } from "lucide-react"

const CallUsBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full bg-stone-900 py-20 p-6 text-center items-center lg:justify-center lg:gap-16">
          <h1 className="font-black text-4xl text-white">Book a car by getting in touch with us</h1>
          <h3 className="flex items-center gap-4 font-black lg:font-bold text-4xl text-orange-600"><Phone className="w-8 h-8"/>(12) 3456-7869</h3>
    </div>
  )
}

export default CallUsBanner