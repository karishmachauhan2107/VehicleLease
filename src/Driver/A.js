// Driver Dashboard
import React,{Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './ListItems';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; 
// import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import ProfileD from './ProfileD'; 
import Ma from './Ma';
import Busroute from './Busroute';
import Vehicleinfo from './Vehicleinfo';
// import Loginuii from './Loginuii';
// import SignUp from './SignUp';
import Md from '../MainD/Md';
import K from './K';
import Dl from './Dl';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        VehicleLease
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const drawerWidth = 240;

const useStyles = ((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  a:{
    marginLeft: theme.spacing(1),
  },
}));

class A extends Component{
    constructor(){
        super();
            this.state={
                open:false,
                l:false
        };
    }

    
   handleDrawerOpen = () => {
      this.setState({open:true})
    // setOpen(true);
  };
   handleDrawerClose = () => {
    this.setState({open:false})
    // setOpen(false);
  };
  handleadd = () => {
    this.setState({
      l:true
    })
  };
  
  render(){
    const {classes} = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
    {this.state.l?(<Md/>):(
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Driver Dashboard
          </Typography>
          <Typography component="h1" variant="h6" color="inherit" noWrap alignItems='center'>
            {'Welcome '+localStorage.getItem('user')}
          </Typography>
          <a className={classes.b} href="/">
            <Button className={classes.a} variant="contained" color="secondary">Log Out</Button></a>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
        }}
        open={this.state.open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <img src="logo.png" width="160" height="150"/> */}
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3} justify="center">
          <div>
          {this.props.User}
          <Router>
            <Switch> 
             {/* <Route exact path='/Driver Profile' component={ProfileD}></Route>  */}
             {/* <Route exact path='/ProfileD' component={ProfileD}></Route>  */}
               <Route exact path='/driverDashboard/ProfileD' component={ProfileD}/>
               <Route exact path='/driverDashboard/Ma' component={Ma}></Route> 
               <Route exact path='/driverDashboard/Busroute' component={Busroute}></Route>  
               <Route exact path='/driverDashboard/Vehicleinfo' component={Vehicleinfo}></Route>
               <Route exact path='/driverDashboard' component={K}></Route>
               <Route exact path='/driverDashboard/Dl' component={Dl}></Route> 
               <Redirect to='/driverDashboard' />
               {/* </Route> */}

             </Switch> 
           </Router>      
          </div>              
            </Grid>           

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
      </div>
      </Router>
    )}
    </div>
  );
}
} 
export default withStyles(useStyles)(A);