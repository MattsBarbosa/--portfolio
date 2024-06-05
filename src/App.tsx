import { ThemeProvider } from 'styled-components'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import GlobalStyle, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [isUsingDark, setIsUsingDark] = useState(false)

  function changeTheme() {
    setIsUsingDark(!isUsingDark)
  }

  return (
    <ThemeProvider theme={isUsingDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
