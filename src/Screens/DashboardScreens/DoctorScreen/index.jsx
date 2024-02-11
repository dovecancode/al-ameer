import DashAddButton from '../../../components/Dashboard/DashAddButton'
import DoctorDataTable from '../../../components/Dashboard/DoctorDataTable'
import PatientModalForm from '../../../components/Dashboard/PatientModalForm'

function DoctorScreen() {
  return (
    <>
      <DashAddButton title="Add new doctor" btnText="Add new" />
      <PatientModalForm />
      <DoctorDataTable />
    </>
  )
}

export default DoctorScreen
