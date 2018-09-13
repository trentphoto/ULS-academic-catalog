import React from 'react'
import Hero from '../components/Hero'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


const Page404 = () => {
  return (
    <div className="site-content">
      <Hero title={'Page not found'} imgUrl={'https://public.unitedlutheranseminary.org/catalog-admin/storage/uploads/00000000022.jpg'} />
      <section className="section post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <Helmet title={'Not Found | ULS Academic Catalog'} />

              <p>Would you like to <Link exact to="/welcome">go back to the homepage?</Link></p>

            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Page404;
