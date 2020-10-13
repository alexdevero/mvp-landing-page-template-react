import React from 'react'

import { shareConfig } from './../config/config'

export const Share = () => (
  <>
    <h1 className="mt-0 mb-4 h3 text-center">{shareConfig.shareHeading}</h1>

    <p className="mb-4 text-center text-secondary">{shareConfig.shareText}</p>

    {shareConfig.shareLinks.length > 0 && (
      <ul className="list-inline d-flex justify-content-center align-items-center m-0">
        {shareConfig.shareLinks.map(shareLink => {
          return (
            <li key={shareLink.shareLinkID}>
              <a
                href={shareLink.shareLinkUrl}
                className="mr-3 h3 text-decoration-none text-body"
                title={shareLink.shareLinkTitle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={`${shareLink.shareLinkIconName}`} />
              </a>
            </li>
          )
        })}
      </ul>
    )}
  </>
)
