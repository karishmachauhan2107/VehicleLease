//ListItem of Dashboard

import React,{Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import KeyboardHideOutlinedIcon from '@material-ui/icons/KeyboardHideOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import ProfileD from './ProfileD'; 
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const mainListItems = (
  <div>
      <div>
        <Router> 
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <a href="/driverDashboard/ProfileD">
        <EditOutlinedIcon /></a> 
      </ListItemIcon>
      <a href="/driverDashboard/ProfileD" >Edit Profile</a>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <a href="/driverDashboard/Ma">
        <KeyboardHideOutlinedIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="About" /> */}
      {/* <Link to="/Student list">Student list</Link>  */}
      <a href="/driverDashboard/Ma" >Attendance Board</a>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <a href="/driverDashboard/Busroute">
        <LocationOnOutlinedIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Contact" /> */}
      {/* <Link to="/Busroute">Route</Link> */}
      <a href="/driverDashboard/Busroute">Route</a>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <a href="/driverDashboard/Vehicleinfo">
        <InfoOutlinedIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Feedback" /> */}
      {/* <Link to="/Vehicleinfo">Vehicle info</Link> */}
      <a href="/driverDashboard/Vehicleinfo">Vehicle info</a>
    </ListItem>
    </Router>
  </div>
  </div>
);

export const secondaryListItems = (
  <div>
     <div>
      <Router>
    <ListItem button>
      <ListItemIcon>
      {/* <a href="/B"> */}
      {/* <PeopleIcon /></a> */}
      </ListItemIcon>
      {/* <a href="/B">LogOut</a> */}
    </ListItem>
</Router>
</div>
</div>
);


