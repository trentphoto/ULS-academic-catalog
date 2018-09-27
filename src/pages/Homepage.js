import React from 'react'
import Hero from '../components/Hero'
import { Helmet } from 'react-helmet'
import FeatureCard from '../components/FeatureCard'

const Homepage = (props) => (
  <div className="site-content">
    <Hero title="ULS Academic Catalog 2018-2019" imgUrl={'https://public.unitedlutheranseminary.org/catalog-admin/storage/uploads/00000000029.jpg'} home />
    <Helmet title="United Lutheran Seminary Academic Catalog" />
    <section className="section post-content">
      <div className="container">
        <div className="row">
          <div className="card-columns">
            {
              props.pages.map(page => (
                  <FeatureCard key={page.title} page={page} />
              ))
            }
          </div>
        </div>
        <div className="row">
          <div className="col-12 font-italic">
            <small>The Seminary Catalog is a statement of the policies, personnel, programs, and financial arrangements of United Lutheran Seminary as projected by the responsible authorities of the Seminary. The Seminary reserves the right to make alterations without prior notice, in accordance with the Seminary’s institutional needs and academic purposes.</small>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Homepage;
