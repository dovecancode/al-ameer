import { Grid, Typography } from '@mui/material'
import UpAppointments from '../UpAppointments'
import UpSessions from '../UpSessions'
import { DashServiceStatusSection } from './DashServiceStatus.elements'

function DashServiceStatus() {
  return (
    <DashServiceStatusSection
      className="dash-services-status"
      component="section"
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">
            Upcoming Appointments until Next Friday
          </Typography>
          <Typography variant="body1" sx={{ paddingBlock: '2rem' }}>
            Here&apos;s Quick access to Upcoming Appointments until 7 days More
            details available in @Appointment section.
          </Typography>
          <UpAppointments />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">
            Upcoming Sessions until Next Friday
          </Typography>
          <Typography variant="body1" sx={{ paddingBlock: '2rem' }}>
            Here&apos;s Quick access to Upcoming Sessions that Scheduled until 7
            days... Add,Remove and Many features available in @Schedule section.
          </Typography>
          <UpSessions />
        </Grid>
      </Grid>
    </DashServiceStatusSection>
  )
}

export default DashServiceStatus
