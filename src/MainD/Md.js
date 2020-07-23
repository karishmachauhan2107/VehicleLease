import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import Loginuii from './Loginuii';
import Driverreg from './Driverreg';
import Pb from './Pb';
import Sr from './Sr';
import D from '../Pd/D';
import Re from './Re';
import Q1 from '../Admin/Q1';
import Dashboard from '../School/Dashboard';
import A from '../Driver/A';
import Grid from '@material-ui/core/Grid';

const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  a: {
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
},
b:{
  color:'white'
},
}));

class Md extends Component{
    render() {
  const {classes} = this.props;

  return (
      <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Avatar className={classes.icon} src="C.png" />
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            VehicleLease
          </Typography>
          <a className={classes.b} href="/registration">
          <Button className={classes.a} variant="contained" color="secondary">
          <Link to="/registration"></Link>
      Registration
          </Button></a>
          <a className={classes.b} href="/">
             <Button className={classes.a} variant="contained" color="secondary" Component={Link} to="/">
          <Link to="/"></Link>
     Sign In
          </Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
    <div>
      <Grid>
      <container>
          <Switch>
      <Route exact path='/' component={Loginuii}></Route>
      <Route exact path='/registration' component={Re}></Route>
      {/* <Redirect to='/'/> */}
      <Route exact path='/privateBooking' component={Pb}></Route>
      <Route exact path='/schoolRegistration' component={Sr}></Route>
      <Route exact path='/driverRegistration' component={Driverreg}></Route>
      <Route path='/privateDashboard' component={D}></Route>
      <Route path='/admin' component={Q1}></Route>
      <Route path='/schoolDashboard' component={Dashboard}></Route>
      <Route path='/driverDashboard' component={A}></Route>
      <Redirect to='/'/>
        </Switch>  
        </container></Grid></div>
    </Router>
  );
}}
export default withStyles(useStyles)(Md);