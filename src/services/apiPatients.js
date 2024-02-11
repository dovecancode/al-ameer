import supabase from './supabase'

export async function getPatients() {
  const { data, error } = await supabase.from('patients').select()
  if (error) throw new Error('Error fetching patients data ', error.message)
  return data
}

export async function deletePatient(id) {
  const { error } = await supabase
    .from('patients')
    .delete()
    .eq('patient_id', id)

  if (error) throw new Error('Error Deleting data', error.message)
}
