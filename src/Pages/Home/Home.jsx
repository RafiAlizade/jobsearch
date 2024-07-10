import Navbar from './../../Components/Navbar/Navbar'
import Hero from './../../Components/Hero/Hero'
import GrowedCompanies from './../../Components/HelpedGrow/HelpedGrow'
import ExploreCategories from './../../Components/ExploreCategory/ExploreCategory'

function Home() {
  return (
    <>
    <Navbar />
    <main className="app__main">
      <Hero />
      <GrowedCompanies />
      <ExploreCategories />
    </main>
    </>
  )
}

export default Home