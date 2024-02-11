import { useEffect, useState } from 'react'
import { getPatients } from '../../services/apiPatients'

function usePatients() {
  const [patients, setPatients] = useState(null)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setStatus('loading')
      const data = await getPatients()

      setStatus('success')

      if (data) {
        setPatients(data)
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return { patients, status, setPatients }
}

export default usePatients
