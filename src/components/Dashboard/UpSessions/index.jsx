import styled from '@emotion/styled'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material'
import ButtonLink from '../../shared/ButtonLink'

function createData(whatSession, doctorName, session) {
  return { whatSession, doctorName, session }
}

const rows = [
  createData('Session 1', 'Dr. Audrey Martinez', '2024-01-30'),
  createData('Session 2', 'Dr. Gabriel Hawkins', '2024-02-05'),
  createData('Session 3', 'Dr. Craig Howell', '2024-02-08'),
  createData('Session 4', 'Dr. Marion Foster', '2024-02-09'),
  createData('Session 5', 'Dr. Brad Watson', '2024-02-10'),
  createData('Session 6', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 7', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 8', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 9', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 10', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 11', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 12', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 13', 'Dr. Olivia Wilson', '2024-02-15'),
  createData('Session 14', 'Dr. Olivia Wilson', '2024-02-15'),
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
function UpSessions() {
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sesstion Title</StyledTableCell>
              <StyledTableCell>Doctor</StyledTableCell>
              <StyledTableCell>Schedule Date & Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={`session-${idx}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.whatSession}
                </StyledTableCell>
                <StyledTableCell>{row.doctorName}</StyledTableCell>
                <StyledTableCell>{row.session}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonLink
        path="scheduled-sessions"
        bRadius="0.5rem"
        tTransform="none"
        width="100%"
        position="center"
      >
        Show all Sessions
      </ButtonLink>
    </>
  )
}

export default UpSessions
