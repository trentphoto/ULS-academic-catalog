import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterNav = (props) => {
  const { currentPage, pages } = props
  // create array of all page titles
  const pageTitles = pages.map(i => i.title)
  // find index of current page
  const currentPageIndex = pageTitles.indexOf(currentPage.title)

  const prevPage = pages[currentPageIndex - 1]
  const nextPage = pages[currentPageIndex + 1]

  return (
    <div className="FooterNav">
      {
        prevPage && (
          <Link className="FooterNav__item" to={`/${prevPage.slug}`} >
            <div>
              <span>Previous</span>
              <br />
              <span className="FooterNav__label">{ prevPage.title }</span>
            </div>
            <div className="FooterNav__icon FooterNav__icon_left">
              <FontAwesomeIcon icon="caret-left" />
            </div>
          </Link>
        )
      }
      {
        nextPage && (
          <Link className="FooterNav__item" to={`/${nextPage.slug}`} >
            <div>
              <span>Next</span>
              <br />
              <span className="FooterNav__label">{ nextPage.title }</span>
            </div>
            <div className="FooterNav__icon FooterNav__icon_right">
              <FontAwesomeIcon icon="caret-right" />
            </div>
          </Link>
        )
      }
    </div>
  )
}

FooterNav.propTypes = {
  currentPage: PropTypes.object,
  pages: PropTypes.array
}

export default FooterNav
