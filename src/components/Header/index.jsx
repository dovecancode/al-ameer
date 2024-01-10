import { Container } from '@mui/material'
import {
  TopMostContainer,
  TopMostLogo,
  SpanWord,
  TopMostRightContainer,
  TopMostRightContents,
  TopMostIcon,
  TopMostRight,
  TopMostText,
  TopMostInfo,
} from './Header.Element.js'
import { topMost } from './data.jsx'

function Header() {
  return (
    <>
      <Container>
        <TopMostContainer component="section">
          <TopMostLogo variant="h1">
            Al-
            <SpanWord variant="span">Ameer</SpanWord>
          </TopMostLogo>
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
