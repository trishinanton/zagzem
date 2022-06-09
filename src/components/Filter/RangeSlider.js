import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  header: {
  },
  val: {
    color: '#131313'
  },
  slider: {

  }
});

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = (props) => {
  const min = props.min
  const max = props.max
  const value = props.value
  const handler = props.handler
  const title = props.title
  const unit = props.unit
  const classes = useStyles();
 // const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
   // setValue(newValue);
    console.log('newValue', newValue)
    handler(newValue)
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.header}>
            <h4>{title}</h4>
          </div>
        </Grid>
        <Grid container justify="space-evenly">
          <Grid item>
            <Typography className={classes.val}>
              от {value[0]} {unit}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.val}>
              до {value[1]} {unit}
            </Typography>
          </Grid>
        </Grid>
      <Slider
        value={value}
        onChange={(event, newValue)=>handler(newValue)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={max}
        max={min}
        className={classes.slider}
      />
      </Grid>
    </div>
  );
}

export default RangeSlider
