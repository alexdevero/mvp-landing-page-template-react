import React from 'react'

import { finalBenefits } from './../config/config'

export const FinalBenefits = () => (
  <div className="row">
    {finalBenefits.finalBenefits.length > 0 && finalBenefits.finalBenefits.map((finalBenefit, i) => {
      return (
        <div
          key={finalBenefit.finalBenefitsID}
          className={`col-md-6 col-lg-${12 / finalBenefits.finalBenefitsItemsPerRow} ${i > 0 ? 'mt-5' : ''} ${i === 1 ? 'mt-md-0' : ''} ${i === 2 ? 'mt-lg-0' : ''}`}
        >
          {finalBenefit.finalBenefitsImageUrl.length > 0 ? (
            <img src={finalBenefit.finalBenefitsImageUrl} alt={finalBenefit.finalBenefitsHeading} />
          ) : (
            <svg className="bd-placeholder-img rounded mb-4" width="100" height="100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 100x100"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="20%" y="50%" fill="#dee2e6" dy=".3em">100x100</text></svg>
          )}

          <h2 className="mt-0 mb-3 h5">{finalBenefit.finalBenefitsHeading}</h2>

          <p className="m-0 font-weight-normal text-secondary">{finalBenefit.finalBenefitsText}</p>
        </div>
      )
    })}
  </div>
)
