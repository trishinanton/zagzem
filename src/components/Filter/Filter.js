import React, {useState, useContext, forwardRef} from 'react';
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import AppState from '../../AppState'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';
//import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MapIcon from '@material-ui/icons/Map';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import CloseIcon from '@material-ui/icons/Close';
//import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import MultiSelect from './MultiSelect'
import SingleSelect from './SingleSelect'
import FilterMap from './FilterMap'
import IconButton from '../IconButton'
import CheckBox from '../CheckBox'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden'
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#fff',
    opacity: '0.8',
    zIndex: '10',
  },
  fg: {
    position: 'relative',
    zIndex: '20',
  }, 
  expandedBody: {
    width: '100%',
    margin: '15px', 
    background: '#eff3f4',
    borderRadius: '15px',
  },
  expandButton: {
  },
  block: {
    position: 'relative',
    overflow: 'hidden',
    padding: '4px',
    margin: '5px',
    background: '#fff',
    borderRadius: '15px',
  },
  itemFilter: {
    width: 'calc(100% - 10px)',
    margin: '5px',
    padding: '0',
  },
  filterControl: {
    position: 'relative',
    width: '100%', 
    padding: '15px 0',
  },
  expandBtn: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    right: '0',
  },
  rollBtn: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    right: '0',
  },
  filterBtn: {
    background: '#0197fd',
    minWidth: '170px',
    height: '50px',
    margin: '5px',
    borderRadius: '1000px',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  blockHeader: {
    padding: '15px 0px 0px 15px'
  },
  mapBackBtn: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '60px',
    width: '200px',
    zIndex: '600',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '0 0 15px 0',
    borderRight: '1px solid #eff3f4',
    borderBottom: '1px solid #eff3f4',
  },
  checkboxValue: {
    display: 'inline-block',
    padding: '0 15px 0 15px',
    textAlign: 'center',
  },
  map: {
    position: 'relative',
    width: 'calc(100% - 30px)',
    margin: '15px',
    height: '460px',
    borderRadius: '15px',
    overflow: 'hidden',
  },
  closeMap: {
    position: 'absolute',
    right: '15px',
    top: '15px',
    width: '50px',
    height: '50px',
    zIndex: '500',
    background: '#0056b3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
  },
    verticalCenter: {
      display: 'flex',
        alignItems: 'center'
    }
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Filter = (props) => {
  const context = useContext(AppState)
//  const hide = props.hide
  const [expanded, setExpanded] = useState(props.expanded || false)
  const [showMap, setShowMap] = useState(true)

  const setHidden = () => {
    if (props.hidden) {
      props.hidden()
    }
  }

  const change = React.useCallback(()=> {
    const changeMap = async() => {
      await setShowMap(false)
      await setShowMap(true)
    } 
    if (showMap) {
      changeMap()
    }
  }, [showMap])

  React.useEffect(() => {
    change()
  },[context.filteredVillages])

  const classes = useStyles()

  const uniqRoads = context.uniqRoads
  const uniqAreas = context.uniqAreas
  const selectedVillagesRoads = context.selectedVillageRoads
  const selectedVillageTypes = context.selectedVillageTypes
  const selectedCommunications = context.selectedCommunications
  const selectedSafety = context.selectedSafety
  const selectedWaysToGet = context.selectedWaysToGet
  const selectedAreas = context.selectedAreas
  const selectedRoads = context.selectedRoads

  const valDist = []
  valDist.push(context.selectedFromMkad)
  valDist.push(context.selectedToMkad)

  const valPrice = []
  valPrice.push(context.selectedPriceFrom)
  valPrice.push(context.selectedPriceTo)

  const blockRoads = (
    <Box m={1}>
      <MultiSelect
        data={uniqRoads}
        selected={selectedRoads}
        title='Шоссе'
        handler={context.selectRoad}
      />
    </Box>
  )

  const blockAreas = (
    <Box m={1}>
      <MultiSelect
        data={uniqAreas}
        selected={selectedAreas}
        title='Район'
        handler={context.selectArea}
      />
    </Box>
  )

  const blockDistance = (
    <Box m={1}>
      <SingleSelect
        data={[
          'до 30 км.',
          'до 40 км.',
          'до 50 км.',
          'до 60 км.',
          'до 70 км.',
          'до 80 км.',
          'до 90 км.',
            'до 150 км.',
            'до 200 км.',
        ]}
        selected={`до ${context.selectedFromMkad} км.`}
        title='Расстояние до МКАД'
        handler={context.selectFromMkad}
      />
    </Box>
  )

  const blockPrice = (
    <Box m={1}>
      <SingleSelect
        data={[
          '250000',
          '500000',
          '750000',
          '1000000',
          '1500000',
          '3000000',
          '5000000',
          '10000000',
          '20000000',
        ]}
        selected={context.selectedPriceFrom}
        title='Стоимость'
        handler={context.selectPriceFrom}
      />
    </Box>
  )

  const communications = (
      <div className={classes.block}>
        <div className={classes.blockHeader}>
          <h4>Коммуникации</h4>
        </div>
        <IconButton
          iconName='svet'
          color='#ffce01'
          selected={selectedCommunications.indexOf(1) === -1 ? false : true}
          handler={()=>context.selectCommunication(1)}
          value='Электричество'
        />
        <IconButton
          iconName='water'
          color='#4a7aff'
          selected={selectedCommunications.indexOf(2) === -1 ? false : true}
          handler={()=>context.selectCommunication(2)}
          value='Вода'
        />
        <IconButton
          iconName='gas'
          color='#ff5b5a'
          selected={selectedCommunications.indexOf(3) === -1 ? false : true}
          handler={()=>context.selectCommunication(3)}
          value='Газ'
        />
          <IconButton
          iconName='checkpoint'
          color='#ff5acc'
          selected={selectedCommunications.indexOf(4) === -1 ? false : true}
          handler={()=>context.selectCommunication(4)}
          value='КПП'
        />
          <IconButton
          iconName='playground'
          color='#5a5fff'
          selected={selectedCommunications.indexOf(5) === -1 ? false : true}
          handler={()=>context.selectCommunication(5)}
          value='Детская площадка'
        />
          <IconButton
          iconName='lighting'
          color='#5abbff'
          selected={selectedCommunications.indexOf(6) === -1 ? false : true}
          handler={()=>context.selectCommunication(6)}
          value='Освещение'
        />
          <IconButton
          iconName='sportsGround'
          color='#5aff7d'
          selected={selectedCommunications.indexOf(7) === -1 ? false : true}
          handler={()=>context.selectCommunication(7)}
          value='Спортивная площадка'
        />
          <IconButton
          iconName='canalization'
          color='#ff9e5a'
          selected={selectedCommunications.indexOf(8) === -1 ? false : true}
          handler={()=>context.selectCommunication(8)}
          value='Центральная канализация'
        />
      </div> 
    )

    const roads = (
      <div className={classes.block}>
        <div className={classes.blockHeader}>
          <h4>Дороги в поселке</h4>
        </div>
        <IconButton
          iconName='asphalt'
          color='#6aa3a5'
          selected={selectedVillagesRoads.indexOf(1) === -1 ? false : true}
          handler={()=>context.selectVillageRoad(1)}
          value='Асфальт'
        />
        <IconButton
          iconName='asphaltKroshka'
          color='#4a7aff'
          selected={selectedVillagesRoads.indexOf(3) === -1 ? false : true}
          handler={()=>context.selectVillageRoad(3)}
          value='Acф. крошка'
        />
        {/*<IconButton*/}
        {/*  iconName='betonPlit'*/}
        {/*  color='#ff5b5a'*/}
        {/*  selected={selectedVillagesRoads.indexOf(6) === -1 ? false : true}*/}
        {/*  handler={()=>context.selectVillageRoad(6)}*/}
        {/*  value='Бетонные плиты'*/}
        {/*/>*/}
        {/*<IconButton*/}
        {/*  iconName='bitiyKirpich'*/}
        {/*  color='#ffce01'*/}
        {/*  selected={selectedVillagesRoads.indexOf(5) === -1 ? false : true}*/}
        {/*  handler={()=>context.selectVillageRoad(5)}*/}
        {/*  value='Битый кирпич'*/}
        {/*/>*/}
        <IconButton
          iconName='gruntovka'
          color='#06b26b'
          selected={selectedVillagesRoads.indexOf(4) === -1 ? false : true}
          handler={()=>context.selectVillageRoad(4)}
          value='Грунтовая дорога'
        />
        <IconButton
          iconName='sheben'
          color='#8a6eac'
          selected={selectedVillagesRoads.indexOf(2) === -1 ? false : true}
          handler={()=>context.selectVillageRoad(2)}
          value='Щебень'
        />
      </div>
    )

    const safety = (
      <div className={classes.block}>
        <div className={classes.blockHeader}>
          <h4>Безопасность</h4>
        </div>
        <IconButton
          iconName='zabor'
          color='#6aa3a5'
          selected={selectedSafety.indexOf(1) === -1 ? false : true}
          handler={()=>context.selectSafety(1)} 
          value='Ограждение по периметру'
        />
        <IconButton
          iconName='security'
          color='#ff5b5a'
          selected={selectedSafety.indexOf(2) === -1 ? false : true}
          handler={()=>context.selectSafety(2)} 
          value='Охрана'
        />
      </div>
    )

    const waysToGet = (
      <div className={classes.block}>
        <div className={classes.blockHeader}>
          <h4>Как добраться</h4>
        </div>
        <IconButton
          iconName='bus'
          color='#8a6eac'
          selected={selectedWaysToGet.indexOf(3) === -1 ? false : true}
          handler={()=>context.selectWayToGet(3)}
          value='Автобус'
        />
        <IconButton
          iconName='train'
          color='#06b26b'
          selected={selectedWaysToGet.indexOf(2) === -1 ? false : true}
          handler={()=>context.selectWayToGet(2)}
          value='Электричка'
        />
      </div>
    )

    const villageTypes = (
      <Box m={1}>
      <Grid container>
        <Grid item>
          <Box m={1} className={classes.verticalCenter}>

                  <CheckBox
                      selected={selectedVillageTypes.indexOf(1) === -1 ? false : true}
                      setSelected={()=>context.selectVillageType(1)}
                  />
                  <div className={classes.checkboxValue}>
                      <h5>Коттеджный поселок</h5>
                  </div>

          </Box>
        </Grid>
        <Grid item>
          <Box m={1} className={classes.verticalCenter}>
            <CheckBox
              selected={selectedVillageTypes.indexOf(2) === -1 ? false : true}
              setSelected={()=>context.selectVillageType(2)} 
            />
            <div className={classes.checkboxValue}>
              <h5>Дачный поселок</h5>
            </div>
          </Box>
        </Grid>
      </Grid>
      </Box>
    )

    const expandedFilter = (
      <div className={classes.expandedBody}>
        <Grid container justifyContent='center' alignItems='flex-start'>

          <Grid item xs={12} sm={6} md={3}>
              {roads}
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            {communications}
          </Grid>


                <Grid item xs={12} sm={6} md={3}>
                    {waysToGet}
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    {safety}
                </Grid>


        </Grid>
      </div>
    )

    const miniFilter = (
      <Grid container direction='row'>
        <Grid item xs={12}>
          {villageTypes}
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.itemFilter}>
            <div className={classes.block}>
              {blockAreas}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.itemFilter}>
            <div className={classes.block}>
              {blockRoads}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.itemFilter}>
            <div className={classes.block}>
              {blockDistance}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.itemFilter}>
            <div className={classes.block}>
              {blockPrice}
            </div>
          </div>
        </Grid>
      </Grid>
    )

    const filterControl = (
        <div className={classes.filterControl}>
      <Grid container justifyContent="center" alignItems="center">

          <div
            className={classes.filterBtn}
            onClick={()=>{context.resetFilter();setHidden()}}
          >
            <RotateLeftIcon />
            Сбросить фильтр
          </div>

          {expanded || showMap ? '' :
          <div
            className={classes.filterBtn}
            onClick={()=>setShowMap(true)}
          > 
            <MapIcon />
            Показать на карте
          </div>
          }

          {expanded ? '' :
          <div
            className={classes.filterBtn}
            onClick={()=>setExpanded(true)}
          >
            <ExpandMoreIcon />
            Подробнее
          </div>
          }

          <Link to='/villages' onClick={()=>{setExpanded(false);setHidden()}}>
          <div
            className={classes.filterBtn}
          > 
            <button className='main-button' style={{padding: '14px 30px'}}>
              Подобрать ({context.filteredVillages.length})
            </button>
          </div>
          </Link>
      </Grid>
        </div>
    )

    return (
      <div className={classes.root}>
        <div className={classes.bg} />
        <div className={classes.fg}>
          {miniFilter}    
          {filterControl}
          {showMap ? <div className={classes.map}>
            <div
              className={classes.closeMap}
              onClick={()=>setShowMap(false)}
            >
              <CloseIcon style={{width:'35px',height:'35px',color:'#fff'}} />
            </div>
            <FilterMap villages={context.filteredVillages} />
          </div> : ''}
        </div>

        <Dialog
          open={expanded}
          TransitionComponent={Transition}
          onClose={()=>{setExpanded(false);setHidden()}}
          fullWidth={true}
          maxWidth='lg'
        >
          <Grid container>
            {miniFilter}
            {expandedFilter}
            {filterControl}
          </Grid>
        </Dialog>


        </div>
    )
}

export default Filter
