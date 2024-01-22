import { Box, FormControl, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import SubmitButton from '../shared/SubmitButton'

// let renderCount = 0

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } })

  //   renderCount++

  console.log('errors', errors)

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Box component="form" sx={{ flex: 1 }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
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
            {...register('password', { required: true })}
            {...register('password', { required: 'This is required' })}
            {...register('password', {
              pattern: {
                value: /[A-Z0-9._%+-]/,
                message: 'Invalid password',
              },
            })}
          />
          <SubmitButton type="submit" />
        </FormControl>
      </Box>
    </>
  )
}

export default SignUpForm
