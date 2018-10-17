import React from 'react'

import Logo from '../img/logo.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
library.add(faPrint)

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img
          src={Logo}
          className="Header__logo"
          alt={`Logo`}
        />
        <span className="Header__title">Academic Catalog 2018-19</span>
        <a href="https://unitedlutheranseminary.edu/wp-content/uploads/2018/10/ULS-Academic-Catalog-2018-19.pdf" className="btn btn-primary btn_print">
          <FontAwesomeIcon icon="print" className="mr-2" />
          <span>
            Printable PDF Catalog
          </span>
        </a>
      </header>
    )
  }
}

export default Header
