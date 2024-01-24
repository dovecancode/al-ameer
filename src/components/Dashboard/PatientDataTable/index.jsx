import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import DashTableHead from '../../shared/DashTableHead'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

function PatientDataTable() {
  return (
    <>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-label="simple table">
            <DashTableHead />
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={`row-${idx}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    sx={{ fontSize: '1.2rem' }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default PatientDataTable
