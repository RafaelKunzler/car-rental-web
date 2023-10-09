import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { ChevronDownIcon } from '@radix-ui/react-icons';

import { useState } from "react"
  

const Faq = () => {

    const [open, setOpen] = useState('1')

  return (   
    
    <div className=''>
        <Accordion type="single" collapsible={false} defaultValue="item1" className="py-20 px-6 lg:px-80 ">
            <div className="shadow-lg flex-wrap">

                <AccordionItem  value="item1"  onClick={() => setOpen("1")} >
                    <AccordionTrigger className={open == "1" ? 'bg-orange-600 text-white  hover:no-underline ' : 'hover:no-underline'}>
                        <div className="flex ">
                            <h3 className="text-2xl ">1. What is special about comparing rental car deals?</h3>
                        </div>  
                    </AccordionTrigger>

                    <AccordionContent>
                            <p className="px-12 py-8 text-lg text-muted-foreground">Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item2" onClick={() => setOpen("2")}>
                    <AccordionTrigger className={open == "2" ? 'bg-orange-600 text-white hover:no-underline flex' : 'hover:no-underline'}>
                        <div className="flex">
                            <h3 className="text-2xl  ">2. How do I find the car rental deals?</h3>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-12 py-8 text-lg text-muted-foreground">
                        You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item3" onClick={() => setOpen("3")}>
                    <AccordionTrigger className={open == "3" ? 'bg-orange-600 text-white hover:no-underline' : 'hover:no-underline'}>
                        <div className="flex ">
                            <h3 className="text-2xl ">3. How do I find such low rental car prices?</h3>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-12 py-8 text-lg text-muted-foreground">
                        Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
                    </AccordionContent>
                </AccordionItem>
            </div>
                    
        </Accordion>  

    </div>
            
              
            
            
   
  )
}

export default Faq