import React from 'react'

interface SplitSectionUI {
  direction: 'image-left' | 'image-right' | string;
  heading: string;
  imgTitle: string;
  imgUrl: string;
  textContent: string;
}

export const SplitSection = (props: SplitSectionUI) => (
  <div className={`row flex-column-reverse ${props.direction === 'image-left' ? 'flex-md-row-reverse' : 'flex-md-row'}`}>
    <div className="col-md-6">
      <h2 className="mt-4 mt-md-0 mb-3 h4">{props.heading}</h2>

      <p>{props.textContent}</p>
    </div>

    <div className={`col-md-6 d-flex ${props.direction === 'image-right' ? 'justify-content-md-end' : 'justify-content-md-start'}`}>
      {props.imgUrl.length === 0 ? (
        <svg className="bd-placeholder-img rounded float-left" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 200x200"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="35%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
      ) : (
        <img src={props.imgUrl} alt={props.imgTitle} />
      )}
    </div>
  </div>
)
