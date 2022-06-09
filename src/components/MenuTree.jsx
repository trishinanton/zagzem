import React from 'react'
import AppState from '../AppState'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home'
import HouseIcon from '@material-ui/icons/House';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Divider from '@material-ui/core/Divider'

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    '&:focus > $content': {
      backgroundColor: '#FFF',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.2, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(2),
  },
  labelText: {
    color: '#3c4b5a',
    flexGrow: 1,
    lineHeight: '40px',
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles()
  const { labelText, labelIcon: LabelIcon, color, bgColor, ...other } = props

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <h4>{labelText}</h4>
        </div>
      }
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  )
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
});

const MenuTree = (props) => {
  const classes = useStyles()
  const hide = props.hide
  const context = React.useContext(AppState) 

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      style={{paddingBottom:'60px'}}
    >
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />
      <Link to='/' onClick={()=>hide()}>
      <StyledTreeItem
        nodeId="0"
        labelText="Главная"
        labelIcon={HomeIcon}
      />
      </Link>
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />

      <StyledTreeItem
        nodeId="1"
        labelText="Поселки"
        labelIcon={HomeWorkIcon}
        color="#1a73e8"
        bgColor="#e8f0fe"
      >
        <Link to='/villages' onClick={()=>{hide();context.selectOnlyVillageType(1)}}>
        <StyledTreeItem
          nodeId="2"
          labelText="Коттеджные поселки"
          labelIcon={HouseIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        </Link>
        <Link to='/villages' onClick={()=>{hide();;context.selectOnlyVillageType(2)}}>
        <StyledTreeItem
          nodeId="3"
          labelText="Дачные поселки"
          labelIcon={HouseIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        </Link>
      </StyledTreeItem>
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />
      <Link to='/services' onClick={()=>hide()}>
      <StyledTreeItem
        nodeId="5"
        labelText="Услуги"
        labelIcon={PlaylistAddCheckIcon}
        color="#1a73e8"
        bgColor="#e8f0fe"
      />
      </Link>
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />
      <Link to='/contact' onClick={()=>hide()}>
      <StyledTreeItem
        nodeId="7"
        labelText="Контакты"
        labelIcon={PhoneIcon}
        color="#1a73e8"
        bgColor="#e8f0fe"
      />
      </Link>
      <Divider style={{background:'#eff3f4',height:'0.5px'}} />
    </TreeView>
  );
}

export { MenuTree }
