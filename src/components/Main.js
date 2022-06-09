import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navigation from './Navigation'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '90px'
  },
}));

function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      {props.children}
    </div>
  );
}

export default Main
