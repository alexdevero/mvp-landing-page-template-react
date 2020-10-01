import React from 'react'

import { navConfig } from './../config/config'

interface HeaderUI {
  darkMode: boolean;
  handleDarkMode: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Header = (props: HeaderUI) => (
  <header className="pt-3 pb-3">
    <div className="container">
      <ul className="list-inline d-flex align-items-end justify-content-end">
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
