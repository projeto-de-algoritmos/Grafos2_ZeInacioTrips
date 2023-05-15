import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LocalShipping from '@material-ui/icons/LocalShipping';
import { Link } from 'react-router-dom';
import CallSplitIcon from '@material-ui/icons/CallSplit';


const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
        overflow: 'auto',
      },
      drawerPaper: {
        width: 240,
        overflow: 'auto',
        backgroundColor: '#333333',  
      },
      listItem: {
        color: '#FFFFFF', 
        textDecoration: 'none',
        overflow: 'auto',
      },
      icon: {
        color: '#FFFFFF', // ou 'white'
      },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      
      <List>
        {[
          { text: 'Início', icon: <HomeIcon style={{ color: '#FFFFFF' }}/>, link: '/' },
          { text: 'Dijkstra', icon: <CallSplitIcon style={{ color: '#FFFFFF' }} />, link: '/dijkstra' },
          { text: 'Sobre', icon: <LocalShipping style={{ color: '#FFFFFF' }}/>, link: '/sobre' },
        ].map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link} className={classes.listItem}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
