import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const topMost = [
  {
    id: 1,
    icon: <PhoneInTalkIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
    text: 'EMERGENCY',
    info: '(237) 681-812-255',
  },
  {
    id: 2,
    icon: <AccessTimeIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
    text: 'WORKING HOUR',
    info: '09:00 - 20:00 Everyday',
  },
  {
    id: 3,
    icon: <LocationOnOutlinedIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />,
    text: 'LOCATION',
    info: '0123 Some Place',
  },
];

export const pageLinks = [
  {
    id: 1,
    link: '/',
    text: 'Home',
  },
  {
    id: 2,
    link: 'about-us',
    text: 'About us',
  },
  {
    id: 3,
    link: 'services',
    text: 'Services',
  },
  {
    id: 4,
    link: 'doctors',
    text: 'Doctors',
  },
  {
    id: 5,
    link: 'news',
    text: 'News',
  },
  {
    id: 6,
    link: 'contact',
    text: 'Contact',
  },
];

export const Button = ({ word, type }) => {
  return (
    <>
      <button type={type}>{word}</button>
    </>
  );
};
