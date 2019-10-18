

// Import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

// Import colors and sizes variables
import { colors, sizes } from './variables'

// Import style guide components
// import Buttons from './components/buttons'
// import Colors from './components/colors'
// import Forms from './components/forms'
// import Typography from './components/typography'

// Global styles and resets
createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${sizes.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font: 100% / 1.618 Roboto, Arial, sans-serif;
    color: ${colors.text};
  }
`

// Main container or wrapper
const AppContainer = styled.div`
  padding: 0 8px 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  max-width: 992px;
`

// H1 heading
const StyleguideHeading = styled.h1`
  position: relative;
  display: inline-block;
  font-weight: 500;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${colors.text};
  }
`

// H2 heading
const StyleguideSubheading = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 26px;
  font-weight: 400;
  text-align: left;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1.5px;
    background-color: ${colors.text};
  }

  div + & {
    margin-top: 60px;
  }
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <StyleguideHeading>UI Style guide</StyleguideHeading>

        <p>
          A short info about the company. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>

        <StyleguideSubheading>Colors</StyleguideSubheading>

        <Colors />

        <StyleguideSubheading>Typography</StyleguideSubheading>

        <Typography />

        <StyleguideSubheading>Buttons</StyleguideSubheading>

        <Buttons />

        <StyleguideSubheading>Forms</StyleguideSubheading>

        <Forms />
      </AppContainer>
    )
  }
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)