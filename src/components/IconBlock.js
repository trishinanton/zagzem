import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Icons from './Icons'

const useStyles = makeStyles(theme => ({
  root: (props => ({
    position: 'relative',
    width: "calc(100% - 30px)",
    background: props.color,
    minHeight: '250px',
    borderRadius: '15px',
    margin: '15px',
    cursor: 'pointer',
  })),
  icon: (props => ({
    position: 'absolute',
    width: '100%',
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  })),
  txt: (props => ({
    position: 'absolute',
    top: '140px',
    width: '100%',
    padding: '0 50px',
    color: '#3c4b5a',
    textAlign: 'center',
  })),
}))

function IconBlock(props) {
  const value = props.value
  const iconName = props.iconName
  const color = props.color

  const classes = useStyles({ color })

  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <Icons
          name={iconName}
          color='#3c4b5a'
          size={90}
        />
      </div>
      <div className={classes.txt}>
        <h4>{value}</h4>
      </div>
    </div>
  );
}

export default IconBlock;
