import React from 'react'

import { footerConfig } from './../config/config'

export const Footer = () => (
  <footer className="pt-3 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-8">
          <p className="text-center m-0 small">{footerConfig.footerCopyrightText}</p>
        </div>

        <div className="col-md-6 col-lg-4">
          {footerConfig.footerLinks.length > 0 && (
            <ul className="list-inline d-flex justify-content-end align-items-center">
              {footerConfig.footerLinks.map(footerLink => {
                return (
                  <li>
                    <a
                      href={footerLink.footerLinkUrl}
                      className={`h5 text-decoration-none mr-3`}
                      title={footerLink.footerLinkTitle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={footerLink.footerLinkIconName} />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  </footer>
)
