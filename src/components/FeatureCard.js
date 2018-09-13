import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => {
  const imgUrl = props.page.img ? 'https://public.unitedlutheranseminary.org' + props.page.img.data.url : 'https://public.unitedlutheranseminary.org/catalog-admin/storage/uploads/00000000022.jpg'
  return (
    <Link to={'/' + props.page.slug} className="card FeatureCard">
      <img className="card-img" src={imgUrl} alt="" />
      <div className="overlay overlay_dark" />
      <div className="card-img-overlay">
        <h4 className="card-title text-white">{props.page.title}</h4>
      </div>
    </Link>
  )
}

FeatureCard.propTypes = {
  page: PropTypes.object
}

export default FeatureCard
