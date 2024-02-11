import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'
import usePatients from '../hooks/patients/usePatients'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  let { patients, status } = usePatients()
  const [isDialog, setIsDialog] = useState(false)

  function handleClickDialog() {
    setIsDialog(!isDialog)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDialog,
        handleClickDialog,
        patients,
        status,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook
function useThemeContext() {
  return useContext(ThemeContext)
}

ThemeProvider.propTypes = {
  children: PropTypes.element,
}

export { ThemeProvider, useThemeContext }
