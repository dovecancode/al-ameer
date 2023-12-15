import { Box, Stack, Typography } from '@mui/material'
import { CalendarSvg, CashSvg, TeamSvg } from '../../assets/img/home'
import { Item } from './style'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Link as RouterLink } from 'react-router-dom'

const homeBox = [
  { img: CalendarSvg, bg: 'primary' },
  { img: TeamSvg, bg: 'accent' },
  { img: CashSvg, bg: 'secondary' },
]

function HeroBookAppt() {
  const matches = useMediaQuery('(width >= 35rem)')

  return (
    <>
      {matches && (
        <Box className="boxAppointMent">
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            width="100%"
            position="relative"
          >
            {homeBox.map((box, idx) => (
              <Item
                component={RouterLink}
                to="appointment"
                sx={{
                  background: (theme) => theme.palette[box.bg].main,
                }}
                key={`home-box-${idx + 1}`}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: (theme) =>
                      idx % 2 === 0 ? '#fff' : theme.palette.primary.main,
                  }}
                >
                  Book an Appointment
                </Typography>
                <Box component="img" src={box.img} />
              </Item>
            ))}
          </Stack>
        </Box>
      )}
    </>
  )
}

export default HeroBookAppt
