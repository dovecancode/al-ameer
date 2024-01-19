import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward'
import { createElement } from 'react'
import { FaBriefcaseMedical, FaRegBookmark } from 'react-icons/fa'
import { TbHeartRateMonitor } from 'react-icons/tb'

const createIconElement = (IconComponent, option = 25) => {
  const iconColor = '#1F2B6C'
  return createElement(IconComponent, {
    size: option,
    color: iconColor,
    sx: { fontSize: '3rem', color: iconColor },
  })
}

const statusData = [
  {
    title: 'Doctors',
    count: 50,
    icon: createIconElement(FaBriefcaseMedical),
    bgColor: '#d0e5f9',
  },
  {
    title: 'Patients',
    count: 100,
    icon: createIconElement(AccessibleForwardIcon),
    bgColor: '#f9e4d1',
  },
  {
    title: 'Bookings',
    count: 500,
    icon: createIconElement(FaRegBookmark),
    bgColor: '#e1edd2',
  },
  {
    title: 'Sessions',
    count: 60,
    icon: createIconElement(TbHeartRateMonitor, 35),
    bgColor: '#f9efd3',
  },
]

export default statusData
