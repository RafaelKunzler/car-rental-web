
import MainBanner from './MainBanner'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div className=" bg-stone-100">
        <div className="pt-14 mt-28">
            <MainBanner
              subTitle = 'Reviewed by People'
              title = "Client's Testimonials"
              description = "Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
            />          
        </div>

        <div className="flex py-24 px-12 gap-8 lg:px-32">
          <div className="w-full lg:w-2/4 ">
            <TestimonialCard 
              img = "./luffy.jpg"
              text = '"I rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable, perfect for the king of the pirates!"' 
              name = "Monkey D. Luffy"
              city = "Guarulhos"
              grade = "99"
            />

          </div>
          
          <div className="w-2/4 hidden lg:block" >
            <TestimonialCard  
              img = "./zoro.jpg"
              text = '"The car was in great condition and made our trip even better, even though I got lost. Highly recommend for this car rental website!"' 
              name = "Ronoroa Zoro"
              city = "Rio de Janeiro"
              grade = {99}
            />
          </div>
        </div> 
        
      </div>
  )
}

export default Testimonial