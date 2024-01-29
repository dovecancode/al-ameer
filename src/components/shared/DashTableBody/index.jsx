import { Checkbox, TableBody, TableRow } from '@mui/material'
import { TBodyCell } from './DashTableBody.elements'
import PropTypes from 'prop-types'

function DashTableBody({
  query,
  passedData,
  isSelected,
  onSelectItem,
  columns,
}) {
  passedData = passedData.filter((data) => {
    return columns.some((column) =>
      `${data[column.field]}`.toLowerCase().includes(query.toLowerCase())
    )
  })

  return (
    <TableBody sx={{width:'100%'}}>
      {passedData.map((data, idx) => {
        const isSelectedItem = isSelected(data.dataID)

        return (
          <TableRow
            hover
            key={`row-${idx}`}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TBodyCell>
              <Checkbox
                inputProps={{ 'aria-label': 'Checkbox demo' }}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                checked={isSelectedItem}
                onClick={(e) => onSelectItem(e, data.dataID)}
              />
            </TBodyCell>
            {columns.map((column, colIdx) => (
              <TBodyCell key={`cell-${idx}-${colIdx}`}>
                {data[column.field]}
              </TBodyCell>
            ))}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

DashTableBody.propTypes = {
  query: PropTypes.string,
  passedData: PropTypes.array,
  onSelectItem: PropTypes.func,
  isSelected: PropTypes.func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
}

export default DashTableBody
