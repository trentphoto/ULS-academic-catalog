import React from 'react'
import PropTypes from 'prop-types'
import { Link, Element } from 'react-scroll'

const DegreeSingle = (props) => {
  const { match } = props

  let currentDegree

  props.degrees.map(i => {
    if (i.slug === match.params.slug) {
      currentDegree = i
    }
    return null;
  })

  return (
    <React.Fragment>
      <div className="col-xl-8 col-12">
        <Element name="top">
          <h1>{currentDegree.name}</h1>
          <p className="lead">{currentDegree.subtitle}</p>
          <div dangerouslySetInnerHTML={{__html: currentDegree.desc}} />
        </Element>
        {
          currentDegree.outcomes && (
            <Element name="outcomes">
              <h2>Learning Outcomes</h2>
              <div dangerouslySetInnerHTML={{__html: currentDegree.outcomes}} />
            </Element>
          )
        }
        {
          currentDegree.requirements && (
            <Element name="requirements">
              <h2>Requirements</h2>
              <div dangerouslySetInnerHTML={{__html: currentDegree.requirements}} />
            </Element>
          )
        }
        {
          currentDegree.sample_track && (
            <Element name="sample_track">
              <h2>Sample Track</h2>
              <div dangerouslySetInnerHTML={{__html: currentDegree.sample_track}} />
            </Element>
          )
        }
        {
          currentDegree.concentra && (
            <Element name="concentrations">
              <h2>Concentrations</h2>
              <div dangerouslySetInnerHTML={{__html: currentDegree.concentra}} />
            </Element>
          )
        }
      </div>
      <div className="col-xl-4 d-none d-xl-block">
        <div className="scrollspy">
          {
            currentDegree.desc && (
              <li>
                <Link to="top" spy={true} offset={-120} smooth={true} duration={500}>Description</Link>
              </li>
            )
          }
          {
            currentDegree.outcomes && (
              <li>
                <Link to="outcomes" spy={true} offset={-120} smooth={true} duration={500}>Learning Outcomes</Link>
              </li>
            )
          }
          {
            currentDegree.requirements && (
              <li>
                <Link to="requirements" spy={true} offset={-120} smooth={true} duration={500}>Requirements</Link>
              </li>
            )
          }
          {
            currentDegree.sample_track && (
              <li>
                <Link to="sample_track" spy={true} offset={-120} smooth={true} duration={500}>Sample Track</Link>
              </li>
            )
          }
          {
            currentDegree.concentra && (
              <li>
                <Link to="concentrations" spy={true} offset={-120} smooth={true} duration={500}>Concentrations</Link>
              </li>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}

DegreeSingle.propTypes = {
  degrees: PropTypes.array
}

export default DegreeSingle
