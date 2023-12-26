import { Box, Container, Typography } from '@mui/material'

import SectionHeader from '../SectionHeader'
import contacts from './data'
import { ContactSection, Item, StackContainer } from './style'

function ContactSectionNode() {
  return (
    <ContactSection>
      <Container>
        <SectionHeader
          position="center"
          spanText="get in touch"
          headingText="Contact"
          headingTag={2}
        />
        <StackContainer direction={{ sm: 'row', md: 'row', lg: 'row' }}>
          {contacts.map((contact) => (
            <Item key={contact.title}>
              <Box sx={{ marginBottom: '1rem' }}> {<contact.icon />}</Box>
              <Typography variant="h5">{contact.title}</Typography>
              <Typography>{contact.infoOne}</Typography>
              <Typography>{contact.infoTwo}</Typography>
            </Item>
          ))}
        </StackContainer>
      </Container>
    </ContactSection>
  )
}

export default ContactSectionNode
