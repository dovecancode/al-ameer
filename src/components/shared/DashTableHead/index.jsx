import { Checkbox, TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import { TCell } from './DashTableHead.elements'

function DashTableHead({ selectAll, onSelectAllItems, columnHeader, bgcolor }) {
  return (
    // Please create a header array
    <TableHead sx={{ backgroundColor: bgcolor }}>
      <TableRow>
        <TCell>
          <Checkbox
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
            checked={selectAll > 0}
            onChange={onSelectAllItems}
          />
        </TCell>
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
  selectAll: PropTypes.number,
  onSelectAllItems: PropTypes.func,
}

export default DashTableHead
