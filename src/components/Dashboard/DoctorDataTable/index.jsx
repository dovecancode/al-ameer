import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Table, TableBody, TableContainer, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import ameerServices from '../../../services/ameerServices'
import DashTableHead from '../../shared/DashTableHead'
import { TCell } from '../DoctorDataTable/DoctorDataTable.element'

function DoctorDataTable() {
  const header = [
    'Doctor ID',
    'Doctor Name',
    'Specialities',
    'Appointments',
    'Edit',
  ]
  const backgroundColor = '#159EEC'

  const [doctor, setDoctor] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    async function fetchData() {
      setStatus('loading')
      try {
        const { data, error } = await ameerServices.getData('doctors')
        if (error) {
          setErrorMessage('Something when wrong...')
        }
        if (error) throw new Error(error)
        setDoctor(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    fetchData()
  }, [])

  console.log(status)
  console.log(doctor)

  const error = status === 'error'

  if (error) return <h1>{errorMessage}</h1>

  return (
    <>
      <TableContainer>
        <Table>
          <DashTableHead columnHeader={header} bgcolor={backgroundColor} />
          <TableBody>
            {doctor.map((row, idx) => (
              <TableRow key={`row-${idx}`}>
                <TCell>{`#2024-${idx + 1}`}</TCell>
                <TCell>
                  {row.first_name} {row.last_name}
                </TCell>
                <TCell>{row.specialization}</TCell>
                <TCell>{row.specialization}</TCell>
                <TCell>
                  <MoreVertIcon sx={{ fontSize: '1.7rem' }} />
                </TCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
export default DoctorDataTable
