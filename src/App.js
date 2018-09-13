import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './sass/App.css';

import Header from './components/Header'
import Loader from './components/Loader'
import LeftNav from './components/LeftNav'
import PageTemplate from './components/PageTemplate'
import DegreeProgramsTemplate from './components/DegreeProgramsTemplate' // eslint-disable-line
import Page404 from './pages/Page404'
import Homepage from './pages/Homepage'
import ScrollToTop from './components/ScrollToTop'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretLeft, faCaretRight)




class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      pages: [],
      programs: [],
    }
  }

  componentDidMount(){
    const auth = {
      headers: {
        'Authorization': "Bearer ax7eDRucZkJGKV2gwli3nr49AEdQkEPt"
      }
    }

    // function to sort the pages by index
    const sortByOrder = (a, b) => {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    }

    // load the pages
    axios.get('https://public.unitedlutheranseminary.org/catalog-admin/api/1.1/tables/page/rows', auth)
      .then(res => {
        const pages_unsorted = res.data.data

        // sort the pages by their order value, assigned in the CMS
        const pages = pages_unsorted.sort(sortByOrder)

        this.setState({ pages }, ()=>this.setState({loading: false}))

      })
      .catch(err => console.log(err))

    // load the degree programs
    axios.get('https://public.unitedlutheranseminary.org/catalog-admin/api/1.1/tables/degree-programs/rows', auth)
      .then(res => {
        this.setState({ programs: res.data.data })
      })
  }

  prepHomepage = (props) => {
    // the IDs of pages we want to feature in boxes on the homepage
    const pagesToInclude = [1,2,6]
    // filter all pages and return these 4
    const homeBoxPages = this.state.pages.filter(page => pagesToInclude.indexOf(page.id) !== -1 )
    // return the homepage component with the pages passed as a prop
    return (
      <Homepage pages={homeBoxPages} {...props} />
    );
  }

  prepPages = () => {
    return this.state.pages.map(single => {

      // create functions so we can pass additional props to each route
      const MyPageTemplate = (props) => (
        <PageTemplate
          page={single}
          pages={this.state.pages}
          {...props}
          />
      )
      const MyDegreeProgramsTemplate = (props) => (
        <DegreeProgramsTemplate
          degrees={this.state.programs}
          {...props}
          />
      )

      switch (single.order) {
        case 11:
          return <Route key={single.order} path={'/' + single.slug} render={MyDegreeProgramsTemplate} />;
        break; // eslint-disable-line
        default:
          return <Route key={single.order} path={'/' + single.slug} render={MyPageTemplate} />;
      }

    })
  }

  render() {
    if (this.state.loading) {
      return (
        <Loader />
      );
    }

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header />
            <main>
              <LeftNav pages={this.state.pages} />

              <Switch>
                <Route exact path="/" render={this.prepHomepage} />
                {
                  this.prepPages()
                }
                <Route component={Page404} />
              </Switch>

            </main>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;