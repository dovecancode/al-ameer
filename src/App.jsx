import { ThemeProvider } from '@mui/material'
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
// import Footer from './components/Footer'
import { Dashboard } from './Screens/DashboardScreens'
import DashboardLayout from './Screens/DashboardScreens/DashboardLayout'
import DashboardPrivateRoute from './components/DashboardPrivateRoute'

// import Footer from './components/Footer'
// import Header from './components/Header'
// import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Header />
        <Navbar /> */}
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
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
