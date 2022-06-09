import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  mapSection: {
    position:'relative',
    width: '100%',
    background: '#fff',
    minHeight: '500px',
    overflow: 'hidden',
  },
  mapFrame: {
    height: '750px',
    // marginTop: '140px',
    borderRadius: '15px',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0px',
      height: '500px',
    }
  },
  text: {
    color: '#3c4b5a',
  },
  textDescr: {
    color: '#3c4b5a',
  },
  textValue: {
    fontSize: '0.8rem',
    [theme.breakpoints.up('sm')]: {
      color: '#3c4b5a',
      fontSize: '1.0rem',
    }
  },
  infoMapBlock: {
    position: 'relative',
    width: '100%',
    height: '60px',
    margin: '0px 0px 30px 0px',
  },
  mapInfo: {
    position: 'absolute',
    padding: '30px 15px',
    margin: '40px 0px',
    top: '15px',
    borderRadius: '15px',
    background: '#fff',
    border: '1px solid #eff3f4',

  },
}))

const ItemMapInfo = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.infoMapBlock}>
      <h5 style={{margin:'5px 0'}} className={classes.text}>
        {props.name}
      </h5>
      <h4 style={{margin:'0'}} className={classes.textValue}>
        {props.value}
      </h4>
      <h4 style={{margin:'0'}} className={classes.textValue}>
        {props.dopValue}
      </h4>
    </div>
  )
}

const ContactForm = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.mapSection}>
        <Grid container>
          <iframe title='qw12' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeea71e7b41c1a53dc55fc01665165149f7ea1b10e1f8a05b47a879cb748c829d&amp;source=constructor" width="100%" height="100%" frameBorder="0" className={classes.mapFrame}></iframe>
          <Container maxWidth='lg'>
          <Grid item xs={12} md={4}>
            <div className={classes.mapInfo}>
              <ItemMapInfo
                name='Адрес:'
                value='Ленинский просп., 30А, г. Москва'
                dopValue='Проспект Маркса, д. 14, г. Обнинск'
              />
              <ItemMapInfo
                name='Телефон:'
                value='+7 (499) 938-92-28'
              />
              <ItemMapInfo
                name='Почта:'
                value='sales@zagzem.ru'
              />
              <ItemMapInfo
                name='Время работы:'
                value='пн-вс 09:00-21:00'
              />
            </div>
          </Grid>
          </Container>
        </Grid>
      </div>
  )
}

export default ContactForm
