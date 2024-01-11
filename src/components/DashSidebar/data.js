import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'
import React from 'react'

export const dashBoardButton = [
  {
    id: 1,
    path: '',
    label: 'Dashboard',
    icon: React.createElement(AnalyticsOutlinedIcon, {
      sx: { fontSize: '3rem', color: '#159EEC' },
    }),
  },
  {
    id: 2,
    path: '',
    label: 'Doctor',
    icon: React.createElement(MedicalServicesOutlinedIcon, {
      sx: { fontSize: '3rem', color: '#159EEC' },
    }),
  },
  {
    id: 3,
    path: '',
    label: 'Schedule',
    icon: React.createElement(BookmarkBorderIcon, {
      sx: { fontSize: '3rem', color: '#159EEC' },
    }),
  },
  {
    id: 4,
    path: '',
    label: 'Appointment',
    icon: React.createElement(AccessAlarmIcon, {
      sx: { fontSize: '3rem', color: '#159EEC' },
    }),
  },
  {
    id: 5,
    path: '',
    label: 'Patients',
    icon: React.createElement(AccessibleForwardIcon, {
      sx: { fontSize: '3rem', color: '#159EEC' },
    }),
  },
]
