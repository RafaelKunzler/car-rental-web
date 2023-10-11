import BackToTopButton from "@/components/BackToTopButton"
import CallUsBanner from "@/components/CallUsBanner"
import Footer from "@/components/Footer"
import ModelCard from "@/components/ModelCard"


const Models = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-16 sm:px-32 md:px-16 lg:px-24">
        <ModelCard 
          image = '/carModels/audiA1.png'
          car = "A1"
          price = "45"
          mark = "Audi"
          doors = "4/5"
          transmission = "Manual"
          fuel = "Gasoline"
        />

        <ModelCard 
          image = '/carModels/golf6.png'
          car = "Golf 6"
          price = "37"
          mark = "VW"
          doors = "4/5"
          transmission = "Manual"
          fuel = "Diesel"
        />

        <ModelCard 
          image = '/carModels/camry.png'
          car = "Camry"
          price = "30"
          mark = "Toyota"
          doors = "4/5"
          transmission = "Automatic"
          fuel = "Hybrid"
        />

        <ModelCard 
          image = '/carModels/320.png'
          car = "320"
          price = "35"
          mark = "BMW"
          doors = "4/5"
          transmission = "Manual"
          fuel = "Diesel"
        />

        <ModelCard 
          image = '/carModels/glk.png'
          car = "GLK"
          price = "50"
          mark = "Mercedes"
          doors = "4/5"
          transmission = "Manual"
          fuel = "Diesel"
        />

        <ModelCard 
          image = '/carModels/passat.png'
          car = "Passat CC"
          price = "25"
          mark = "Volkswagen"
          doors = "4/5"
          transmission = "Automatic"
          fuel = "Gasoline"
        />

      </div>

      <CallUsBanner />

      <Footer />

      <BackToTopButton />
    </div>
  )
}

export default Models