import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import StyledInput from './StyledInput'
import InputPhone from './InputPhone'
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'
import { makeStyles } from '@material-ui/styles'
import {sendMessageAmoCRM} from "../api/api";

const useStyles = makeStyles(theme => ({
  root: (props => ({
  })),
  body: {
    display: 'flex',
    alignItems: 'center',
  },
  bodyForm: {
    background: '#fff',
    padding: '15px',
    borderRadius: '15px',
  },
  btnTarget: {
    margin: '10px 0px 0px 0px',
  },
  bodyText: {
    fontFamily: 'Montserrat',
    padding: '15px',
    fontSize: '2rem',
    color: '#263238',
    lineHeight: '110%',
  },
  textarea: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    width: '100%',
    borderRadius: '15px',
    background: '#f9f9f9',
    color: '#3c4b5a',
    cursor: 'pointer',
    border: '2px solid #e2e2e2',
    fontSize: '1.1rem',
    marginTop: '15px',
    outline: '0',
    padding: '15px'
  },
  formContainer: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    [theme.breakpoints.up('md')]: {
      flexDirection:'row',
    },
  }
}))

const CallbackForm = (props) => {
  const [phone, setPhone] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [text, setText] = React.useState('')
  const [sending, setSending] = React.useState(false)

  const classes = useStyles({ })

  const changePhone = val => {
    console.log('val', val)
    setPhone(val)
  }

  const submit = () => {

    console.log('submit, phone', phone)

    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const x = emailRegexp.test(email)

    if(name ) {
      if(x) {
        if(isValidPhoneNumber(phone)) {
          const phoneNumber = parsePhoneNumber(phone)
          if (phoneNumber) {
            console.log('submit, phone valid')

            sendMessageAmoCRM(name, phone, email)
                .then(res => {
                  setPhone('')
                  setName('')
                  setEmail('')
                  setSending(true)
                })
                .catch(e => {
                  setPhone('')
                  setName('')
                  setEmail('')
                  setSending(true)
                })
          }
        } else {
          alert('Введите правильный номер телефона')
          return
        }
      } else {
        alert('Введите правильный адрес почты')
        return
      }
    } else {
      alert('Заполните обязательные поля')
      return
    }
    console.log('submit, name', name)
    console.log('submit, email', email)
    // Yandex.Metrika
    window.ym(70872661, 'reachGoal', 'order1');

  }

  if (sending) {
    return (
    <div className={classes.root}>
      <Grid container justifyContent='center' alignItems='center'>
        <Typography align='center' className={classes.bodyText}>
          Письмо успешно отправлено, менеджер скоро с вами свяжется
        </Typography>
      </Grid>
    </div>
    )
  } else {
    return (
      <div style={{margin: '15px'}} className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.bodyForm} style={{transform: 'initial'}}>
              <Box my={2} mx={4}>
                <center>
                  <h3 style={{fontSize:'27px'}}>Если у вас есть вопросы или предложения, оставьте свои данные ниже и мы свяжемся с вами</h3>
                </center>
              </Box>
              {/*<Box className={classes.formContainer} >*/}
                <StyledInput
                    placeholder='Как вас зовут? *'
                    handler={(e)=>setName(e.target.value)}
                    value={name}
                    type='text'
                />
                <StyledInput
                    placeholder='Введите ваш email *'
                    handler={(e)=>setEmail(e.target.value)}
                    value={email}
                    type='email'
                />
                <InputPhone
                    value={phone}
                    setValue={changePhone}
                />
                <textarea
                    placeholder="Напишите нам"
                    multiline
                    rows={4}
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className={classes.textarea}
                />
                <div className={classes.btnTarget}>
                  <Grid container justifyContent='center'>
                    <button className='main-button' style={{margin: '0px'}} onClick={()=>submit()}>
                      Отправить
                    </button>
                  </Grid>
                </div>
              {/*</Box>*/}

            </div>
          </Grid>
        </Grid> 
      </div>
    )
  }
}

export default CallbackForm 
