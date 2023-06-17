import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Icons from './Icons'

const useStyles = makeStyles(theme => ({
    root: (props => ({
        width: "100%",
        margin: '5px',
        display: 'flex',
        padding: '5px 0px',
        borderRadius: '1000px',
        cursor: 'pointer'
    })),
    iconWrapper: (props => ({
        position: "relative",
        minWidth: "45px",
        marginRight: "20px"
    })),
    icon: (props => ({
        position: "absolute",
        minWidth:  '45px',
        top: "20%",
        height: '45px',
        display: 'flex',
        marginRight: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50px',
        background: props.selected ? props.color : '#e5eaeb',
        filter: props.selected ? `brightness(1.1) ` : 'none',
        transition: "all 1s ease-out 0.5s"
    })),
    txt: (props => ({
        height: '100%',
        color: props.selected ? '#000' : '#919fa3'
    }))
}))

function IconButtonTC(props) {
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
                <div className={classes.iconWrapper}>
                    <div className={classes.icon}>
                        <Icons
                            name={iconName}
                            color={selected ? '#fff' : '#919fa3'}
                            size={size === 'small' ? 15 : 24}
                        />
                    </div>

                </div>

                <div className={classes.txt}>
                    <h5>{value}</h5>
                </div>
            </div>
        );
    }
}

export default IconButtonTC;
