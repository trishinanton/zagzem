import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {isValidPhoneNumber, parsePhoneNumber} from 'react-phone-number-input'
import {makeStyles} from '@material-ui/styles'
import Dialog from '@material-ui/core/Dialog';
import StyledInput from './StyledInput'
import InputPhone from './InputPhone'
import {sendMessageAmoCRM} from "../api/api";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
    root: (props => ({})),
    body: {
        display: 'flex',
        alignItems: 'center',
    },
    bodyForm: {
        background: '#fff',
        borderRadius: '15px',
        padding: '15px',
    },
    btnTarget: {
        margin: '15px 0px 0px 0px',
    },
    bodyText: {
        color: '#3c4b5a',
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TargetForm = (props) => {
    const selectedVillage = props.selectedVillage
    const [phone, setPhone] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [sending, setSending] = React.useState(false)

    const apiUrl = 'https://zagzem.ru/api/'

    const classes = useStyles({})

    const changePhone = val => {
        setPhone(val)
    }

    const checkForm = () => {
        if (phone && isValidPhoneNumber(phone)) {
            const phoneNumber = parsePhoneNumber(phone)
            if (!phoneNumber) {
                return false
            }
        }
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const x = emailRegexp.test(email)
        if (!x) {
            return false
        }
        return true
    }

    // const submit = async() => {
    //   const check = await checkForm()
    //   if (check) {
    //     const options = {}
    //     const body = { name: name, phone: phone, email: email}
    //     options.method = 'POST'
    //     options.headers = { 'Content-Type': 'application/json'}
    //     options.body = JSON.stringify(body)
    //     try {
    //       const res = await fetch(`${apiUrl}viewRequest`, options)
    //       if (res.status === 200) {
    //         const result = await res.json()
    //         if (result === null) {
    //           alert('BAD JSON')
    //           return false
    //         }
    //         setPhone('')
    //         setName('')
    //         setEmail('')
    //         setSending(true)
    //         alert('Submit Success!')
    //       }
    //     } catch(e) {
    //       console.log('Fetch error: ', e)
    //       return false
    //     }
    //   } else {
    //     alert('Введите ваш номер телефона')
    //   }
    // }

    const submit = () => {

        console.log('submit, phone', phone)

        if (name && email) {
            if (isValidPhoneNumber(phone)) {
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
            alert('Заполните обязательные поля')
            return
        }
        // if (isValidPhoneNumber(phone)) {
        //   const phoneNumber = parsePhoneNumber(phone)
        //   debugger
        //   if (phoneNumber) {
        //     console.log('submit, phone valid')
        //   } else {
        //     alert('Введите правильный номер телефона')
        //     return
        //   }
        // } else {
        //   alert('Введите правильный номер телефона')
        //   return
        // }

        console.log('submit, name', name)
        console.log('submit, email', email)
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const x = emailRegexp.test(email)
        if (!x) {
        }

        // setPhone('')
        // setName('')
        // setEmail('')
        // setSending(true)
    }

    if (sending) {
        return (
            <Dialog
                open={sending}
                fullWidth={true}
                maxWidth='sm'
                TransitionComponent={Transition}
                onClose={() => setSending(false)}
            >
                <div className={classes.root}>
                    <Grid container justifyContent='center' alignItems='center'>
                        <h3>Запись на просмотр поселка {selectedVillage} прошла успешно, менеджер скоро с вами
                            свяжется.</h3>
                    </Grid>
                </div>
            </Dialog>
        )
    } else {
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={7} className={classes.body}>
                        <center>
                            <h3 style={{maxWidth: '520px'}}>Оставьте свои контактные данные, чтобы посмотреть участок</h3>
                        </center>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className={classes.bodyForm}>
                            <StyledInput
                                placeholder='Как вас зовут?'
                                handler={(e) => setName(e.target.value)}
                                value={name}
                                type='text'
                            />
                            <StyledInput
                                placeholder='Введите ваш email'
                                handler={(e) => setEmail(e.target.value)}
                                value={email}
                                type='email'
                            />
                            <InputPhone
                                value={phone}
                                setValue={changePhone}
                            />
                            <div className={classes.btnTarget}>
                                <Grid container justifyContent='center'>
                                    <button className='main-button' onClick={() => submit()}>
                                        Записаться на просмотр
                                    </button>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default TargetForm
