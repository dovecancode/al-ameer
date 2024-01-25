import { Checkbox, TableBody, TableRow } from '@mui/material'
import { TBodyCell } from './DashTableBody.elements'

import PropTypes from 'prop-types'

// function filterdata(query) {
//   let data = patientsData
//   if (query) {
//     data = patientsData.filter((patient) => {
//       return `${patient.patientName} ${patient.patientID}`
//         .toLowerCase()
//         .includes(query.toLowerCase())
//     })
//   }
//   return data
// }

function DashTableBody({ query, patientsData, isSelected, onSelectItem }) {
  patientsData = patientsData.filter((patient) => {
    return `${patient.patientName} ${patient.patientID}`
      .toLowerCase()
      .includes(query.toLowerCase())
  })

  return (
    <TableBody>
      {patientsData.map((patient, idx) => {
        const isSelectedItem = isSelected(patient.patientID)

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
                onClick={(e) => onSelectItem(e, patient.patientID)}
              />
            </TBodyCell>
            <TBodyCell>{patient.patientID}</TBodyCell>
            <TBodyCell>{patient.patientName}</TBodyCell>
            <TBodyCell>{patient.gender}</TBodyCell>
            <TBodyCell>{patient.age}</TBodyCell>
            <TBodyCell>{patient.dBirth}</TBodyCell>
            <TBodyCell>{patient.address}</TBodyCell>
            <TBodyCell>{patient.phoneNumber}</TBodyCell>
            <TBodyCell>{patient.disease}</TBodyCell>
            <TBodyCell>{patient.dDoctor}</TBodyCell>
            <TBodyCell>{patient.patientStatus}</TBodyCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

DashTableBody.propTypes = {
  query: PropTypes.string,
  patientsData: PropTypes.array,
  onSelectItem: PropTypes.func,
  isSelected: PropTypes.func,
}

export default DashTableBody
