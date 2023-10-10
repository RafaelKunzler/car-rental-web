import BackToTopButton from '@/components/BackToTopButton'
import CallUsBanner from '@/components/CallUsBanner'
import Footer from '@/components/Footer'
import TeamCard from '@/components/TeamCard'

const Team = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-16 sm:px-32 md:px-16 lg:px-24">
        <TeamCard
          image = "./team/luke.png"
          name = "Luke Miller"
          job = "Salesman"
        />

        <TeamCard
          image = "./team/michael.png"
          name = "Michael Diaz"
          job = "Business Owner"
        />

        <TeamCard
          image = "./team/brianna.png"
          name = "Brianna Ross"
          job = "Photographer"
        />

        <TeamCard
          image = "./team/lauren.png"
          name = "Lauren Rivera"
          job = "Car Detailist"
        />

        <TeamCard
          image = "./team/martin.png"
          name = "Martin Rizz"
          job = "Mechanic"
        />

        <TeamCard
          image = "./team/caitlyn.png"
          name = "Caitlyn Hunt"
          job = "Manager"
        />
      </div>

      <CallUsBanner />
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default Team