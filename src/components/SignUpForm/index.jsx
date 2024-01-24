import {
  Box,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import SubmitButton from '../shared/SubmitButton'
import TopLogo from '../TopLogo'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import AppleIcon from '@mui/icons-material/Apple'
import styled from '@emotion/styled'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '8rem',
}))

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
  })

  console.log('errors', errors)

  const onSubmit = (data) => console.log(data)

  const isDesktop = useMediaQuery('(min-width:769px)')

  return (
    <>
      <Stack
        sx={{ flex: 1, py: '10rem' }}
        direction={{ xs: 'column' }}
        spacing={{ xs: 6 }}
        textAlign="center"
      >
        <Box sx={{ mt: 4, mb: 7 }}>
          <TopLogo />
        </Box>
        <Box
          component="form"
          // sx={{ flex: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl sx={{ gap: 3 }}>
            <Box>
              <Typography variant="h4" textAlign="left">
                Sign Up
              </Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              sx={{ width: isDesktop ? '30rem' : '100%' }}
              {...register('email', { required: true })}
              {...register('email', { required: 'This is required' })}
              {...register('email', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              sx={{ width: isDesktop ? '30rem' : '100%' }}
              {...register('password', { required: true })}
              {...register('password', { required: 'This is required' })}
              {...register('password', {
                pattern: {
                  value: /[A-Z0-9._%+-]/,
                  message: 'Invalid password',
                },
              })}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              sx={{ width: isDesktop ? '30rem' : '100%' }}
              {...register('confirmPassword', { required: true })}
              {...register('confirmPassword', { required: 'This is required' })}
              {...register('confirmPassword', {
                pattern: {
                  value: /[A-Z0-9._%+-]/,
                  message: 'Invalid password',
                },
              })}
            />
            <SubmitButton
              type="submit"
              height="5.5rem"
              backgroundnonhover="#1f2b6c"
              colornonhover="#fff"
            >
              Register
            </SubmitButton>
          </FormControl>
        </Box>
        <Box>
          <Typography variant="h6">or continue with</Typography>
        </Box>
        <Box>
          <Stack
            direction={{ xs: 'row' }}
            spacing={{ xs: 2 }}
            paddingX={isDesktop ? '34.5rem' : '8rem'}
          >
            <Item>
              <GoogleIcon sx={{ fontSize: '2rem', color: '#d32f2f' }} />
            </Item>
            <Item>
              <FacebookIcon sx={{ fontSize: '2rem', color: '#1976d2' }} />
            </Item>
            <Item>
              <AppleIcon sx={{ fontSize: '2rem', color: '#283544' }} />
            </Item>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default SignUpForm
