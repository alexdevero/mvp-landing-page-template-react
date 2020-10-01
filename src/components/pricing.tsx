import React from 'react'

export const Pricing = () => (
  <div className="row">
    <div className="col-md-6 col-lg-4">
      <div className="card" style={{transform: 'scale(0.95)'}}>
        <h5 className="card-header text-center">Starter</h5>

        <div className="card-body">
          <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>

          <ul className="list-unstyled">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </div>

        <div className="card-footer bg-white text-center">
          <span className="h2">&#x00024;29</span>/mo
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mt-5 mt-md-0">
      <div className="card border-primary" style={{transform: 'scale(1.05)'}}>
        <h5 className="card-header bg-primary text-white text-center">Standard</h5>

        <div className="card-body">
          <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>

          <ul className="list-unstyled">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </div>

        <div className="card-footer bg-white text-center">
          <span className="h2">&#x00024;49</span>/mo
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mt-5 mt-lg-0">
      <div className="card" style={{transform: 'scale(0.95)'}}>
        <h5 className="card-header text-center">Pro</h5>

        <div className="card-body">
          <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>

          <ul className="list-unstyled">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
            <li>Six</li>
          </ul>
        </div>

        <div className="card-footer bg-white text-center">
          <span className="h2">&#x00024;99</span>/mo
        </div>
      </div>
    </div>
  </div>
)
