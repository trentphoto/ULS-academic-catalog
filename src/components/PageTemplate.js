import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Hero from './Hero'
import FooterNav from './FooterNav'

const PageTemplate = (props) => {
  // if a featured img is provided, set the imgUrl const to that - otherwise use a generic campus one
  const imgUrl = props.page.img ? 'https://public.unitedlutheranseminary.org' + props.page.img.data.url : 'https://public.unitedlutheranseminary.org/catalog-admin/storage/uploads/00000000029.jpg'
  return (
    <div className="site-content">
      <Hero title={props.page.title} imgUrl={imgUrl} />
      <section className="section post-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-12">
              <Helmet title={props.page.title + ' | ULS Academic Catalog'} />

              <div dangerouslySetInnerHTML={{__html: props.page.content}} />

            </div>
          </div>
        </div>
      </section>
      <FooterNav currentPage={props.page} pages={props.pages} />
    </div>
  );
}

PageTemplate.propTypes = {
  page: PropTypes.object
}

export default PageTemplate
