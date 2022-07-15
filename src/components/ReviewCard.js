/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from './IconButton'
import Carousel from 're-carousel'
import Grid from '@material-ui/core/Grid'
import Icons from './Icons'
import IndicatorDots from './IndicatorDots'
import AppState from "../AppState";
import LazyLoad from 'react-lazyload';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    border: '1px solid #eff3f4',
    boxShadow: 'none',
  },
  img: {
    width: '100%',
    height: '250px',
    [theme.breakpoints.up('lg')]: {
      height: '250px'
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  cardSubHeader: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    transition: '.3s opacity',
    '&:hover': {
      opacity: '.6',
      transition: '.3s opacity',
    }
  },
  cardPrice: {
  },
  infoBlock: {
    position: 'relative',
    width: '100%',
    height: '40px', 
  },
  infoIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '40px',
    height: '100%',
  },
  infoValue: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: '45px',
    top: '0',
    width: 'calc(100% - 45px)',
    height: '100%',
  }
}));

const ItemInfo = ({ icon, value }) => {
  const classes = useStyles()
  return (
    <div className={classes.infoBlock}>
      <div className={classes.infoIcon}>
        <Icons
          name={icon}
          color='#607D8B'
          size={24}
        />
      </div>
      <div className={classes.infoValue}>
        <h5 className='light-text'>{value}</h5>
      </div>
    </div>
  )
}

export default function ReviewCard(props) {

  const context = React.useContext(AppState)

  const uid = props.uid
  const type = props.type || ''
  const bgs = props.bgs || []
  const name = props.name || ''
  const uname = props.uname || ''
  const road = props.road || ''
  const fromMkad = props.fromMkad || ''
  const price = props.price || ''
  const leftLands = props.leftLands || ''
  const communications = props.communications || {}
  const priceLands = props.priceLands || []
  const sideOfMkad = props.sideOfMkad || ''
  const permittedUse = props.permittedUse || 2

  const classes = useStyles()

  const sides = ['Север','Юг','Запад','Восток','Юго-запад','Юго-восток','Северо-запад'] 

  const slides = []

  for (let i=0;i<bgs.length;i++) {
    slides.push(
      <LazyLoad>
        <img
          key={'bgil'+i}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgs[i]})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            objectFit: 'cover'
          }}
        />
      </LazyLoad>
    )
  }

  let kk = []
  const infoList = []
  if (communications) {
    kk = Object.keys(communications)
  }

  // Communications
  for (let i=0;i<kk.length;i++) {
    const key = kk[i]
    const value = communications[key] || ''
    if (key === '1') {
      infoList.push(
        <IconButton
          key={key+i+'cmmn'}
          iconName='svet'
          color='#ffce01'
          selected={true}
          value={'Электричество '+value}
          size='small'
          tooltip='Электрификация'
        />
      )
    }
    if (key === '2') {
      infoList.push(
        <IconButton
          key={key+i+'dfgh'}
          iconName='water'
          color='#4a7aff'
          selected={true}
          value={value}
          size='small'
          tooltip='Водоснабжение'
        />
      )
    }
    if (key === '3') {
      infoList.push(
        <IconButton
          key={key+i+'cmmh'}
          iconName='gas'
          color='#ff5b5a'
          selected={true}
          value={value}
          size='small'
          tooltip='Газификация'
        />
      )
    }
    if (key === '4') {
      infoList.push(
        <IconButton
          key={key+i+'cmmh'}
          iconName='checkpoint'
          color='#ff5acc'
          selected={true}
          value={value}
          size='small'
          tooltip='Ограждение'
        />
      )
    }
    if (key === '5') {
      infoList.push(
        <IconButton
          key={key+i+'cmmh'}
          iconName='playground'
          color='#5a5fff'
          selected={true}
          value={value}
          size='small'
          tooltip='Детская площадка'
        />
      )
    }
    if (key === '6') {
      infoList.push(
        <IconButton
          key={key+i+'cmmh'}
          iconName='lighting'
          color='#5abbff'
          selected={true}
          value={value}
          size='small'
          tooltip='Освещение улиц'
        />
      )
    }
    if (key === '7') {
      infoList.push(
        <IconButton
          key={key+i+'cmmh'}
          iconName='sportsGround'
          color='#5aff7d'
          selected={true}
          value={value}
          size='small'
          tooltip='Спортивная площадка'

        />
      )
    }
  }

  function spaceInNumber(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
  }

  return (
    <Card className={classes.root}>
      <div className={classes.img}>
        <Carousel loop auto widgets={[IndicatorDots]}>
          {slides}
        </Carousel>
      </div>

      <Link
          to={`/village/${uname}`}
      >

      <CardContent className={classes.cardContent}>
        <h4 className={classes.cardSubHeader}><strong>{type === 1 ? 'Коттеджный поселок ' + name : 'Дачный поселок ' + name}</strong></h4>
        <ItemInfo
          icon='compass'
          value={`${sides[sideOfMkad - 1]}, ${fromMkad} км. от МКАД`}
        />
        <ItemInfo
          icon='car'
          value={`${road}`}
        />
        <ItemInfo
          icon='price'
          value={`Сотка от ${price} р.`}
        />
        <ItemInfo
          icon='mapPlaces'
          value={`Участки от ${spaceInNumber(priceLands[0]) } р.`}
        />
        <ItemInfo
          icon='flag'
          value={`В продаже ${leftLands} шт.`}
        />
        <Grid container direction='row' alignItems='center' justifyContent='center' style={{}}>
          {infoList}
        </Grid>
        <center>
          <button className='main-button'>Подробнее</button>
        </center>
      </CardContent>
      </Link>
    </Card>
  );
}
