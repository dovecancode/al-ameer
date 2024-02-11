import { CircularProgress, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { IconContext } from 'react-icons'

import { CiEdit } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { LuTrash } from 'react-icons/lu'

function DashTableActions({ patientId, onDelete, isDeleting }) {
  const [selected, setSelected] = useState('')

  return (
    <Stack direction={{ sm: 'row' }} spacing={1}>
      <IconContext.Provider
        value={{ color: 'blue', className: 'global-class-name' }}
      >
        <FaEye size={20} cursor="pointer" />
        <CiEdit size={20} cursor="pointer" />

        {!selected && (
          <LuTrash
            size={20}
            cursor="pointer"
            onClick={() => {
              onDelete(patientId)
              setSelected(patientId)
            }}
          />
        )}

        {isDeleting && selected === patientId && <CircularProgress size={20} />}
      </IconContext.Provider>
    </Stack>
  )
}

DashTableActions.propTypes = {
  patientId: PropTypes.string,
  onDelete: PropTypes.func,
  isDeleting: PropTypes.bool,
}

export default DashTableActions
