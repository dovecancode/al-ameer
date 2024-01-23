import { Typography } from '@mui/material'
import { AddBtn, ButtonContainer } from './DashAddButton.elements'

import PropTypes from 'prop-types'
import { IoAddSharp } from 'react-icons/io5'
import { useThemeContext } from '../../../contexts/ThemeContext'

function DashAddButton({ title, btnText }) {
  const { handleClickDialog } = useThemeContext()

  return (
    <ButtonContainer sx={{ padding: '2rem' }}>
      <Typography component="p" variant="h4">
        {title}
      </Typography>
      <AddBtn onClick={handleClickDialog}>
        <IoAddSharp color="#fff" size={20} />
        {btnText}
      </AddBtn>
    </ButtonContainer>
  )
}

DashAddButton.propTypes = {
  title: PropTypes.string,
  btnText: PropTypes.string,
}

export default DashAddButton
