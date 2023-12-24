import Hero from '../../components/Hero'
import HomeBookApptForm from '../../components/HomeBookApptForm'
import HomeContact from '../../components/HomeContact'
import HomeSpecialties from '../../components/HomeSpecialties'
import HomeWelcome from '../../components/HomeWelcome'

function HomeScreen() {
  return (
    <>
      <Hero />
      <HomeWelcome />
      <HomeSpecialties />
      <HomeBookApptForm />
      <HomeContact />
    </>
  )
}

export default HomeScreen
