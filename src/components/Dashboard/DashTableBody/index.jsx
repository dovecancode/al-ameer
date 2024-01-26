import { Checkbox, Stack, TableBody, TableRow, Typography } from '@mui/material'
import { TBodyCell } from './DashTableBody.elements'

import PropTypes from 'prop-types'
import { CiEdit } from 'react-icons/ci'
import { LuTrash } from 'react-icons/lu'
import { AlNoData } from '../../shared/Icons'

import { FaEye } from 'react-icons/fa'

function DashTableBody({ query, patientsData, isSelected, onSelectItem }) {
  patientsData = patientsData.filter((patient) => {
    return `${patient.patientName} ${patient.patientID}`
      .toLowerCase()
      .includes(query.toLowerCase())
  })

  return (
    <TableBody>
      {!!patientsData.length &&
        patientsData.map((patient, idx) => {
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
                  onClick={() => onSelectItem(patient.patientID)}
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
              <TBodyCell>
                <Stack direction={{ sm: 'row' }} spacing={1}>
                  <FaEye size={20} />
                  <CiEdit size={20} />
                  <LuTrash size={20} />
                </Stack>
              </TBodyCell>
            </TableRow>
          )
        })}
      {!patientsData.length && (
        <TableRow>
          <TBodyCell
            colSpan="10"
            sx={{ textAlign: 'center', verticalAlign: 'middle' }}
          >
            <AlNoData size="20" />
            <Typography variant="h3" component="p" color="crimson">
              {query.substring(0, 1).toUpperCase() +
                query.substring(1, query.length)}
              &nbsp;is Not found
            </Typography>
          </TBodyCell>
        </TableRow>
      )}
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
