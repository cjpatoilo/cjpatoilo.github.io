import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => (
  <div>
    <header className="container__header">
      <h1 className="header__title">CJ Patoilo</h1>
      <blockquote className="header__description">Life Hacker based in Brazil. Engineer of things. Creator of <a className="header__link" href="https://github.com/milligram/milligram" title="Milligram - A minimalist CSS framework.">Milligram</a> and <a className="header__link" href="https://github.com/airform/airform" title="Airform - Functional HTML forms. Keeping it plane and simple.">Airform</a>.</blockquote>
    </header>
    <footer className="container__footer">
      <ul className="social__list">
        <li className="social__item">
          <a className="social__link fa fa-github" href="https://github.com/cjpatoilo" title="My writings" rel="noopener" target="_blank"></a>
        </li>
        <li className="social__item">
          <a className="social__link fa fa-twitter" href="https://twitter.com/cjpatoilo" title="My thoughts" rel="noopener" target="_blank"></a>
        </li>
        <li className="social__item">
          <a className="social__link fa fa-linkedin" href="https://linkedin.com/in/cjpatoilo" title="My skills" rel="noopener" target="_blank"></a>
        </li>
        <li className="social__item">
          <a className="social__link fa fa-medium" href="https://medium.com/@cjpatoilo" title="My talks" rel="noopener" target="_blank"></a>
        </li>
        <li className="social__item">
          <a className="social__link fa fa-envelope" href="mailto:cjpatoilo@gmail.com?subject=Hi" title="My contact" rel="noopener" target="_blank"></a>
        </li>
      </ul>
    </footer>
  </div>
))


// <li className="social__item">
//   <a className="social__link fa fa-instagram" href="https://instagram.com/cjpatoilo" title="My photos" rel="noopener" target="_blank"></a>
// </li>
// <li className="social__item">
//   <a className="social__link fa fa-behance" href="https://behance.net/cjpatoilo" title="My designs" rel="noopener" target="_blank"></a>
// </li>