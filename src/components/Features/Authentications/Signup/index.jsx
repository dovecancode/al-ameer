import Stack from '@mui/material/Stack'

import { SignUpImage } from './style'
import SignUpForm from '../../../SignUpForm'

export default function SignUp() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        // spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <SignUpImage />
        <SignUpForm />
      </Stack>
    </div>
  )
}
