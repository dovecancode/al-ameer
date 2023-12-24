import { Container } from '@mui/material'
import SectionHeader from '../shared/SectionHeader'
import { ContactSection } from './style'

function HomeContact() {
  return (
    <ContactSection>
      <Container>
        <SectionHeader
          position="center"
          spanText="get in touch"
          headingText="Contact"
          headingTag={2}
        />
      </Container>
    </ContactSection>
  )
}

export default HomeContact
