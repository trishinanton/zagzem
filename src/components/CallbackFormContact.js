import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import StyledInput from './StyledInput'
import InputPhone from './InputPhone'
import {isValidPhoneNumber, parsePhoneNumber} from 'react-phone-number-input'
import {makeStyles} from '@material-ui/styles'
import {sendMessageAmoCRM} from "../api/api";
import Dialog from '@material-ui/core/Dialog';
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
    root: (props => ({})),
    body: {
        display: 'flex',
        alignItems: 'center',
    },
    inputForm: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '350px',
        },
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
        fontFamily: 'FiraMedium',
        padding: '15px',
        fontSize: '2rem',
        color: '#263238',
        lineHeight: '110%',
    },
    textarea: {
        width: '100%',
        borderRadius: '15px',
        background: '#f9f9f9',
        color: '#191a1d',
        cursor: 'pointer',
        border: '2px solid #e2e2e2',
        fontFamily: 'FiraLight',
        fontSize: '1.25rem',
        marginTop: '15px',
        outline: '0',
        padding: '15px'
    },
    buyCall: {
        fontSize: '23px',
        [theme.breakpoints.up('md')]: {
            fontSize: '27px'
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CallbackForm = (props) => {
    const [phone, setPhone] = React.useState('')
    const [name, setName] = React.useState('')
    const [sending, setSending] = React.useState(false)

    const classes = useStyles({})

    const changePhone = val => {
        console.log('val', val)
        setPhone(val)
    }

    const submit = () => {

        console.log('submit, phone', phone)

        if (name) {
            if (isValidPhoneNumber(phone)) {
                const phoneNumber = parsePhoneNumber(phone)
                if (phoneNumber) {
                    console.log('submit, phone valid')

                    sendMessageAmoCRM(name, phone)
                        .then(res => {
                            setPhone('')
                            setName('')
                            setSending(true)
                        })
                        .catch(e => {
                            setPhone('')
                            setName('')
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

        setPhone('')
        setName('')
        setSending(true)
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
                        <Typography align='center' className={classes.bodyText}>
                            Письмо успешно отправлено, менеджер скоро с вами свяжется
                        </Typography>
                    </Grid>
                </div>
            </Dialog>
        )
    } else {
        return (
            <div style={{margin: '15px'}} className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.bodyForm}>
                            <Box my={2} mx={4}>
                                <center>
                                    <h3 className={classes.buyCall}>ЗАКАЖИТЕ ЗВОНОК</h3>
                                </center>
                            </Box>
                            <Box className={classes.formContainer}>
                                <div className={classes.inputForm}>
                                    <StyledInput
                                        placeholder='Как вас зовут? *'
                                        handler={(e) => setName(e.target.value)}
                                        value={name}
                                        type='text'
                                    />
                                </div>

                                <div className={classes.inputForm}>
                                    <InputPhone
                                        value={phone}
                                        setValue={changePhone}
                                    />
                                </div>
                                <div className={classes.btnTarget}>
                                    <Grid container justifyContent='center'>
                                        <button className='main-button' style={{margin: '0px'}}
                                                onClick={() => submit()}>
                                            Отправить
                                        </button>
                                    </Grid>
                                </div>
                            </Box>

                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default CallbackForm 
