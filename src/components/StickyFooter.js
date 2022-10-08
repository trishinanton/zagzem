import React from 'react'
import AppState from '../AppState'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import vk from '../svg/vk.svg'
import instagram from '../svg/instagram.svg'
import CallbackForm from './CallbackForm'
import logo from "../img/logo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 2, 2),
    marginTop: 'auto',
    borderTop: '1px solid #eff3f4',
    backgroundColor: '#fff',
  },
  menuBtn: {
    position: 'relative',
    padding: theme.spacing(3, 1),
    color: '#3c4b5a',
    textAlign: 'center',
    width:'100%',
    transition: 'all ease .3s',
    '&:before': {
      transform: 'translateX(-50%)',
      transition: 'all ease .3s',
      width: '20%',
      height: '4px',
      position: 'absolute',
      top: '54px',
      left: '50%',
      opacity: '0',
      pointerEvents: 'none',
      content: "''",
      borderRadius: '6px',
      background: 'linear-gradient(90deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)',
    },
    [theme.breakpoints.up('sm')]: {
      '&:hover:before': {
        opacity: '1',
        top: '54px',
        width:'85%',
      }
    },
    '&:hover': {
      // color: '#53a321',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      width: '211px',

    },
    [theme.breakpoints.between('xs', 'sm')]: {
      '&:hover:before': {
        opacity: '0'
      },
    },
  },
  menuBtn_dacha: {
    position: 'relative',
    padding: theme.spacing(3, 1),
    color: '#3c4b5a',
    width:'100%',
    transition: 'all ease .3s',
    '&:before': {
      transform: 'translateX(-50%)',
      transition: 'all ease .3s',
      width: '10%',
      height: '4px',
      position: 'absolute',
      top: '54px',
      // left: '50%',
      left: '20%',
      opacity: '0',
      pointerEvents: 'none',
      content: "''",
      borderRadius: '6px',
      background: 'linear-gradient(90deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)',
    },
    '&:hover:before': {
      width: '32%',
      opacity: '1',
      top: '54px',
      left: '20%'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      '&:hover:before': {
        opacity: '0'
      },
    },
  },
  menuBtn_services: {
    '&:before': {
      width: '10%',
      opacity: '0',
      left: '20%'
    },
    '&:hover:before': {
      width: '24%',
      left: '19%'
    }
  },
  menuBtn_contact: {
    '&:before': {
      width: '10%',
      opacity: '0',
      left: '24%'
    },
    '&:hover:before': {
      width: '36%',
      left: '24%'
    },

  },
  icons: {
    maxWidth: '350px'
  },
  icon: {
    cursor: 'pointer'
  },
  phone: {
    textAlign: 'center',
    color: '#3c4b5a',
    padding: theme.spacing(1, 0, 2),
  },
  top: {
    background: '#fff',
    borderBottom: '1px solid #eff3f4',
    padding: theme.spacing(1, 0, 2),
  },
  tail: {
    padding: theme.spacing(3, 0, 1),
    color: '#919fa3',
  },
  header: {
    padding: theme.spacing(1, 1),
    textAlign: 'center',
    color: '#3c4b5a',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      width: '379px'
    }
  },
  descr: {
    padding: theme.spacing(2, 1),
    textAlign: 'center',
    color: '#919fa3',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  logo: {
    display: 'none',
    width: '60px',
    height: '60px',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'block'
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
    }
  },
  logoText: {
    display: 'none',
    color: '#01eb88',
    fontSize: '1.2rem',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    },
  },

  logoTitle: {
    width: '308px',
    fontSize: '1.5rem',
    fontFamily: "Roboto, sans-serif",
        [theme.breakpoints.up('md')]: {
          fontSize: '1.5rem',
          fontFamily: "Roboto, sans-serif"
    },
  }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StickyFooter() {
  const classes = useStyles();
  const context = React.useContext(AppState)
  const [showDialog, setShowDialog] = React.useState(false)

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justifyContent='center' alignItems="center" className={classes.top}>
          <Grid item xs={12} md={5}>
            <div className={classes.header}>

                <Link
                    to='/'
                    onClick={()=> window.scrollTo(0, 0)}
                    style={{display:'flex', alignItems:'center'}}
                >
                  <div className={classes.logo} />
                  <h3 className={classes.logoTitle}>Загородные Земли</h3>
                </Link>


            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container direction='row' justifyContent='center' alignItems="center">
              <Grid item xs={12} md={5} />
              <Grid item xs={12} md={7}>
                <Grid container justifyContent='center'>
                  <Grid container justifyContent='center' alignItems="center" direction='row' className={classes.icons}>

                    <div className={classes.descr}>
                      <h5 className='light-text' style={{padding:'0 10px'}}>Следите за нами в </h5>
                    </div>
                    <img src={vk} style={{marginRight:'10px'}} className={classes.icon} onClick={()=>{window.open('https://vk.com/zagorodnyezemli', '_blank')}}/>
                    <img src={instagram} className={classes.icon} onClick={()=>{window.open('https://www.instagram.com/zagzem', '_blank')}}/>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box my={2}>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container direction='column'>
                <Link to='/villages' className={classes.menuBtn}
                  onClick={()=>context.selectOnlyVillageType(1)}

                >
                  <h4 className='light-text'>Коттеджные поселки</h4>
                </Link>
                <Link to='/villages' className={classes.menuBtn + ' ' + classes.menuBtn_dacha}
                  onClick={()=>context.selectOnlyVillageType(2)}
                >
                  <h4 className='light-text menu-butt' >Дачные поселки</h4>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container direction='column'>
                <Link to='/services' className={classes.menuBtn + ' ' + classes.menuBtn_services}>
                  <h4 className='light-text '>Услуги</h4>
                </Link>
                <Link to='/contact' className={classes.menuBtn + ' ' + classes.menuBtn_contact}>
                  <h4 className='light-text '>Контакты</h4>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Grid container justifyContent='center' alignItems="center">
                <Grid item xs={12} sm={6} md={12}>
                  <div className={classes.phone}>
                    <h3 onClick={()=>window.location.href='tel:84999389228'}>+7 (499) 938-92-28</h3>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <button className='main-button main-button-large'
                    onClick={()=>setShowDialog(true)}
                  >
                    Написать нам
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent='center' alignItems="center"  className={classes.tail}>
          {/*<div*/}
          {/*    className={classes.logoText}*/}
          {/*>Zagzem</div>*/}
          <h5 className='light-text' style={{padding:'0 10px'}}>© 2021 Все права защищены.</h5>
        </Grid>
      </Container>
      <Dialog
        open={showDialog}
        fullWidth={true}
        maxWidth='sm'
        TransitionComponent={Transition}
        onClose={()=>setShowDialog(false)}
      >
        <CallbackForm />
      </Dialog>
    </footer>
  )
}
