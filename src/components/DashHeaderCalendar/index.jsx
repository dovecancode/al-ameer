import { Box, Typography } from '@mui/material'
import { FaCalendarAlt } from 'react-icons/fa'
import { todaysDate } from '../../utils/helper'
import {
  Calendar,
  CalendarContainer,
  DateStack,
} from './CurrentDateDisplay.element'

console.log(todaysDate())
function DashHeaderCalendar() {
  return (
    <CalendarContainer className="calendar">
      <DateStack direction="row">
        <Box>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontSize: '1.4rem' }}
          >
            Today&apos;s Date
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }} variant="h3">
            {todaysDate()}
          </Typography>
        </Box>
        <Calendar>
          <FaCalendarAlt size={20} />
        </Calendar>
      </DateStack>
    </CalendarContainer>
  )
}

export default DashHeaderCalendar
