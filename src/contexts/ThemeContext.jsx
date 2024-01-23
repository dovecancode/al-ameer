import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [isDialog, setIsDialog] = useState(false)

  function handleClickDialog() {
    setIsDialog(!isDialog)
  }

  return (
    <ThemeContext.Provider value={{ isDialog, handleClickDialog }}>
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
