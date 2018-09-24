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
        <div className="btn btn-primary btn_print">
          <FontAwesomeIcon icon="print" className="mr-2" />
          <span>
            Print Catalog
          </span>
        </div>
      </header>
    )
  }
}

export default Header
