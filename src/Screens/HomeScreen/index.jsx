import Hero from '../../components/Hero'
import HomeBookApptForm from '../../components/HomeBookApptForm'
import HomeSpecialties from '../../components/HomeSpecialties'
import HomeWelcome from '../../components/HomeWelcome'
import ContactSectionNode from '../../components/shared/ContactSectionNode'

function HomeScreen() {
  return (
    <>
      <Hero />
      <HomeWelcome />
      <HomeSpecialties />
      <HomeBookApptForm />
      <ContactSectionNode />
    </>
  )
}

export default HomeScreen
