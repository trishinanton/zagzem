import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: props => ({
    position: 'relative',
    padding: '15px 0px 0px 0px',
    [theme.breakpoints.up('md')]: {
      // width: '365px'
    },

  }),
  input: props => ({
    background: '#f9f9f9',
    color: '#191a1d',
    transition: 'border-color ease .3s',
    cursor: 'pointer',
    borderRadius: '1000px',
    border: '2px solid #e2e2e2',
    width: '100%',
    padding: '15px 20px',
    outline: '0',
    '&:hover': {
      border: '2px solid rgba(158,209,91,1)',
    },
  }),
  label: {
    padding: '10px',
    color: '#919191',
    width: '100%',
    textTransform: 'uppercase',
  }
}))

const StyledInput = (props) => {

  const handler = props.handler
  const type = props.type
  const placeholder = props.placeholder
  const value = props.value

  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <input
        type={type}
        className={classes.input}
        onChange={handler}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default StyledInput
