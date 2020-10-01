import React from 'react'

import { featuresConfig } from './../config/config'

export const Features = () => (
  <div className="row">
    {featuresConfig.features.length > 0 && featuresConfig.features.map((feature, i) => {
      return (
        <div
          className={`col-md-6 col-lg-${12 / featuresConfig.featuresItemsPerRow} ${i > 0 ? 'mt-5' : ''} ${i === 1 ? 'mt-md-0' : ''} ${i === 2 ? 'mt-lg-0' : ''}`}
        >
          {feature.featureImageUrl.length > 0 ? (
            <img src={feature.featureImageUrl} alt={feature.featureHeading} />
          ) : (
            <svg className="bd-placeholder-img rounded mb-4" width="100" height="100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 100x100"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="20%" y="50%" fill="#dee2e6" dy=".3em">100x100</text></svg>
          )}

          <h2 className="mt-0 mb-3 h4">{feature.featureHeading}</h2>

          <p className="m-0">{feature.featureText}</p>
        </div>
      )
    })}
  </div>
)
