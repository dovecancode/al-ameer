import DashCard from '../DashCard'
import { StatusCardSection } from './DashCard.elements'
import statusData from './data'

function DashCards() {
  return (
    <StatusCardSection direction={{ xs: 'column', sm: 'row' }}>
      {statusData.map((item, idx) => (
        <DashCard key={`item-${idx}`} {...item} />
      ))}
      {/* <DashCard />
      <DashCard />
      <DashCard />
      <DashCard /> */}
    </StatusCardSection>
  )
}

export default DashCards
