import React from 'react'
import AppState from '../../AppState'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Page from '../../components/Page'
import SimilarVillages from '../../components/SimilarVillages'

class VillagePage extends React.Component {
  static contextType = AppState
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
  }

  render() {
    const path = document.location.pathname
    const uname = path.substr(9)
    let village = []

    const villages = this.context.villages
    for (let i=0;i<villages.length;i++) {
      if (villages[i].uname === uname) {
        village = villages[i]
      }
    }
    this.context.selectedVillage = village.name

    return (
      <>
        <Page village={village} />
        <Container maxWidth='lg'
          style={{
            padding: '15px 0'
          }}
        >
          {/*<h3 style={{padding:'25px 0 15px 15px'}}>Если вы смотрите этот поселок, то вам подойдут:</h3>*/}
          <Box m={2}>
            <SimilarVillages uid={village.uid} road={village.road} price={village.price}/>
          </Box>
        </Container>
      </>
    )
  }
}

export default VillagePage
