import React from 'react'
import NavItem from './NavItem'

class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  toggle = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    })
  }
  close = () => {
    this.setState(() => {
      return { open: false };
    })
  }
  render(){
    const { props } = this
    return (
      <React.Fragment>
        <nav className={this.state.open ? 'LeftNav LeftNav_open' : 'LeftNav'}>
          <div className="LeftNav__wrapper">
            <ul className="LeftNav__ul">
              <NavItem key={0} active={props.active} toID={0} to="/" text="Home" onClick={this.close} />
              {
                props.pages.map(page => (
                  <NavItem key={page.order} toID={page.order} to={'/' + page.slug} text={page.title} onClick={this.close} />
                ))
              }
            </ul>
          </div>
        </nav>
        <button className={ this.state.open ? "navToggle hamburger hamburger--spin is-active" : "navToggle hamburger hamburger--spin"} type="button" onClick={this.toggle}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </React.Fragment>
    )
  }
}


// <NavItem active={this.props.active} to="/" text="Welcome from the President"/>
// <NavItem active={this.props.active} to="/purpose" text="Purpose"/>
// <NavItem active={this.props.active} to="/who-we-are" text="Who We Are"/>
// <NavItem active={this.props.active} to="/spiritual-formation" text="Spiritual Formation"/>
// <NavItem active={this.props.active} to="/student-body" text="Student Body"/>
// <NavItem active={this.props.active} to="/academic-institutional-relationships" text="Academic Institutional Relationships"/>
// <NavItem active={this.props.active} to="/student-association" text="Student Association"/>
// <NavItem active={this.props.active} to="/degree-programs" text="Degree Programs"/>
// <NavItem active={this.props.active} to="/course-descriptions" text="Course Descriptions"/>
// <NavItem active={this.props.active} to="/lifelong-learning" text="Lifelong Learning"/>
// <NavItem active={this.props.active} to="/information-resources" text="Information Resources"/>
// <NavItem active={this.props.active} to="/admissions-candidacy" text="Admissions & Candidacy"/>
// <NavItem active={this.props.active} to="/finances-services" text="Finances & Services"/>
// <NavItem active={this.props.active} to="/board" text="Board of Trustees"/>
// <NavItem active={this.props.active} to="/faculty" text="Faculty"/>
// <NavItem active={this.props.active} to="/maps" text="Maps"/>
// <NavItem active={this.props.active} to="/academic-calendar" text="Academic Calendar"/>
export default LeftNav
