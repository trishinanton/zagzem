import React, { Suspense, lazy } from 'react'
import AppState from './AppState'
import Loader from './components/Loader'
import PropTypes from 'prop-types'
import AppRoutes from './AppRoutes.js';

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
              <AppRoutes />
            </Main>
            <StickyFooter/>
          </Suspense>
      )
    // }
  }
}

export default App
