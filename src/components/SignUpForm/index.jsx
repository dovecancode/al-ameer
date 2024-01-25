import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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
import { SpanSignUp } from './SignUpForm.elements'
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '9rem',
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

  //!for FormControl Adornment
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show)
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <Stack
        sx={{ pt: '10rem' }}
        direction={{ xs: 'column' }}
        spacing={{ xs: 6 }}
        textAlign="center"
      >
        <Box>
          <TopLogo />
        </Box>
        <Box
          component="form"
          // sx={{ flex: 1 }}
          display="flex"
          gap={{ xs: 3 }}
          flexDirection="column"
          paddingX={isDesktop ? '34.5rem' : '1.5rem'}
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
          </FormControl>
          <FormControl
            variant="outlined"
            sx={{ width: isDesktop ? '30rem' : '100%', gap: 3 }}
            {...register('password', { required: true })}
            {...register('password', { required: 'This is required' })}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            variant="outlined"
            sx={{ width: isDesktop ? '30rem' : '100%', gap: 3 }}
            {...register('confirmPassword', { required: true })}
            {...register('confirmPassword', { required: 'This is required' })}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
          <SubmitButton
            type="submit"
            height="5.5rem"
            backgroundnonhover="#1f2b6c"
            colornonhover="#fff"
            width={isDesktop ? '30rem' : '100%'}
          >
            Register
          </SubmitButton>
        </Box>
        <Box>
          <Typography variant="h6">or continue with</Typography>
        </Box>
        <Box>
          <Stack
            direction={{ xs: 'row' }}
            spacing={{ xs: 2 }}
            paddingX={isDesktop ? '34.5rem' : '30%'}
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
        <Box>
          <Typography variant="h4">If you already have an account</Typography>
          <Typography variant="h4">
            You can <SpanSignUp>Login here!</SpanSignUp>
          </Typography>
        </Box>
      </Stack>
    </>
  )
}

export default SignUpForm
