import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Icons from './Icons'

const useStyles = makeStyles(theme => ({
  root: (props => ({
    position: 'relative',
    width: props.size === 'small' ? '50px' : "calc(100% - 20px)",
    height: '55px',
    margin: '5px',
    padding: '5px 0px',
    borderRadius: '1000px',
    cursor: 'pointer'
  })),
  icon: (props => ({
    position: 'absolute',
    width:  '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '5px',
    borderRadius: '50px',
    background: props.selected ? props.color : '#e5eaeb', 
    filter: props.selected ? `brightness(1.1) ` : 'none',
    transition: "all 1s ease-out 0.5s"
  })),
  txt: (props => ({
    position: 'absolute',
    top: '0',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    left: '70px', 
    color: props.selected ? '#000' : '#919fa3'
  })),
}))

function IconButton(props) {
  const value = props.value
  const iconName = props.iconName
  const color = props.color
  const selected = props.selected
  const size = props.size || 'default'
  const tooltip = props.tooltip

  const classes = useStyles({ color, selected, size })

  if (size === 'small') {
    return (
      <div className={classes.root}
        onClick={props.handler}
      >
        <div tooltip={tooltip} className={classes.icon}>
          <Icons
            name={iconName}
            color={selected ? '#fff' : '#919fa3'}
            size={24}
          />
        </div>
      </div>
    ) 
  } else {
    return (
      <div className={classes.root}
        onClick={props.handler}
      >
        <div className={classes.icon}>
          <Icons
            name={iconName}
            color={selected ? '#fff' : '#919fa3'}
            size={size === 'small' ? 15 : 24}
          />
        </div>
        <div className={classes.txt}>
          <h5>{value}</h5>
        </div>
      </div>
    );
  }
}

export default IconButton;
