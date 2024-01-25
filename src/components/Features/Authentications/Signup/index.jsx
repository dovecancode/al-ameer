import Stack from '@mui/material/Stack'
import { SignUpImage } from './style'
import SignUpForm from '../../../SignUpForm'
import { Box, useMediaQuery } from '@mui/material'

export default function SignUp() {
  const isDesktop = useMediaQuery('(min-width:768px)')

  return (
    <div>
      <Stack direction={{ md: 'row' }}>
        <Box flex={1}>{isDesktop && <SignUpImage />}</Box>
        <Box flex={1}>
          <SignUpForm />
        </Box>
      </Stack>
    </div>
  )
}
