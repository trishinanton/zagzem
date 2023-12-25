import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'
//import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'

import logo from '../img/logo.png';
import { MenuTree } from './MenuTree.jsx'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types'
import AppState from "../AppState";
import vk from "../svg/vk.svg";
import instagram from "../svg/instagram.svg";


const useStyles = makeStyles((theme) => ({
  bar: (props=>( {
    height: '80px',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0',
    background: '#fff',
  })),
  menuButton: (props=>({
    width: '50px',
    height: '50px',
    display: 'block',
    color: '#78d85b',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  })),
  search: {
    position: 'relative',
      marginLeft: theme.spacing(3),
      width: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
    },
  },
  grow: {
    flexGrow: 1,
  },
  menu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  phone: (props => ({
    display: 'none',
    color: '#01eb88',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  })),
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
  logoDrawer: {
    width: '60px',
    height: '60px',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  logoText: {
    // fontFamily: 'FiraRegular',
    fontFamily: "Roboto,sans-serif",


    color: '#3c4b5a',
    display: 'none',
    fontSize: '1.5rem',
    fontWeight: '700',

    [theme.breakpoints.up('md')]: {
      display: 'block'
    },
  },
  icon: {
    width: '35px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  menuBtn: (props => ({
    position: 'relative',
    color: '#3c4b5a',
    transition: 'all ease .3s',
    cursor: 'pointer',
    marginRight: theme.spacing(3),
    '&:before': {
      transform: 'translateX(-50%)',
      transition: 'all ease .3s',
      width: '20%',
      height: '4px',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      opacity: '0',
      pointerEvents: 'none',
      content: "''",
      borderRadius: '6px',
      background: 'linear-gradient(90deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)',
    },
    '&:hover:before': {
      width: '70%',
      opacity: '1',
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(4),
    }
  })),
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


export default function Top(props) {
  const context = React.useContext(AppState)

  const [showDrawer, setShowDrawer] = React.useState(false)

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener('beforeinstallprompt', event => {
  //     console.log('beforeinstallprompt event was fired');
  //
  //     // Prevent Chrome <= 67 from automatically showing the prompt
  //     event.preventDefault();
  //
  //     // Stash the event so it can be triggered later.
  //     this.installPromptEvent = event;
  //     console.log(`this: ${this}`)
  //
  //     // Update the install UI to notify the user app can be installed
  //     btnInstall.disabled = false;
  //   });
  //
  //   const btnInstall = document.querySelector('#btnInstall');
  //
  //   btnInstall.addEventListener('click', function () {
  //     console.log('click')
  //     // Update the install UI to remove the install button
  //     btnInstall.disabled = true;
  //
  //     // Show the modal add to home screen dialog
  //     window.installPromptEvent.prompt();
  //
  //     // Wait for the user to respond to the prompt
  //     window.installPromptEvent.userChoice.then(choice => {
  //       if (choice.outcome === 'accepted') {
  //         console.log('User accepted the A2HS prompt');
  //       } else {
  //         console.log('User dismissed the A2HS prompt');
  //       }
  //       // Clear the saved prompt since it can't be used again
  //       this.installPromptEvent = null;
  //     });
  //   });
  // })

  const classes = useStyles({ scrollPosition });

  function resetFilter(e){
     context.resetFilter()

  }

  const menuBtns = (
    <div className={classes.menu}>
      <Link
        to='/villages'
        className={classes.menuBtn}
        onClick={resetFilter}
      >
        <h4>Поселки</h4>
      </Link>
      <Link
        to='/services'
        className={classes.menuBtn}
      >
        <h4>Услуги</h4>
      </Link>
      <Link
        to='/contact'
        className={classes.menuBtn}
      >
        <h4>Контакты</h4>
      </Link>

      {/*<button*/}
      {/*    id="btnInstall"*/}
      {/*   */}
      {/*    style={{position: 'absolute', top: '23px', right: '16px', zIndex: '1'}}*/}
      {/*>*/}
      {/*  Install PWA For Prod*/}
      {/*</button>*/}
    </div>
  )

    return (
        <>
          <CssBaseline />

          <HideOnScroll {...props}>
            <AppBar className={classes.bar} >
              <Container maxWidth='lg'>
                <Toolbar style={{marginLeft:'0px', paddingLeft: '0px'}}>

                  <Link to='/' style={{display:'flex', alignItems:'center'}}>
                    <div  className={classes.logo}>
                    </div>

                    <div className={classes.logoText}
                    >Загородные Земли</div>
                  </Link>


                  <MenuIcon
                      onClick={()=>setShowDrawer(true)}
                      className={classes.menuButton}
                  />
                  <div className={classes.search}>
                    <SearchInput />
                  </div>
                  <div className={classes.grow} />
                  {menuBtns}
                  <h4
                      className={classes.phone}
                      onClick={()=>window.location.href='tel:84999384482'}
                  >
                    +7 (499) 938-44-82
                  </h4>
                  <img src={vk} style={{margin:'0 10px'}} className={classes.icon} onClick={()=>{window.open('https://vk.com/zagorodnyezemli', '_blank')}}/>
                  {/* <img src={instagram} className={classes.icon} onClick={()=>{window.open('https://www.instagram.com/zagzem', '_blank')}}/> */}
                </Toolbar>
              </Container>
            </AppBar>
          </HideOnScroll>

          <SwipeableDrawer
              anchor="left"
              open={showDrawer}
              onOpen={()=>setShowDrawer(true)}
              onClose={()=>setShowDrawer(false)}
          >
            <List
                style={{
                  position:'relative',
                  padding:0,
                  overflowX:'hidden',
                  minHeight:'100%'
                }}
            >
              <Box m={2}>
                <Grid container alignItems='center'
                      style={{
                        minHeight:'80px',
                        width:'290px',
                      }}
                >
                  <h3 style={{textAlign:'left',lineHeight:'110%',padding:'0 0 5px 15px'}}><strong>Загородные Земли</strong></h3>
                  <Grid item>
                    <Box m={2}>
                      <h5 className='light-text'>Продажа загородной недвижимости в Московской области</h5>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box m={2}>
                <MenuTree hide={()=>setShowDrawer(false)} />
              </Box>
            </List>
          </SwipeableDrawer>
        </>
    );



}

