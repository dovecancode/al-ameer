import { Box, Stack, useMediaQuery } from '@mui/material'
import { LogInImage } from './style'
import LogInForm from '../../../LogInForm'

function Login() {
  const isDesktop = useMediaQuery('(min-width:768px)')

  return (
    <>
      <Stack direction={{ md: 'row' }}>
        <Box flex={1}>{isDesktop && <LogInImage />}</Box>
        <Box flex={1}>
          <LogInForm />
        </Box>
      </Stack>
    </>
  )
}

export default Login
