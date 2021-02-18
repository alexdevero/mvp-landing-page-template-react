import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { navConfig } from './../config/config'

interface HeaderUI {
  darkMode: boolean;
  handleDarkMode: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Header = (props: HeaderUI) => (
  <header className="pt-3 pb-3">
    <div className="container">
      <ul className="list-inline d-flex align-items-end justify-content-space-between">
        <li className="p-1"><AnchorLink href="#mainFeatures">Features</AnchorLink></li>

        <li className="p-1"><AnchorLink href="#pricing">Pricing</AnchorLink></li>

        {/* <li className="p-1"><AnchorLink href="#testimonials">Testimonials</AnchorLink></li> */}

        <li className="p-1 mr-auto"><AnchorLink href="#signUp">Sign Up</AnchorLink></li>

        {navConfig.useDarkMode && (
          <li>
            <div
              className="custom-control custom-switch"
              onClick={(event) => props.handleDarkMode(event)}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                checked={props.darkMode}
                readOnly={true}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                <span aria-label="Crescent Moon" role="img">🌙</span>

                <span className="sr-only sr-only-focusable">Toggle dark mode</span>
              </label>
            </div>
          </li>
        )}
      </ul>
    </div>
  </header>
)
