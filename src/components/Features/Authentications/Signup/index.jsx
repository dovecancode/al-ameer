import Stack from '@mui/material/Stack'

import { SignUpImage } from './style'
import SignUpForm from '../../../SignUpForm'
import { useMediaQuery } from '@mui/material'

export default function SignUp() {
  const isDesktop = useMediaQuery('(min-width:768px)')

  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        // spacing={{ xs: 1, sm: 2, md: 2 }}
        flex="wrap"
      >
        <SignUpImage
          sx={{
            display: isDesktop ? 'flex: 1' : 'none',
          }}
        />
        <SignUpForm />
      </Stack>
    </div>
  )
}
