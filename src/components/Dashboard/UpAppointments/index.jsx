import styled from '@emotion/styled'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from '@mui/material'
import ButtonLink from '../../shared/ButtonLink'
import { AlNoData } from '../../shared/Icons'

function createData(appointmentNumber, patientName, doctorName, session) {
  return { appointmentNumber, patientName, doctorName, session }
}

const rows = [
  // createData('AL 525698', 'Gordon Dixon', 'Dr. Audrey Martinez', '2024-01-30'),
  // createData(
  //   'AL 658748',
  //   'Christopher Steward',
  //   'Dr. Gabriel Hawkins',
  //   '2024-02-05'
  // ),
  // createData('AL-365215', 'Oscar Barnes', 'Dr. Craig Howell', '2024-02-08'),
  // createData('AL-652565', 'Caleb Mason', 'Dr. Marion Foster', '2024-02-09'),
  // createData('Al-365841', 'Gabriel Lee', 'Dr. Brad Watson', '2024-02-10'),
  // createData('Al-741584', 'Sophie Kennedy', 'Dr. Olivia Wilson', '2024-02-15'),
  // createData('Al-465813', 'Sophie Kennedy', 'Dr. Olivia Wilson', '2024-02-15'),
  // createData('Al-634895', 'Sophie Kennedy', 'Dr. Olivia Wilson', '2024-02-15'),
  // createData('Al-641357', 'Sophie Kennedy', 'Dr. Olivia Wilson', '2024-02-15'),
  // createData('Al-368412', 'Sophie Kennedy', 'Dr. Olivia Wilson', '2024-02-15'),
  // createData('Al-364774', 'Sophie Kennedy', 'Dr. Olivia Wilson', '2024-02-15'),
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottomColor: theme.palette.primary.main,
    fontSize: '1.6rem',
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.2rem',
  },
}))

function UpAppointments() {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Appointment Number</StyledTableCell>
              <StyledTableCell>Patient Name</StyledTableCell>
              <StyledTableCell>Doctor</StyledTableCell>
              <StyledTableCell>Session</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!rows.length &&
              rows.map((row) => (
                <TableRow
                  key={row.appointmentNumber}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.appointmentNumber}
                  </StyledTableCell>
                  <StyledTableCell>{row.patientName}</StyledTableCell>
                  <StyledTableCell>{row.doctorName}</StyledTableCell>
                  <StyledTableCell>{row.session}</StyledTableCell>
                </TableRow>
              ))}
            {!rows.length && (
              <TableRow>
                <StyledTableCell
                  colSpan="10"
                  sx={{ textAlign: 'center', verticalAlign: 'middle' }}
                >
                  <AlNoData size="40" />
                  <Typography color="crimson">No Data</Typography>
                </StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {!!rows.length && (
        <ButtonLink
          path="appointment"
          bRadius="0.5rem"
          tTransform="none"
          width="100%"
          position="center"
        >
          Show all Appointments
        </ButtonLink>
      )}
    </>
  )
}

export default UpAppointments
