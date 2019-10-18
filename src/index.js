

// Import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

// Import style guide components
// import Buttons from './components/buttons'
// import Colors from './components/colors'
// import Forms from './components/forms'
// import Typography from './components/typography'

// Codes for color palette
const colors = {
  disabled: 'hsl(212.3, 16.7%, 69.4%)',
  error: 'hsl(359.6, 82.1%, 62.7%)',
  errorActive: 'hsl(359.6, 82.1%, 42.7%)',
  errorHover: 'hsl(359.6, 82.1%, 65%)',
  primary: 'hsl(209.6, 100%, 55.9%)',
  primaryActive: 'hsl(209.6, 100%, 35.9%)',
  primaryHover: 'hsl(209.6, 100%, 65%)',
  secondary: 'hsl(29.4, 100%, 63.1%)',
  secondaryActive: 'hsl(29.4, 100%, 43.1%)',
  secondaryHover: 'hsl(29.4, 100%, 65%)',
  success: 'hsl(164, 75.6%, 46.7%)',
  successActive: 'hsl(164, 75.6%, 26.7%)',
  successHover: 'hsl(164, 75.6%, 60%)',
  text: 'hsl(223.8, 81.3%, 6.3%)'
}

// Sizes for typography scale
const typography = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
  xxxl: '30px',
  xxxxl: '36px'
}

// Global styles and resets
createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${typography.base};
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

  // Customizable underline
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

  // Customizable underline
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

        {/*<Colors colors={colors} />*/}

        <StyleguideSubheading>Typography</StyleguideSubheading>

        {/*<Typography colors={colors} scale={typography} />*/}

        <StyleguideSubheading>Buttons</StyleguideSubheading>

        {/*<Buttons colors={colors} />*/}

        <StyleguideSubheading>Forms</StyleguideSubheading>

        {/*<Forms colors={colors} scale={typography} />*/}
      </AppContainer>
    )
  }
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)