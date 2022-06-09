import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import {makeStyles} from "@material-ui/core/styles";

export default function CheckBox(props) {
    const selected = props.selected
    const setSelected = props.setSelected

    const useStyles = makeStyles((theme) => ({
        hover: {
            '&:hover': {
                background: '#000'
            }
        }
    }))

    const classes = useStyles();


    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
            style={{
                background: selected ? '' : '#fff',
                width: '20px',
                height: '20px',
                boxShadow: 'rgb(83 163 33 / 50%) 0px 4px 20px -1px',
                border: '2px solid rgb(158 209 91)'
            }}
            className={classes.hover}
        >
            {selected ? <CheckIcon style={{color: '#53a321'}}/> : null}
        </ToggleButton>
    );
}
