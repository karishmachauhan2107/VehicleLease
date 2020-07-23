// Dashboard my version
import React,{Component} from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import Button from '@material-ui/core/Button';

import S from './S';
import Q3 from './Q3';
import Q2 from './Q2';
import Q5 from './Q5';
import Sallot from './Sallot';
import Q from './Q'; 
import V from './V';   
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
  }));

  
class Q1 extends Component{
    constructor(){
        super();
            this.state={
                open:false,
        };
    }
  
//   const [open, setOpen] = React.useState(true);
   handleDrawerOpen = () => {
      this.setState({open:true})
    // setOpen(true);
  };
   handleDrawerClose = () => {
    this.setState({open:false})
    // setOpen(false);
  };

  render(){
    const {classes} = this.props;
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
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
          <DashboardIcon />
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary"> */}
            {/* </Badge> */}
            <a className={classes.b} href="/">
            <Button className={classes.a} variant="contained" color="secondary">Log Out</Button></a>
              </IconButton>
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
          </IconButton></div>
          <Divider />
        {/* <List>{mainListItems}</List> */}

        <Router>
        <div> 
    
     {/* <ListItem button>
      <ListItemIcon>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* All about users will be displayed */}
          {/* <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/admin/Q'}>
                    Driver</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
       </ListItemIcon>
    </ListItem>  */} 
    
    {/* <ListItem button>
      <ListItemIcon>
        
        <a href="/admin/DriverDetails"><AirlineSeatReclineNormalIcon /></a>
      </ListItemIcon>
       <ListItemText primary="Driver Details" />
      <Link to="/DriverDetails">Driver Details</Link>
     <a href="/admin/DriverDetails">Driverdetails</a>
    </ListItem> 
    <ListItem button>
      <ListItemIcon>
       
        <a href="/admin/VehicleInformation"> <PermScanWifiIcon /></a>
        
      </ListItemIcon>
       <ListItemText primary="Vehicle Information" />
      <Link to="/vehicleinformation"> Vehicle Information </Link>
       <a href="/admin/VehicleInformation">VehicleInformation</a>
    </ListItem> */}
    <ListItem button>
      <ListItemIcon>
       
        <a href="/admin/AddVehicle"> <DirectionsBusIcon/></a>
        
      </ListItemIcon>
      {/* <ListItemText primary="Vehicle Information" /> */}
      {/* <Link to="/vehicleinformation"> Vehicle Information </Link> */}
      <a href="/admin/AddVehicle">AddVehicle</a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
       
        <a href="/admin/AllotVehicle"> <CreateIcon/></a>
        
      </ListItemIcon>
      {/* <ListItemText primary="Vehicle Information" /> */}
      {/* <Link to="/vehicleinformation"> Vehicle Information </Link> */}
      <a href="/admin/AllotVehicle">AllotVehicle</a>
    </ListItem>
     <ListItem button>
      <ListItemIcon>
        
        <a href="/admin/Summary"><AmpStoriesIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Plans" /> */}
      {/* <Link to="">Routes</Link> */}
      <a href="/admin/Summary">Summary</a>
    </ListItem>
   
  </div>
  </Router>
      

        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
<Router>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="center">
            {/* Chart */}
            <Switch>
      {/* <Route path='/admin/DriverDetails' component={Q}></Route> */}
      {/* <Route path='/admin/AllotVehicle' component={Sallot}></Route> */}
      <Route path='/admin/AllotVehicle' component={Sallot}></Route>
      <Route exact path='/admin/AddVehicle' component={V}></Route>
      {/* <Route exact path='/admin/vehicleInformation' component={Q3}></Route> */}
      <Route exact path='/admin/Dashboard' component={Q2}></Route>
      <Route path='/admin/Summary' component={S}></Route>
       <Redirect to='/admin/Dashboard'/> 
    </Switch>
            
            
          </Grid>
          
        </Container>
      </main>
      </Router>

        </div>

      );}}
      export default withStyles(useStyles)(Q1);