import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AboutScreen,
  AppointmentScreen,
  ContactScreen,
  DoctorsScreen,
  HomeScreen,
  NewsScreen,
  PageNotFoundScreen,
  ServicesScreen,
} from './Screens'
import theme from './ThemeChanger'
// import Footer from './components/Footer'

import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import DashboardPrivateRoute from './components/DashboardPrivateRoute'

import { DashboardScreen, SettingsScreen } from './Screens/DashboardScreens'
import DashboardLayout from './Screens/DashboardScreens/DashboardLayout'
import DoctorScreen from './Screens/DashboardScreens/DoctorScreen'
import PatientsScreen from './Screens/DashboardScreens/PatientsScreen'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index="*" element={<HomeScreen />} />
          <Route path="about-us" element={<AboutScreen />} />
          <Route path="services" element={<ServicesScreen />} />
          <Route path="doctors" element={<DoctorsScreen />} />
          <Route path="news" element={<NewsScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="appointment" element={<AppointmentScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="signup" element={<SignupScreen />} />

          <Route
            path="/dashboard/*"
            element={
              <DashboardPrivateRoute>
                <DashboardLayout />
              </DashboardPrivateRoute>
            }
          >
            <Route index element={<DashboardScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
            <Route path="patients" element={<PatientsScreen />} />
            <Route path="doctor" element={<DoctorScreen />} />
          </Route>

          <Route path="*" exact={true} element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
