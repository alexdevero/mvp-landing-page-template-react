import React from 'react'

import { heroConfig } from './../config/config'

interface HeroUI {
  signUpEmail: string;
  handleSetSignUpEmail: React.Dispatch<React.SetStateAction<string>>;
  successMessage: string;
  errorMessage: string;
  handleSubmitForm: () => void;
}

export const Hero = (props: HeroUI) => (
  <div className="jumbotron jumbotron-fluid bg-white pt-6 pb-6">
    <div className="row justify-content-center align-items-center text-center">
      <div className="col-md-8 col-lg-6">
        <h1 className="display-4 mt-0 mb-4">{heroConfig.heroHeading}</h1>

        <p className="lead mt-0 mb-0">{heroConfig.heroText}</p>

        <div className="mt-3">
          <div className="form-row justify-content-center align-items-center">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder={heroConfig.heroInputPlacehodler}
                value={props.signUpEmail}
                onChange={(event) => props.handleSetSignUpEmail(event.currentTarget.value)}
              />
            </div>

            <div className="col-sm-4 mt-3 mt-sm-0">
              <button
                type="submit"
                className="btn btn-primary btn-md w-100"
                onClick={props.handleSubmitForm}
              >{heroConfig.heroButtonText}</button>
            </div>
          </div>

          {props.successMessage.length > 0 && (
            <div className="text-danger font-weight-bold small mt-2">{props.errorMessage}</div>
          )}

          {props.errorMessage.length > 0 && (
            <div className="text-danger font-weight-bold small mt-2">{props.errorMessage}</div>
          )}
        </div>

        {heroConfig.heroHasCta && (
          <a
            className="btn btn-primary btn-md"
            href={heroConfig.heroCtaLink}
            role="button"
          >{heroConfig.heroCtaText}</a>
        )}
      </div>
    </div>
  </div>
)
