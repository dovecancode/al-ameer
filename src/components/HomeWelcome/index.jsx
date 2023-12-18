import { Container } from '@mui/material'
import SectionHeader from '../shared/SectionHeader'
import { WelcomeHomeSection } from './style'

function HomeWelcome() {
  return (
    <WelcomeHomeSection className="welcome-home">
      <Container>
        <SectionHeader
          headingTag={2}
          spanText="welcome to al-ameer"
          headingText="A Great Place to Receive Care"
        />
      </Container>
    </WelcomeHomeSection>
  )
}

export default HomeWelcome
