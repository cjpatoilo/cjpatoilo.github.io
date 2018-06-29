import React from 'react'

import Social from '../types/Social'
import './Social.css'

export default ({ list }: { list: Social[] }): JSX.Element => (
  <nav className="Social">
    <ul className="Social__list">
      {list.map(({ className, url, name }: Social, index: number): JSX.Element => (
        <li className="Social__item" key={index}>
          <a
            className={`Social__link fa fa-${className}`}
            href={url}
            title={name}
            rel="noopener"
            target="_blank"
          ></a>
        </li>
      ))}
    </ul>
  </nav>
)
