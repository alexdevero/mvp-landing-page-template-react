import { useState } from 'react'
import $ from 'jquery'

// Import components
import { Hero } from './components/hero'
import { Features } from './components/features'
import { FinalBenefits } from './components/final-benefits'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Pricing } from './components/pricing'
import { Share } from './components/share'
import { SplitSection } from './components/split-section'
import { SignUp } from './components/sign-up'

import { Container } from './components/container'

import { splitScreenConfig, signUpConfig } from './config/config'

export const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [signUpEmail, setSignUpEmail] = useState('')
  const [spamBotMessage, setSpamBotMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const submitForm = () => {
    if (spamBotMessage.length === 0 && signUpEmail.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(signUpEmail)) {
      setErrorMessage('')
      // Process and send the email
      setTimeout(() => {
        $.ajax({
          data: {
            email: signUpEmail
          },
          type: 'POST',
          url: './contact.php',
          success: function(data) {
            // Reset email input state
            setSignUpEmail('')

            // Show and log success message
            setSuccessMessage('Your sign up was successful.')
            console.info(data)
          },
          error: function(xhr, status, err) {
            // Show and log error message
            console.log(xhr)
            console.error(status, err.toString())

            setErrorMessage('There was a problem with your sign up. Please refresh and page and try it again.')
          }
        })
      }, 1000)
    } else {
      setErrorMessage(signUpConfig.signUpErrorMessage)
    }
  }

  const handleModeChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()

    setDarkMode(!darkMode)
  }

  return (
    <div className={`page-wrapper ${darkMode ? 'mode-dark' : 'mode-light'}`}>
      <Header darkMode={darkMode} handleDarkMode={handleModeChange} />

      <div className="main-container">
        <Container sectionName="hero" hasContainer={true}>
          <Hero
            signUpEmail={signUpEmail}
            handleSetSignUpEmail={setSignUpEmail}
            errorMessage={errorMessage}
            successMessage={successMessage}
            handleSubmitForm={submitForm}
          />
        </Container>

        {splitScreenConfig.splitScreens.map(splitScreen => {
          return (
            <Container sectionName="hero" hasContainer={true} key={splitScreen.splitScreenID}>
              <SplitSection
                direction={splitScreen.splitScreenDirection}
                heading={splitScreen.splitScreenHeading}
                textContent={splitScreen.splitScreenText}
                imgTitle={splitScreen.splitScreenImageTitle}
                imgUrl={splitScreen.splitScreenImageUrl}
              />
            </Container>
          )
        })}

        <Container sectionName="Features" hasContainer={true}>
          <Features />
        </Container>

        <Container sectionName="Pricing" hasContainer={true} className="bg-light">
          <Pricing />
        </Container>

        <Container sectionName="FinalBenefits" hasContainer={true}>
          <FinalBenefits />
        </Container>

        <Container sectionName="SignUp" hasContainer={true}>
          <SignUp
            signUpEmail={signUpEmail}
            handleSetSignUpEmail={setSignUpEmail}
            spamBotMessage={spamBotMessage}
            handleSetSpamBotMessage={setSpamBotMessage}
            errorMessage={errorMessage}
            successMessage={successMessage}
            handleSubmitForm={submitForm}
          />
        </Container>

        <Container sectionName="Share" hasContainer={true}>
          <Share />
        </Container>
      </div>

      <Footer />
    </div>
  )
}
