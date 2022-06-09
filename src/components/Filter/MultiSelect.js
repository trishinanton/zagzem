import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  input: {
    minHeight: '50px'
  },
  label: {
    textAlign: 'center',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const MultiSelect = (props) => {
  const data = props.data
  const selected = props.selected
  const title = props.title
  const handler = props.handler
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel variant='outlined' shrink={true} id={title+'select-label'} className={classes.label}>
          <h4>{title}</h4>
        </InputLabel>
        <Select
          labelId={title+'select-label'}
          multiple
          value={selected}
          input={<Input className={classes.input} />}
          onMouseDown={(event) => { event.stopPropagation()}}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value+'qw'} label={value} onDelete={()=>handler(value)} className={classes.chip} onMouseDown={(event) => {event.stopPropagation()}} />
              ))}
            </div>
          )}
        >
          {data.map((name) => (
            <MenuItem key={name} value={name}
               onClick={()=>handler(name)}
            >
              <Checkbox checked={selected.indexOf(name) !== -1 ? true : false} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultiSelect
