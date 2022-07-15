import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import AppState from '../AppState'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: 'white'
  },
  tab: {
    backgroundColor: 'white',
    color: '#3c4b5a',
    fontSize: '80%',
    fontWeight: 'bold',
  },
  root: {
    position: 'relative',
    backgroundColor: 'white',
    margin: '50px 0',
    borderRadius: '15px',
    overflow: 'hidden'
  },
  btn: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    margin: '5px',
    width: 'calc(100% - 10px)',
    borderRadius: '15px',
    border: '1px solid #f0f4f5',
    background: '#f0f4f5',
    color: '#3c4b5a',
    textAlign: 'left',
    padding: '17px 22px',
    cursor: 'pointer',
    '&:hover': {
      color: '#3c4b5a',
      background: '#fff',
    },
  },
    btnActive: {
        color: '#53a321',
        background: '#fff',
        width: 'calc(100% - 10px)',
        border: '1px solid #53a321',
        alignItems: 'center',
        textAlign: 'left',
        padding: '17px 22px',
        margin: '5px'
    }
}))

const arrRoadsChangeState = []
const arrAreasChangeState = []
const arrFromMkadChangeState = []
const arrPriceChangeState = []

window.arr = arrRoadsChangeState

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function LinkTab(props) {
  const classes = useStyles();
  return (
    <Tab
      component="a"
      className={classes.tab}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


export default function Chooser(props) {
  const context = React.useContext(AppState)
  const [value, setValue] = React.useState(0);

  const [price, setPrice] = React.useState()
    const [fromMkad, setFromMkad] = React.useState()

  const classes = useStyles();

  useEffect(()=> {
      setPrice(context.selectedPriceFrom)

      // console.log(context.selectedPriceFrom)
      // console.log(context.selectedRoads)
      // console.log(context.selectedAreas)
      // console.log(context.selectedFromMkad)

  },[context.selectedPriceFrom,context.selectedRoads.length, context.selectedAreas.length, context.selectedFromMkad])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const uniqRoads = context.uniqRoads
  const uniqAreas = context.uniqAreas

  const uniqDist = ['30','40','50','60','70','80','90','150','200']
  const uniqPrices = [
          'до 250 000 р.',
          'до 500 000 р.',
          'до 750 000 р.',
          'до 1 000 000 р.',
          'до 1 500 000 р.',
          'до 3 000 000 р.',
          'до 5 000 000 р.',
          'до 10 000 000 р.',
          'до 20 000 000 р.',
        ]

  const arrRoads = []
  const arrAreas = []
  const arrDist = []
  const arrPrices = []

  for (let i=0;i<uniqRoads.length;i++) {
      let roads = context.selectedRoads
      let roadsBtn = context.selectedRoadsBtn
    arrRoads.push(
      <Grid key={'ARRROADS'+i} item xs={12} sm={6} md={4} lg={3}>

          <button
              disabled={false}
              className={ ~roadsBtn.indexOf(uniqRoads[i]) ? classes.btnActive : classes.btn }
              style={{fontSize:'1.1rem'}}
              onClick={(e)=>{
                  context.selectOnlyRoadBtn(uniqRoads[i])
                  arrRoadsChangeState.push(uniqRoads[i])
              }}
          >{uniqRoads[i]}</button>
      </Grid>
    )
  }

  for (let i=0;i<uniqAreas.length;i++) {
      let areas = context.selectedAreas
      let areasBtn = context.selectedAreasBtn
    arrAreas.push(
      <Grid key={'ARRAREAS'+i} item xs={12} sm={6} md={4} lg={3}>

          <button
              disabled={false}
              className={ ~areasBtn.indexOf(uniqAreas[i]) ? classes.btnActive : classes.btn }
              style={{fontSize:'1.1rem'}}
              onClick={(e)=>{
                  // context.selectOnlyArea(uniqAreas[i])

                  context.selectOnlyAreaBtn(uniqAreas[i])
                  arrAreasChangeState.push(uniqAreas[i])
              }}
          >{uniqAreas[i]}</button>

      </Grid>
    )
  }

  for (let i=0;i<uniqDist.length;i++) {
      let dist = uniqDist[i].replace(/[^+\d]/g, '')*1

      let distBtn = context.selectedFromMkadBtn

    arrDist.push(
      <Grid key={'ARRDIST'+i} item xs={12} sm={6} md={4} lg={3}>

          <button
              disabled={false}
              className={dist === distBtn ? classes.btnActive : classes.btn}
              style={{fontSize:'1.1rem'}}
              onClick={(e)=>{
                  // context.selectOnlyDist(uniqDist[i])

                  context.selectOnlyFromMkadBtn(uniqDist[i])
                  arrFromMkadChangeState.push(uniqDist[i])
              }}
          >до {uniqDist[i]} км.</button>

      </Grid>
    )
  }

  for (let i=0;i<uniqPrices.length;i++) {
      let ctx2 = uniqPrices[i].replace(/[^+\d]/g, '')*1
      let priceBtn = context.selectedPriceBtn

      arrPrices.push(
      <Grid key={'ARRPRICE'+i} item xs={12} sm={6} md={4} lg={3}>
          <button
              disabled={false}
              className={ctx2 === priceBtn ? classes.btnActive : classes.btn}
              style={{fontSize:'1.1rem'}}
              onClick={ (e)=>{
                  context.selectOnlyPriceBtn(uniqPrices[i])
                  arrPriceChangeState.push(uniqPrices[i])
                  // context.selectOnlyPrice(uniqPrices[i])
                  }

              }
          >Участок {uniqPrices[i]}</button>
        {/*</Link>*/}
      </Grid>
    )
  }

  let setFilteredRoads = () => {
      arrRoadsChangeState.map(el => context.selectOnlyRoad(el))
      arrAreasChangeState.map(el => context.selectOnlyArea(el))
      arrFromMkadChangeState.map(el => context.selectOnlyDist(el))
      arrPriceChangeState.map(el => context.selectOnlyPrice(el))
      props.render()
  }

  return (
    <div className={classes.root}>

      <AppBar color='inherit' position="static" style={{boxShadow: 'none',}}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          className={classes.tabs}
        >
          <LinkTab label="Шоссе" />
          <LinkTab label="Районы" />
          <LinkTab label="от МКАД" />
          <LinkTab label="Цена" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Grid container>
          {arrRoads}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container>
          {arrAreas}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container>
          {arrDist}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid container>
          {arrPrices}
        </Grid>
      </TabPanel>

        <div style={{display:'flex', justifyContent:'center'}}>
            <Link
                to='/villages'
            >
            <button className='main-button' onClick={setFilteredRoads}>
                Показать
            </button>
                </Link>
        </div>

    </div>
  );
}


