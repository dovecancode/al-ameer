import {
  Box,
  Container,
  FormGroup,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import SubmitButton from '../shared/SubmitButton'
import { AppointmentSection, Content, FormElement, TextInput } from './style'

import { departments, doctors, genders } from './inputOptions'

function HomeBookApptForm() {
  const [inputField, setInputField] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setInputField((prev) => ({ ...prev, [name]: value }))
  }

  const { name, gender, email, phone, doctor, date, time, message } = inputField

  console.log(inputField)
  return (
    <AppointmentSection className="home-appt">
      <Container>
        <Stack
          // direction="row"
          direction={{ sm: 'column', md: 'row', lg: 'row' }}
          spacing={{ xs: 3, md: 3, lg: 6 }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Content className="col">
            <Typography variant="h2">Book an appointment</Typography>
            <Typography variant="body1">
              Booking an appointment at the hospital ensures timely and
              personalized care, allowing patients to access specialized medical
              attention and services tailored to their needs, fostering a
              smoother and more efficient healthcare experience.
            </Typography>
          </Content>
          <FormElement component="form" className="col">
            <FormGroup>
              <Box sx={{ display: 'flex' }}>
                <TextInput
                  variant="filled"
                  label="Name"
                  value={name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                />

                <TextInput
                  select
                  variant="filled"
                  value={gender}
                  label="Gender"
                  name="gender"
                  onChange={(e) => handleChange(e)}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                >
                  {genders.map((gender) => (
                    <MenuItem
                      value={gender.identity}
                      component="option"
                      key={gender.identity}
                    >
                      {gender.identity}
                    </MenuItem>
                  ))}
                </TextInput>
              </Box>
            </FormGroup>
            <FormGroup>
              <Box sx={{ display: 'flex' }}>
                <TextInput
                  type="email"
                  variant="filled"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                />
                <TextInput
                  type="phone"
                  variant="filled"
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleChange(e)}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                />
              </Box>
            </FormGroup>
            <FormGroup>
              <Box sx={{ display: 'flex' }}>
                <TextInput
                  variant="filled"
                  type="text"
                  label="Date"
                  name="date"
                  value={date}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                  onChange={(e) => handleChange(e)}
                />
                <TextInput
                  variant="filled"
                  type="text"
                  label="Time"
                  name="time"
                  value={time}
                  onFocus={(e) => (e.target.type = 'time')}
                  onBlur={(e) => (e.target.type = 'text')}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormGroup>
            <FormGroup>
              <Box sx={{ display: 'flex' }}>
                <TextInput
                  select
                  variant="filled"
                  label="Doctors"
                  name="doctor"
                  value={doctor}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                  onChange={(e) => handleChange(e)}
                >
                  {doctors.map((doctor) => (
                    <MenuItem
                      component="option"
                      value={doctor.name}
                      key={doctor.name}
                    >
                      {doctor.name}
                    </MenuItem>
                  ))}
                </TextInput>
                <TextInput
                  select
                  variant="filled"
                  label="Department"
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                  onChange={(e) => handleChange(e)}
                >
                  {departments.map((department) => (
                    <MenuItem
                      value={department.dept}
                      component="option"
                      key={department.dept}
                    >
                      {department.dept}
                    </MenuItem>
                  ))}
                </TextInput>
              </Box>

              <Box>
                <TextInput
                  variant="filled"
                  multiline
                  name="message"
                  label="Message"
                  value={message}
                  rows={5}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  InputProps={{
                    style: {
                      color: '#fff',
                    },
                  }}
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
          </FormElement>
        </Stack>
      </Container>
    </AppointmentSection>
  )
}

export default HomeBookApptForm
