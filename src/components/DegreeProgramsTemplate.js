import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import DegreeSingle from './DegreeSingle'

import Hero from './Hero'
import FooterNav from './FooterNav'




const DegreeProgramsTemplate = (props) => {

  const DegreeSingleWrapper = (newProps) => (
    <DegreeSingle
      degrees={props.degrees}
      {...newProps}
      />
  )

  const imgUrl = 'https://public.unitedlutheranseminary.org/catalog-admin/storage/uploads/00000000029.jpg'
  return (
    <React.Fragment>
      <div className="site-content">
        <Helmet title="Degree Programs" />
        <Hero title="Degree Programs" imgUrl={imgUrl} />
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <ul className="navbar-nav px-5">
              <li className="nav-item">
                <NavLink exact to={props.match.url} className="nav-link">All</NavLink>
              </li>
              {
                props.degrees.map(i => (
                  <li key={i.name} className="nav-item">
                    <NavLink to={`${props.match.url}/${i.slug}`} className="nav-link">{i.name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
        <section className="section post-content">
          <div className="container">
            <div className="row">


                <Route path={`${props.match.url}/:slug`} component={DegreeSingleWrapper} />
                <Route exact path={props.match.url} render={() => (
                    <div className="card-columns">
                      {
                        props.degrees.map(i => (
                          <Link key={i.name} to={`${props.match.url}/${i.slug}`}>
                            <div className="card">
                              <div className="card-body">
                                <h2 className="card-title">
                                  {i.name}
                                </h2>
                              </div>
                            </div>
                          </Link>
                        ))
                      }
                    </div>
                )} />

            </div>
          </div>
        </section>
        <FooterNav currentPage={props.page} pages={props.pages} />
      </div>
    </React.Fragment>
  );
}

DegreeProgramsTemplate.propTypes = {
  degrees: PropTypes.array
}

export default DegreeProgramsTemplate
