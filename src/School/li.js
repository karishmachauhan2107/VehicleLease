import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import AirportShuttleTwoToneIcon from '@material-ui/icons/AirportShuttleTwoTone';
import FeedbackTwoToneIcon from '@material-ui/icons/FeedbackTwoTone';
import BarChartTwoToneIcon from '@material-ui/icons/BarChartTwoTone';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export const mainListItems = (
  <div>
         <ListItem button>
      <ListItemIcon>
        <a href="/schoolDashboard/plans">
        <BarChartTwoToneIcon /></a>
      </ListItemIcon>
      <a href="/schoolDashboard/plans"><Button variant="contained" color="primary">Plans</Button></a>
    </ListItem>
    <ListItem button>
      {/* <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>*/}
      <ListItemIcon>
        <a href="/schoolDashboard/Edit">
        <CreateIcon /></a>
      </ListItemIcon> 
      
      {/* <Link to="/Sign up"  ><Button variant="contained" color="primary">
  Sign up
</Button></Link> */}
<a href="/schoolDashboard/Edit"><Button variant="contained" color="primary">Edit</Button></a>
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <a href="/schoolDashboard/Buses">
        <AirportShuttleTwoToneIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Buses" /> */}
      {/* <Link to="/Buses"><Button variant="contained" color="primary">Buses</Button></Link> */}
      <a href="/schoolDashboard/Buses"><Button variant="contained" color="primary">Buses</Button></a>
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
      <a href="/schoolDashboard/Feedback">
        <FeedbackTwoToneIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Feedback" /> */}
      {/* <Link to="/Feedback"><Button variant="contained" color="primary">Feedback</Button></Link> */}
      {/* <a href="/schoolDashboard/Feedback"><Button variant="contained" color="primary">Feedback</Button></a>
    </ListItem> */} 
    <ListItem button>
      <ListItemIcon>
        <a href="/schoolDashboard/Attendance">
        <BarChartTwoToneIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Attendance" /> */}
      {/* <Link to="/Attendance"><Button variant="contained" color="primary">Attendance</Button></Link> */}
      <a href="/schoolDashboard/Attendance"><Button variant="contained" color="primary">Attendance</Button></a>
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <a href="/schoolDashboard/Students">
        <PeopleIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Attendance" /> */}
      {/* <Link to="/Attendance"><Button variant="contained" color="primary">Attendance</Button></Link> */}
      {/* <a href="/schoolDashboard/Students"><Button variant="contained" color="primary">Students</Button></a>
    </ListItem> */} 
    <ListItem button>
      <ListItemIcon>
        <a href="/schoolDashboard/Record">
        <AssignmentIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Attendance" /> */}
      {/* <Link to="/Attendance"><Button variant="contained" color="primary">Attendance</Button></Link> */}
      <a href="/schoolDashboard/Record"><Button variant="contained" color="primary">Record</Button></a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <a href="/schoolDashboard/Routes">
        <LocationOnOutlinedIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Attendance" /> */}
      {/* <Link to="/Attendance"><Button variant="contained" color="primary">Attendance</Button></Link> */}
      <a href="/schoolDashboard/Routes"><Button variant="contained" color="primary">Routes</Button></a>
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);