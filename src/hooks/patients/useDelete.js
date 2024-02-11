import { useState } from 'react'
import { deletePatient } from '../../services/apiPatients'

function useDelete() {
  const [status, setStatus] = useState('idle')

  async function onDeletePatient(id) {
    try {
      setStatus('loading')
      await deletePatient(id)
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return { onDeletePatient, status }
}

export default useDelete
