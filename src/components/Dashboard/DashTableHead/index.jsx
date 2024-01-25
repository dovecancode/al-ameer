import { Checkbox, TableHead, TableRow } from '@mui/material'
import { TCell } from './DashTableHead.elements'

import PropTypes from 'prop-types'

function DashTableHead({ selectAll, onSelectAllItems }) {
  return (
    <TableHead>
      <TableRow>
        <TCell>
          <Checkbox
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
            checked={selectAll > 0}
            onChange={onSelectAllItems}
          />
        </TCell>
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

DashTableHead.propTypes = {
  onSelectAllItems: PropTypes.func,
  selectAll: PropTypes.number,
}

export default DashTableHead
