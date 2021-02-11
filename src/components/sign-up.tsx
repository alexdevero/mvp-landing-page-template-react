import React from 'react'

import { signUpConfig } from './../config/config'

interface SignUpUI {
  signUpEmail: string;
  handleSetSignUpEmail: React.Dispatch<React.SetStateAction<string>>;
  successMessage: string;
  errorMessage: string;
  handleSubmitForm: () => void;
  spamBotMessage: string;
  handleSetSpamBotMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const SignUp = (props: SignUpUI) => (
  <div className="row justify-content-center position-relative align-items-center" style={{ minHeight: '440px' }}>
    <img
      className="position-absolute"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        maxWidth: '100%',
        objectFit: 'contain'
      }}
      src={require('./../images/sing-up-bcg.svg')}
      alt=""
    />

    <div className="col-md-10 col-lg-8 col-xl-7">
      <div className="card shadow border-0">
        <div className="card-body p-5">
          <h1 className="mt-0 mb-4 h3 text-center">{signUpConfig.signUpHeading}</h1>

          <p className="m-0 lead font-weight-normal text-center">{signUpConfig.signUpText}</p>

          <div className="form-inline mt-4 form-row">
            <div className="col-md-8">
              {/* <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div> */}

              <input
                type="text"
                className="form-control w-100"
                id="inlineFormInputGroup"
                placeholder={signUpConfig.signUpInputPlaceholder}
                value={props.signUpEmail}
                onChange={(event) => props.handleSetSignUpEmail(event.currentTarget.value)}
              />
            </div>

            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary w-100 mt-3 mt-md-0"
                onClick={props.handleSubmitForm}
              >{signUpConfig.signUpButtonText}</button>
            </div>

            <div className="col-12 d-none">
              {/* <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div> */}

              <input
                type="text"
                className="form-control w-100"
                id="inlineFormInputGroup"
                placeholder=""
                value={props.spamBotMessage}
                onChange={(event) => props.handleSetSpamBotMessage(event.currentTarget.value)}
              />
            </div>
          </div>

          {props.successMessage.length > 0 && (
            <div className="text-danger font-weight-bold small mt-2">{props.errorMessage}</div>
          )}

          {props.errorMessage.length > 0 && (
            <div className="text-danger font-weight-bold small mt-2">{props.errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  </div>
)
