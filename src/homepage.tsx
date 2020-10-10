import React, { useState } from 'react'
import axios from 'axios'

// Import components
import { Hero } from './components/hero'
import { Features } from './components/features'
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
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccesMessage] = useState('')

  const submitForm = () => {
    if (signUpEmail.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(signUpEmail)) {
      console.log(signUpEmail)
      setErrorMessage('')

      axios
        .post('url to php file', signUpEmail)
        .then(res => {
          setSignUpEmail('')
          setSuccesMessage(res.data)
        })
        .catch(err => setErrorMessage(err))
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
          return <Container sectionName="hero" hasContainer={true} key={splitScreen.splitScreenID}>
              <SplitSection
              direction={splitScreen.splitScreenDirection}
              heading={splitScreen.splitScreenHeading}
              textContent={splitScreen.splitScreenText}
              imgTitle={splitScreen.splitScreenImageTitle}
              imgUrl={splitScreen.splitScreenImageUrl}
            />
            </Container>
        })}

        <Container sectionName="Features" hasContainer={true}>
          <Features />
        </Container>

        <Container sectionName="Pricing" hasContainer={true}>
          <Pricing />
        </Container>

        <Container sectionName="SignUp" hasContainer={true}>
          <SignUp
            signUpEmail={signUpEmail}
            handleSetSignUpEmail={setSignUpEmail}
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
