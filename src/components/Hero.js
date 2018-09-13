import React from 'react'

const Hero = (props) => (
  <div className={props.home ? 'Hero Hero_home' : 'Hero'} style={{backgroundImage: 'url(' + props.imgUrl + ')'}}>
    <div className="Hero__overlay"></div>
    <h1 className="Hero__h1">{props.title}</h1>
  </div>
)

export default Hero;
