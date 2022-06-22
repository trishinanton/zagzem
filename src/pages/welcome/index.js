import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Filter from '../../components/Filter'
import Chooser from '../../components/Chooser'
import ContactForm from '../../components/ContactForm'
import IconBlock from '../../components/IconBlock'
import AnimSlider from '../../components/AnimSlider'
import fonTest from '../../img/images/fon-test.jpg'
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import CallbackFormPopUp from "../../components/CallbackFormPopUp";
import {SlickSlider} from "../../components/AnimSlider/SlickSlider";

const useStyles = makeStyles((theme) => ({
  descr: {
    padding: '0px 0px 25px 0px',
  },
  filter: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: '10',
    borderRadius: '15px',
  },
  fg: {
    position: 'relative',
    width: '100%',
    zIndex: '20',
  },
  testFon: {
    width: '100%',
    height: '350px',
    background: `url(${fonTest})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  test: {
    position: 'relative',
    height: '100%',
    width: '100%',
    background: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    margin: '50px 0',
  },
  filterBlock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(158,209,91,1) 0%, rgba(1,235,136) 100%)',
    borderRadius: '15px',
  },
  header: {
    padding: '15px',
    color: '#fff',
  },
  welcomeHeader: {
    padding: '50px 0',
    fontSize: '1.7rem',
    textAlign: 'center',
  }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const WelcomePage = (props) => {

  //observer
  ////////////////////////////////////////////////////
  const root = useRef(null);

  const options = {
    rootMargin: '0px',
    threshold: [ 0 ]
  };

  const trueCallback = function(entries, observer) {
    entries.forEach((entry) => {
      const {target, isIntersecting} = entry;

      if (isIntersecting) {
        console.log('сработало')
        setShowPopUp(true)
        observer.unobserve(target)
      }

    })
  }

  const observer = new IntersectionObserver( trueCallback, options );
  let target
////////////////////////////////////////


  const [scrollPosition, setScrollPosition] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {

    // let btnSlider = document.querySelector('.nextButton');
    // btnSlider.classList.remove("disabled");


    target = root.current
    observer.observe( target )

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const classes = useStyles({ scrollPosition });
  return (
           <>
             <Dialog
                 open={showPopUp}
                 fullWidth={true}
                 maxWidth='sm'
                 TransitionComponent={Transition}
                 onClose={() => {
                   setShowPopUp(false)
                 }}
             >
               <CallbackFormPopUp />
             </Dialog>

      <div style={{position:'relative',width:'100%',height:'100%',top:'0'}}>
        <Container maxWidth='lg' disableGutters={true}>
          <SlickSlider />
        </Container>
      </div>

      <Container maxWidth='lg'>
        <h1 className={classes.welcomeHeader}>Подбери лучшее место для загородной жизни</h1>
        <div className={classes.filterBlock}>
          <div className={classes.filter}>
            <div className={classes.bg} />
            <div className={classes.fg}>
              <Filter />
            </div>
          </div>
        </div>
      </Container>
                 
      <Container maxWidth='lg'>
        <h2 id='target' className={classes.welcomeHeader}>Почему именно мы?</h2>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
          <Grid item xs={12} md={6} >
            <IconBlock
              iconName='like'
              color='#f4f2fc'
              value='Подборка и продажа земельных активов от собственника без комиссии.'
            /> 
          </Grid>
          <Grid item xs={12} md={6} >
            <IconBlock
              iconName='marketing'
              color='#f2feed'
              value='Более 2500 земельных участков в земельной базе.'
            />
          </Grid>
          <Grid item xs={12} md={6} >
            <IconBlock
              iconName='shield'
              color='#fef0ed'
              value='Юридическая чистота сделки от экспертов с опытом более 10 лет.'
            />
          </Grid>
          <Grid item xs={12} md={6} >
            <IconBlock
              iconName='certificate'
              color='#ecfbff'
              value='Гарантия на строительство и подбор участка.'
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='lg' >
        <div className={classes.test}>
          <div className={classes.testIn}>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
              <Grid item xs={12} md={6} >
                <h3 ref={root}>Заполните форму и получите полный каталог поселков на почту и скидку 3%</h3>
                <center>
                  <Box m={2}>
                    <button className='main-button' onClick={()=>{window.open('https://mrqz.me/zagzem', '_blank')}}>
                      Пройти тест
                    </button>
                  </Box>
                </center>
              </Grid>
              <Grid item xs={12} md={6} >
                <Link
                    to='/villages'
                >
                <div className={classes.testFon} />
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>

      <Container maxWidth='lg' >
        <ContactForm />
      </Container>

      <Container maxWidth='lg' >
        <Chooser />
      </Container>
    </>
  )
}

export default WelcomePage
