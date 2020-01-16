import React from 'react';
import './Layout.scss';

function Section(props) {

  const { layout, section} = props

  return (
    <section className={section || null}>
      <div className={`wrapper wrapper--${(layout || 'full')}`}>
        {props.children}
      </div>
    </section>
  )
}

function Column(props) {

  const { styled } = props
  
  return (
    <div className={`wrapper__col ${styled}`}>
      {props.children}
    </div>
  )
}

export { Section, Column };
