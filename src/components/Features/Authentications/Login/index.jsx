import { Stack, useMediaQuery } from '@mui/material'
import { LogInImage } from './style'
import LogInForm from '../../../LogInForm'

function Login() {
  const isDesktop = useMediaQuery('(min-width:768px)')

  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <LogInImage
          sx={{
            display: isDesktop ? 'flex' : 'none',
          }}
        />
        <LogInForm />
      </Stack>
    </>
  )
}

export default Login
