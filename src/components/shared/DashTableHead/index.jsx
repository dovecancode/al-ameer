import { TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import { TCell } from './DashTableHead.elements'

function DashTableHead({ columnHeader, bgcolor }) {
  return (
    // Please create a header array
    <TableHead sx={{ backgroundColor:  bgcolor  }}>
      <TableRow>
        {columnHeader.map((header, idx) => (
          <TCell key={`theader-#${idx}`}>{header}</TCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

DashTableHead.propTypes = {
  columnHeader: PropTypes.array,
  bgcolor: PropTypes.string,
}

export default DashTableHead
