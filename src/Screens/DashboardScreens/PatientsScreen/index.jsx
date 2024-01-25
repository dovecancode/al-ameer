import DashAddButton from '../../../components/Dashboard/DashAddButton'
import PatientDataTable from '../../../components/Dashboard/PatientDataTable'
import PatientModalForm from '../../../components/Dashboard/PatientModalForm'

function PatientsScreen() {
  return (
    <>
      <DashAddButton title="Add new patient" btnText="Add new" />
      <PatientModalForm />
      <PatientDataTable />
    </>
  )
}

export default PatientsScreen
