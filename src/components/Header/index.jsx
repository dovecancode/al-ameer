import { Container } from '@mui/material'
import TopLogo from '../TopLogo/index.jsx'
import {
  TopMostContainer,
  TopMostIcon,
  TopMostInfo,
  TopMostRight,
  TopMostRightContainer,
  TopMostRightContents,
  TopMostText,
} from './Header.Element.js'
import { topMost } from './data'

function Header() {
  return (
    <>
      <Container>
        <TopMostContainer component="section">
          <TopLogo logoDisplay="none" />
          <TopMostRightContainer>
            {topMost.map(({ id, icon, text, info }) => {
              return (
                <TopMostRightContents key={id}>
                  <TopMostIcon variant="inherit">{icon}</TopMostIcon>
                  <TopMostRight>
                    <TopMostText variant="inherit">{text}</TopMostText>
                    <TopMostInfo variant="inherit" sx={{}}>
                      {info}
                    </TopMostInfo>
                  </TopMostRight>
                </TopMostRightContents>
              )
            })}
          </TopMostRightContainer>
        </TopMostContainer>
      </Container>
    </>
  )
}
export default Header
