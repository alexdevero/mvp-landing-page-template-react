import React from 'react'

import { signUpConfig } from './../config/config'

interface SignUpUI {
  signUpEmail: string;
  handleSetSignUpEmail: React.Dispatch<React.SetStateAction<string>>;
  successMessage: string;
  errorMessage: string;
  handleSubmitForm: () => void;
}

export const SignUp = (props: SignUpUI) => (
  <>
    <h1 className="mt-0 mb-4 h2 text-center">{signUpConfig.signUpHeading}</h1>

    <p className="m-0 text-center">{signUpConfig.signUpButtonText}</p>

    <div className="row justify-content-center mt-4">
      <div className="col-sm-9 col-md-8 col-lg-6 col-xl-5">
        <div className="form-inline">
          <div className="input-group flex-grow-1">
            {/* <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div> */}

            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder={signUpConfig.signUpInputPlacehodler}
              value={props.signUpEmail}
              onChange={(event) => props.handleSetSignUpEmail(event.currentTarget.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary flex-grow-1 flex-md-grow-0 mt-3 mt-md-0"
            onClick={props.handleSubmitForm}
          >{signUpConfig.signUpButtonText}</button>
        </div>

        {props.successMessage.length > 0 && (
          <div className="text-danger font-weight-bold small mt-2">{props.errorMessage}</div>
        )}

        {props.errorMessage.length > 0 && (
          <div className="text-danger font-weight-bold small mt-2">{props.errorMessage}</div>
        )}
      </div>
    </div>
  </>
)
