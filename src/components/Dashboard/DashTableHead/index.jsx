import { TableHead, TableRow } from '@mui/material'
import { TCell } from './DashTableHead.elements'

function DashTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TCell>Patient ID</TCell>
        <TCell>Patient Name</TCell>
        <TCell>Gender</TCell>
        <TCell>Age</TCell>
        <TCell>Date of Birth</TCell>
        <TCell>Address</TCell>
        <TCell>Contact Number</TCell>
        <TCell>Disease</TCell>
        <TCell>Doctor Assigned</TCell>
        <TCell>Status</TCell>
      </TableRow>
    </TableHead>
  )
}

export default DashTableHead
