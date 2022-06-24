import { memo } from 'react'

export const Stats = memo(() => (
  <div className="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
    <div>
      <h1>Trusted by developers from over 40 countries</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto quae distinctio commodi a, necessitatibu.</p>
    </div>

    <div>
      <div>
        <h2>100%</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <div>
        <h2>24/7</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <div>
        <h2>100k</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
))

Stats.displayName = 'Stats'
