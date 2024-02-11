import {
  Checkbox,
  CircularProgress,
  TableBody,
  TableRow,
  Typography,
} from '@mui/material'
import { TBodyCell } from './DashTableBody.elements'

import PropTypes from 'prop-types'

import usePatients from '../../../hooks/patients/usePatients'
import { AlNoData } from '../../shared/Icons'

import useDelete from '../../../hooks/patients/useDelete'

import DashTableActions from '../DashTableActions'

function DashTableBody({ query, isSelected, onSelectItem }) {
  let { patients, setPatients, status } = usePatients()

  const { status: deleteStatus, onDeletePatient } = useDelete()

  const isDeleting = deleteStatus === 'loading'

  async function handleDelete(id) {
    await onDeletePatient(id)
    setPatients(patients?.filter((patient) => patient.patient_id !== id))
  }

  // patients = []
  patients = patients?.filter((patient) => {
    return `${patient.first_name} ${patient.local_id}`
      .toLowerCase()
      .includes(query.toLowerCase())
  })

  const isLoading = status === 'loading'

  return (
    <TableBody>
      {patients?.map((patient, idx) => {
        const isSelectedItem = isSelected(patient?.patient_id)

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
                onClick={() => onSelectItem(patient?.patient_id)}
              />
            </TBodyCell>
            <TBodyCell>{patient?.local_id}</TBodyCell>
            <TBodyCell>
              {patient?.first_name} {patient?.last_name}
            </TBodyCell>
            <TBodyCell>{patient?.gender}</TBodyCell>
            <TBodyCell>{patient?.age}</TBodyCell>
            <TBodyCell>
              {patient?.doctors?.first_name} {patient?.doctors?.last_name}
            </TBodyCell>
            <TBodyCell>pending</TBodyCell>
            <TBodyCell>
              <DashTableActions
                patientId={patient.patient_id}
                onDelete={handleDelete}
                isDeleting={isDeleting}
              />
            </TBodyCell>
          </TableRow>
        )
      })}

      {/* render if search query is not in the data */}
      {patients?.length === 0 && query.length > 1 && (
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
      {isLoading ? (
        <TableRow sx={{ height: '20vh' }}>
          <TBodyCell
            colSpan="10"
            sx={{ textAlign: 'center', verticalAlign: 'middle' }}
          >
            <CircularProgress />
          </TBodyCell>
        </TableRow>
      ) : patients?.length || query.length ? (
        ''
      ) : (
        <TableRow>
          <TBodyCell
            colSpan="10"
            sx={{ textAlign: 'center', verticalAlign: 'middle' }}
          >
            <AlNoData size="20" />
            <Typography variant="h3" component="p" color="crimson">
              No patient as of the moment
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
