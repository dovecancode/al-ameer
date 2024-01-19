import { Container } from '@mui/material'
import DashHeaderCalendar from '../DashHeaderCalendar'
import DashSearchBox from '../DashSearchBox'
import { Header, HeaderStack } from './DashHeader.elements'

function DashHeader() {
  return (
    <Header>
      <Container maxWidth={false}>
        <HeaderStack className="header-stack" direction="row">
          <DashSearchBox />
          <DashHeaderCalendar />
        </HeaderStack>
      </Container>
    </Header>
  )
}

export default DashHeader
