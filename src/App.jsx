import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AboutScreen,
  AppointmentScreen,
  ContactScreen,
  DoctorsScreen,
  HomeScreen,
  NewsScreen,
  ServicesScreen,
} from './Screens'
import theme from './ThemeChanger'

import { DashboardScreen, SettingsScreen } from './Screens/DashboardScreens'
import DashboardLayout from './Screens/DashboardScreens/DashboardLayout'
import PatientsScreen from './Screens/DashboardScreens/PatientsScreen'
import DashboardPrivateRoute from './components/DashboardPrivateRoute'

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
