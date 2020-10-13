import React from 'react'

import { pricingConfig } from './../config/config'

export const Pricing = () => (
  <div className="row">
    {pricingConfig.tiers.map((tier, index) => {
      return <div key={tier.tierId} className={`col-md-6 col-lg-4${(index > 0) ? ' mt-5 mt-lg-0' : ''}`}>
        <div className="card border shadow-sm" style={{ /* transform: 'scale(0.95)' */ }}>
          <h5 className={`card-header text-center p-3${(tier.tierSelected ? ' bg-primary text-white' : ' bg-white')}`}>{tier.tierHeading}</h5>

          <div className="card-footer border-0 bg-white text-center pt-4">
            <span className="display-4 font-weight-bold p-3">&#x00024;{tier.tierPrice}</span>/{pricingConfig.pricingType}
          </div>

          <div className="card-body">
            <p className="card-text text-center">{tier.tierText}</p>

            <ul className="list-unstyled px-5 text-center">
              {tier.tierFeatures.map(tierFeature => {
                return !tierFeature.tierFeatureAvailable ? (
                  <li key={tierFeature.tierFeatureId} className="text-black-50">
                    <span className="fas fa-times mr-2" /> {tierFeature.tierFeatureTitle}
                  </li>
                ) : (
                  <li key={tierFeature.tierFeatureId}><span className="fas fa-check mr-1" /> {tierFeature.tierFeatureTitle}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    })}
  </div>
)
