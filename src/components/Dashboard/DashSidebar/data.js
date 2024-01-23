import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import EventNoteIcon from '@mui/icons-material/EventNote'
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import React from 'react'

const createIconElement = (IconComponent, options) => {
  return React.createElement(IconComponent, {
    sx: { fontSize: '3rem', color: '#159EEC' },
    ...options,
  })
}

export const dashBoardButton = {
  1: [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: createIconElement(AnalyticsOutlinedIcon),
    },
    {
      label: 'Doctor',
      path: 'doctor',
      icon: createIconElement(MedicalServicesOutlinedIcon),
    },
    {
      label: 'Schedule',
      path: 'schedule',
      icon: createIconElement(AccessAlarmIcon),
    },
    {
      label: 'Appointment',
      path: 'appointment',
      icon: createIconElement(AccessAlarmIcon),
    },
    {
      label: 'Patients',
      path: 'patients',
      icon: createIconElement(AccessibleForwardIcon),
    },
  ],
  2: [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: createIconElement(AnalyticsOutlinedIcon),
    },
    {
      label: 'My Appointments',
      path: 'my-appointments',
      icon: createIconElement(AccessAlarmIcon),
    },
    {
      label: 'My Sessions',
      path: 'my-sessions',
      icon: createIconElement(EventNoteIcon),
    },
    {
      label: 'My Patients',
      path: 'my-patients',
      icon: createIconElement(AccessibleForwardIcon),
    },
    {
      label: 'Settings',
      path: 'settings',
      icon: createIconElement(SettingsIcon),
    },
  ],
  3: [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: createIconElement(AnalyticsOutlinedIcon),
    },
    {
      label: 'All Doctors',
      path: 'all-doctors',
      icon: createIconElement(MedicalServicesOutlinedIcon),
    },
    {
      label: 'Scheduled Sessions',
      path: 'scheduled-sessions',
      icon: createIconElement(EventNoteIcon),
    },
    {
      label: 'My Bookings',
      path: 'my-bookings',
      icon: createIconElement(BookmarkBorderIcon),
    },
    {
      label: 'Settings',
      path: 'settings',
      icon: createIconElement(SettingsIcon),
    },
  ],
}
