import DashAddButton from '../../../components/Dashboard/DashAddButton'
import PatientModalForm from '../../../components/Dashboard/PatientModalForm'

function PatientsScreen() {
  return (
    <>
      <DashAddButton title="Add new patient" btnText="Add new" />
      <PatientModalForm />
    </>
  )
}

export default PatientsScreen
