import React from 'react'

interface ContainerUI {
  sectionName: string;
  hasContainer: boolean;
  children: JSX.Element;
}

export const Container = (props: ContainerUI) => (
  <section className={`section section-${props.sectionName} pt-7 pb-7`}>
    {props.hasContainer ? (
      <div className="container">
        {props.children}
      </div>
    ) : (
      <div className="container-fluid">
        {props.children}
      </div>
    )}
  </section>
)
