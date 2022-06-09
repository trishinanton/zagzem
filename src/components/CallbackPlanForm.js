import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import StyledInput from './StyledInput'
import InputPhone from './InputPhone'
import {isValidPhoneNumber, parsePhoneNumber} from 'react-phone-number-input'
import {makeStyles} from '@material-ui/styles'
import {sendPlanAmoCRM} from "../api/api";

const useStyles = makeStyles(theme => ({
    root: (props => ({})),
    body: {
        display: 'flex',
        alignItems: 'center',
    },
    bodyForm: {
        background: '#fff',
        padding: '15px',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    }
}))

const CallbackPlanForm = (props) => {
    const village = props.village
    const [email, setEmail] = React.useState('')
    const [sending, setSending] = React.useState(false)

    const classes = useStyles({})

    const submit = () => {
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const x = emailRegexp.test(email)

        if (x) {
            sendPlanAmoCRM(email, village)
                .finally(()=>{
                    setEmail('')
                    setSending(true)
                })
        } else {
            alert('Введите корректный адрес почты')
        }


    }

    if (sending) {
        return (
            <div className={classes.root}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Typography align='center' className={classes.bodyText}>
                        Планировка поселка {village} отправлена на ваш email
                    </Typography>
                </Grid>
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.bodyForm}>
                            <Box my={2} mx={4}>
                                <center>
                                    <h3>Планировка поселка {village}</h3>
                                </center>
                            </Box>
                            <StyledInput
                                placeholder='Введите ваш email'
                                handler={(e) => setEmail(e.target.value)}
                                value={email}
                                type='email'
                            />
                            <div className={classes.btnTarget}>
                                <Grid container justifyContent='center'>
                                    <button className='main-button' onClick={() => submit()}>
                                        Отправить
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

export default CallbackPlanForm 
