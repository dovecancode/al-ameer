import DashHeaderCalendar from '../DashHeaderCalendar'
import DashSearchBox from '../DashSearchBox'
import { Header, HeaderStack } from './DashHeader.elements'

function DashHeader() {
  return (
    <Header>
      <HeaderStack className="header-stack" direction="row">
        <DashSearchBox />
        <DashHeaderCalendar />
      </HeaderStack>
    </Header>
  )
}

export default DashHeader
