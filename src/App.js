import React, { Suspense, lazy } from 'react'
import AppState from './AppState'
import Loader from './components/Loader'
import PropTypes from 'prop-types'
import {Redirect, Route, Routes, Switch} from "react-router-dom";
import {Wordpress} from "./pages/wordpress";

const ContactPage = lazy(() => import('./pages/contact'))
const ServicesPage = lazy(() => import('./pages/services'))
const VillagesPage = lazy(() => import('./pages/villages'))
const VillagePage = lazy(() => import('./pages/village'))
const WelcomePage = lazy(() => import('./pages/welcome'))

const Top = lazy(() => import('./components/Top'))
const Main = lazy(() => import('./components/Main'))
const StickyFooter = lazy(() => import('./components/StickyFooter'))


class App extends React.Component {
  static contextType = AppState
  static propTypes = {
    villages: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.context.setVillages(this.props.villages)
  }

  componentWillUnmount() {
  }


  render() {
    // const api_regex = /^\/zagzem-back\/wp-admin\/.*/
    // // if using "/zagzem-back/" in the pathname, don't use React Router
    // if (api_regex.test(window.location.pathname)) {
    //   return window.location.href='https://zagzem.ru/zagzem-back/wp-admin/' // must return at least an empty div
    // } else {
      return (
          <Suspense fallback={<Loader/>}>
            <Top/>
            <Main>
              {/*<Switch>*/}
              {/*  <Route path='/contact' component={ContactPage} />*/}
              {/*  <Route path='/services' component={ServicesPage} />*/}
              {/*  <Route path='/villages' component={VillagesPage} />*/}
              {/*  <Route path='/village' component={VillagePage} />*/}
              {/*  <Route exact path='/' component={WelcomePage} />*/}
              {/*  <Redirect to='/' />*/}
              {/*</Switch>*/}
              <Routes>
                  {/*<Route path='/test' element={() => {*/}
                  {/*    console.log('test')*/}
                  {/*    window.location.href = 'https://www.reddit.com/r/reactjs/comments/7u1uqd/getting_react_router_to_ignore_a_route_for_an_api/';*/}
                  {/*    return <div>11</div>*/}
                  {/*}}/>*/}
                  {/*<Route path='/zagzem-back/wp-admin/' element={<Wordpress/>}/>*/}
                <Route exact path='/contact' element={<ContactPage/>}/>
                <Route exact path='/services' element={<ServicesPage/>}/>
                <Route exact path='/villages' element={<VillagesPage/>}/>
                <Route exact path='/village/' element={<VillagePage/>}>
                  <Route path=":id" element={<VillagePage/>}/>
                </Route>
                {/*<Route*/}
                {/*    path='/:id'*/}
                {/*    element={<VillagePage />}*/}
                {/*/>*/}
                <Route exact path='/' element={<WelcomePage/>}/>
              </Routes>
            </Main>
            <StickyFooter/>
          </Suspense>
      )
    // }
  }
}

export default App
