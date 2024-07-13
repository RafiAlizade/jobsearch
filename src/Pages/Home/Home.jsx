import Navbar from './../../Components/Navbar/Navbar'
import Hero from './../../Components/Hero/Hero'
import GrowedCompanies from './../../Components/HelpedGrow/HelpedGrow'
import ExploreCategories from './../../Components/ExploreCategory/ExploreCategory'
import HomeAnnounce from './../../Components/HomeAnnounce/HomeAnnounce'
import HomeFeaturedJobs from '../../Components/HomeFeaturedJobs/FeaturedJobs'
import HomeLatestJobs from '../../Components/HomeLatestJobs/LatestJobs'
import Footer from './../../Components/Footer/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <main className="js__main">
      <Hero />
      <GrowedCompanies />
      <ExploreCategories />
      <HomeAnnounce />
      <HomeFeaturedJobs />
      <HomeLatestJobs />
    </main>
    <Footer />
    </>
  )
}

export default Home