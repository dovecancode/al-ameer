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
import { Dashboard } from './Screens/DashboardScreens'

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index="*" element={<HomeScreen />} />
        <Route path="about-us" element={<AboutScreen />} />
        <Route path="services" element={<ServicesScreen />} />
        <Route path="doctors" element={<DoctorsScreen />} />
        <Route path="news" element={<NewsScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="appointment" element={<AppointmentScreen />} />

        {/* dashboard route */}
        <Route path="" element={<DashboardPrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default Router
