import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const topMost = [
  {
    id: 1,
    icon: (
      <PhoneInTalkIcon sx={{ fontSize: { xs: 30, sm: 35, md: 45, lg: 50 } }} />
    ),
    text: 'EMERGENCY',
    info: '(237) 681-812-255',
  },
  {
    id: 2,
    icon: (
      <AccessTimeIcon sx={{ fontSize: { xs: 30, sm: 35, md: 45, lg: 50 } }} />
    ),
    text: 'WORKING HOUR',
    info: '09:00 - 20:00 Everyday',
  },
  {
    id: 3,
    icon: (
      <LocationOnOutlinedIcon
        sx={{ fontSize: { xs: 30, sm: 35, md: 45, lg: 50 } }}
      />
    ),
    text: 'LOCATION',
    info: '0123 Some Place',
  },
];
