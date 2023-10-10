import BackToTopButton from '@/components/BackToTopButton'
import CallUsBanner from '@/components/CallUsBanner'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, PhoneCall } from 'lucide-react'


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-white h-screen">
      <div className='flex flex-col items-center top-0 text-center justify-around content-center gap-24 lg:flex-row py-12 lg:px-24 lg:text-left lg:justify-normal'>
        <div className=' flex flex-col gap-7 lg:w-1/3'>
          <h1 className="font-black text-5xl">Need additional information?</h1>
          <p className="text-md text-gray-600 px-10 lg:p-0">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <div className='flex flex-col gap-4'>
            <p className="flex gap-3 font-bold text-lg justify-center lg:justify-start"><PhoneCall /> (12) 3456-7890 </p>
            <p className="flex gap-3 font-bold text-lg justify-center lg:justify-start"><Mail /> carrental@gmail.com</p>
            <p className="flex gap-3 font-bold text-lg justify-center lg:justify-start"><MapPin /> Guarulhos, Brazil </p>
          </div>
        </div>
        <div className='w-full px-10 lg:w-2/3'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
            <label className='flex flex-col text-lg gap-4' >
              
              <p className='font-semibold'>Full Name <span className='text-orange-600'>*</span></p>
              <input type="text" placeholder='Rafael Rodrigues' className='bg-slate-200  px-8 py-2'/>
              
            </label>

            <label className='flex flex-col text-lg gap-4 ' >
              
              <p className='font-semibold'>Email <span className='text-orange-600'>*</span></p>
              <input type="text" placeholder='youremail@example.com' className='bg-slate-200  px-8 py-2'/>
              
            </label>

            <div className='flex flex-col text-lg gap-4'>
              
              <label className='font-semibold'>Tell us about it <span className='text-orange-600'>*</span></label>
              <textarea placeholder='Write here...' className='bg-slate-200 h-40 px-8 py-2' />
</div>

            <Button className='w-full text-xl p-8' type='submit'><Mail />Send Message</Button>
          </form>
        </div>
      </div>

      <CallUsBanner />
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default Contact