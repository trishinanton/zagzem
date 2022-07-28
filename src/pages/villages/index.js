import React, { useState, useEffect } from 'react'
import AppState from '../../AppState'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import FilterListIcon from '@material-ui/icons/FilterList'
import Filter from '../../components/Filter'
import ReviewCard from '../../components/ReviewCard'
import Chooser from "../../components/Chooser";
import { villagesThumbnail as villages } from '../../index'
import { useFilterClicked } from '../..'

const postsPerPage = 9

function arrayOfVillages(villages) {
  // creating array with directions
  let buildingDirections = [
    {
      side: 1,
      sideName: 'Северное направление',
      buildings: []
    },
    {
      side: 2,
      sideName: 'Южное направление:',
      buildings: []
    },
    {
      side: 3,
      sideName: 'Западное направление:',
      buildings: []
    },
    {
      side: 4,
      sideName: 'Восточное направление:',
      buildings: []
    },
    {
      side: 5,
      sideName: 'Юго-западное направление:',
      buildings: []
    },
    {
      side: 6,
      sideName: 'Юго-восточное направление',
      buildings: []
    },
    {
      side: 7,
      sideName: 'Северо-западное направление',
      buildings: []
    }
  ]
  // making an array of buildings sorting it
  for (const { sideOfMkad, ...props } of villages) {
    buildingDirections[sideOfMkad - 1].buildings.push({ sideOfMkad, ...props })
  }

  // removing all empty building directions
  buildingDirections = buildingDirections.filter(({ buildings }) => buildings.length !== 0)

  return buildingDirections
}

function useVillageArray(villages) {
  let buildingDirections = [
    {
      side: 1,
      sideName: 'Северное направление',
      buildings: []
    },
    {
      side: 2,
      sideName: 'Южное направление:',
      buildings: []
    },
    {
      side: 3,
      sideName: 'Западное направление:',
      buildings: []
    },
    {
      side: 4,
      sideName: 'Восточное направление:',
      buildings: []
    },
    {
      side: 5,
      sideName: 'Юго-западное направление:',
      buildings: []
    },
    {
      side: 6,
      sideName: 'Юго-восточное направление',
      buildings: []
    },
    {
      side: 7,
      sideName: 'Северо-западное направление',
      buildings: []
    }
  ]
  // making an array of buildings sorting it
  for (const { sideOfMkad, ...props } of villages) {
    buildingDirections[sideOfMkad - 1].buildings.push({ sideOfMkad, ...props })
  }

  // removing all empty building directions
  buildingDirections = buildingDirections.filter(({ buildings }) => buildings.length !== 0)


  // create two empty arrays for both holded and display posts
  const buildingDirectionsDisplay = []
  const buildingDirectionsHolded = []

  // getting posts we should hold and display
  for (const { buildings } of buildingDirections) {
    buildingDirectionsDisplay.push(buildings.slice(0, postsPerPage))
    buildingDirectionsHolded.push(buildings.slice(postsPerPage))
  }

  // push to the original array what we should display
  for (const index in buildingDirections) {
    buildingDirections[index].buildings = buildingDirectionsDisplay[index]
  }
  return { buildingDirections, buildingDirectionsHolded }
}

function VillagesPage() {
  const { filteredVillages: villages } = React.useContext(AppState)
  console.log('villages: ', villages);

  const [filterClicked, setFilterClicked] = useFilterClicked()


  const { buildingDirectionsHolded, buildingDirections } = useVillageArray(villages)

  const [showFilter, setShowFilter] = useState(false)
  const [render, setRender] = useState(false)

  const [hideButton, setHideButton] = useState()

  const [posts, setPosts] = useState(buildingDirections)
  const [holdedPosts, setHoldedPosts] = useState(buildingDirectionsHolded)

  React.useEffect(() => {
    if (filterClicked) {
      setPosts(arrayOfVillages(villages))
      setHideButton(true)
    }
    if (!filterClicked) {
      setPosts(buildingDirections)
      console.log('buildingDirections: ', buildingDirections);
      setHoldedPosts(buildingDirectionsHolded)
      console.log('buildingDirectionsHolded: ', buildingDirectionsHolded);
      setHideButton(false)
    }


  }, [filterClicked, villages])


  function handleShowMore(index) {
    // getting new posts to publshing them from holded posts  
    const getNewPosts = [...posts[index].buildings, ...holdedPosts[index].slice(0, postsPerPage)]
    // remove ${postsPerPage} posts from holdedPosts
    const deleteHoldedPosts = [...holdedPosts[index].slice(postsPerPage)]
    // making a copy of array
    const postsCopied = Array.from(posts)
    const holdedPostsCopied = Array.from(holdedPosts)
    // pusing new posts to update value
    postsCopied[index].buildings = getNewPosts
    // updating holding posts
    holdedPostsCopied[index] = deleteHoldedPosts

    setPosts(postsCopied)
    setHoldedPosts(holdedPostsCopied)
  }

  function handleRender() {
    window.scrollTo(0, 0)
    setHideButton(true)
    setRender(true)
  }

  return (
    <Grid container>
      {showFilter === true ? <Filter hidden={e => setShowFilter(false)} expanded={true} /> : ''}
      <Container maxWidth='lg' style={{ marginBottom: '33px' }}>
        <center>
          <h2>{posts.length < 1 ? 'Посёлков не найдено' : ''}</h2>
        </center>
        <Grid container spacing={3}>
          {posts.map(({ side, sideName, buildings }, index) => (
            <>
              {sideName ?
                <>
                  <Grid item xs={12} key={'HDR' + side}>
                    <h3 style={{ padding: '25px 0 15px 0' }}>{sideName}</h3>
                  </Grid>
                  {buildings.map((item, i) =>
                    <Grid item
                      key={'IL2E' + item.uname + i}
                      xs={12}
                      sm={6}
                      md={4}
                    >
                      <ReviewCard
                        uid={item.uid}
                        type={item.type}
                        uname={item.uname}
                        name={item.name}
                        bgs={item.bgs}
                        road={item.road}
                        fromMkad={item.fromMkad}
                        price={item.price}
                        leftLands={item.leftLands}
                        priceLands={item.priceLands}
                        sideOfMkad={item.sideOfMkad}
                        permittedUse={item.permittedUse}
                        communications={item.communications}
                      />
                    </Grid>
                  )}
                  {!hideButton ?
                    <div className="show-more">
                      <button
                        onClick={() => handleShowMore(index)}
                        hidden={holdedPosts[index].length === 0 ? true : false}
                      >
                        Показать еще
                      </button>
                    </div>
                    : null}
                </>
                : null}
            </>
          ))}
        </Grid>
      </Container>
      <div className='filter-button' onClick={e => {
        setShowFilter(true)
      }}>
        <h5 style={{ position: 'absolute', top: '-30px' }}>Подобрать</h5>
        <FilterListIcon style={{ width: '55px', height: '55px', color: '#FFF' }} />
      </div>
      <Container maxWidth='lg' >
        <Chooser render={handleRender} />
      </Container>
    </Grid>
  )
}

// export default VillagesPage


class VillagesPage1 extends React.Component {
  static contextType = AppState

  constructor(props) {
    super(props)

    this.state = {
      showFilter: false,
      url: 'http://poselki/wp-json/wp/v2/poselki',
      render: false
    }
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   // debugger
  //   return false
  // }

  // componentWillMount() {
  //   this.setFiltered()
  // }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    // window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    this.context.resetFilter()
  }

  setShowFilter = () => {
    this.setState({ showFilter: true })
  }
  setHideFilter = () => {
    this.setState({ showFilter: false })
  }
  // setFiltered = () => {
  //   this.setState({villages:this.context.filteredVillages})
  // }
  setRender = () => {
    window.scrollTo(0, 0)
    this.setState({ render: true })
  }

  render() {
    const uniqSides = [1, 2, 3, 4, 5, 6, 7]
    let villages = this.context.filteredVillages



    const arrSides = []

    for (let n = 0; n < uniqSides.length; n++) {
      const side = uniqSides[n]
      const newObj = []
      let sideName = ''
      if (side === 1) { sideName = 'Северное направление:' }
      if (side === 2) { sideName = 'Южное направление:' }
      if (side === 3) { sideName = 'Западное направление:' }
      if (side === 4) { sideName = 'Восточное направление:' }
      if (side === 5) { sideName = 'Юго-западное направление:' }
      if (side === 6) { sideName = 'Юго-восточное направление' }
      if (side === 7) { sideName = 'Северо-западное направление' }


      var newArray = villages.filter(function (el) { return el.sideOfMkad === side })

      if (newArray.length > 0) {
        newObj.push(
          <Grid item xs={12} key={'HDR' + side}>
            <h3 style={{ padding: '25px 0 15px 0' }}>{sideName}</h3>
          </Grid>
        )
        for (let i = 0; i < newArray.length; i++) {
          newObj.push(
            <Grid item
              key={'IL2E' + newArray[i].uname + i}
              xs={12}
              sm={6}
              md={4}
            >
              <ReviewCard
                uid={newArray[i].uid}
                type={newArray[i].type}
                uname={newArray[i].uname}
                name={newArray[i].name}
                bgs={newArray[i].bgs}
                road={newArray[i].road}
                fromMkad={newArray[i].fromMkad}
                price={newArray[i].price}
                leftLands={newArray[i].leftLands}
                priceLands={newArray[i].priceLands}
                sideOfMkad={newArray[i].sideOfMkad}
                permittedUse={newArray[i].permittedUse}
                communications={newArray[i].communications}
              />
            </Grid>
          )
        }
        arrSides.push(newObj)
      }
    }

    return (
      <Grid container>
        {this.state.showFilter === true ? <Filter hidden={this.setHideFilter} expanded={true} /> : ''}
        <Container maxWidth='lg' style={{ marginBottom: '33px' }}>
          <center><h2>{arrSides.length < 1 ? 'Посёлков не найдено' : ''}</h2></center>
          <Grid container spacing={3}>
            {arrSides}
          </Grid>
        </Container>
        <div className='filter-button' onClick={this.setShowFilter}>
          <h5 style={{ position: 'absolute', top: '-30px' }}>Подобрать</h5>
          <FilterListIcon style={{ width: '55px', height: '55px', color: '#FFF' }} />
        </div>
        <Container maxWidth='lg' >
          <Chooser render={this.setRender} />
        </Container>
      </Grid>
    )
  }
}

export default VillagesPage