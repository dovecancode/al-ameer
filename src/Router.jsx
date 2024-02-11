import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import {
  AboutScreen,
  AppointmentScreen,
  ContactScreen,
  DoctorsScreen,
  HomeScreen,
  NewsScreen,
  ServicesScreen,
} from './Screens'

import App from './App'
import DashboardPrivateRoute from './components/DashboardPrivateRoute'
import Error from './components/Error'
import NotFound from './components/NotFound'
import {
  DashboardLayout,
  DashboardScreen,
  DoctorScreen,
  PatientsScreen,
  SettingsScreen,
} from './Screens/DashboardScreens'

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<Error />}>
        <Route index="*" element={<HomeScreen />} />
        <Route path="about-us" element={<AboutScreen />} />
        <Route path="services" element={<ServicesScreen />} />
        <Route path="doctors" element={<DoctorsScreen />} />
        <Route path="news" element={<NewsScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="appointment" element={<AppointmentScreen />} />

        {/* dashboard route */}
        <Route
          path="/dashboard/*"
          element={
            <DashboardPrivateRoute>
              <DashboardLayout />
            </DashboardPrivateRoute>
          }
          errorElement={<Error />}
        >
          <Route index element={<DashboardScreen />} />
          <Route
            path="patients"
            element={<PatientsScreen />}
            errorElement={<Error />}
          />
          <Route path="doctor" element={<DoctorScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default Router
