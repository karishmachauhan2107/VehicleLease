// Dashboard my version
import React,{Component} from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import Dd from './Dd';
import E from './E';
import Plan from './Plan';
import Button from '@material-ui/core/Button';
import V from './V';
import I from './I';
import Md from '../MainD/Md';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import D from './Loginuii';

  
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
    // b:{
    //   alignItems:'center',
    //   marginRight: theme.spacing(55),
    // },
  }));
  
  
class D extends Component{
    constructor(props){
        super(props);
        console.log(this.props.name);
this.state={
un:this.props.name
};
        this.state={
               open:true,
              //  l:false
        };
        this.state={
          l:false
   };
    }
  
//   const [open, setOpen] = React.useState(true);
li = () => {
  // this.props.history.push({pathname:'/B'})
  this.setState({l:true})
  // return <Link href="/login"></Link>
  // setOpen(true);
};
   handleDrawerClose = () => {
    this.setState({open:false})
  };
  handleDrawerOpen = () => {
    this.setState({open:true})
    // setOpen(false);
  };
  render(){
    const {classes} = this.props;
    // const {name}=this.props;
    // this.u = JSON.parse(localStorage.getItem('u'));
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
    <div>
         {/* <h1>{this.u}</h1> */}
    {this.state.l?(< Md/>):(
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
          <DashboardIcon className={classes.a}/>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
           Private Dashboard
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary"> */}
           {/* <p>{name}</p> */}
           {/* <Grid justify='center'> */}
           {/* <div> */}
             <Typography component="h1" variant="h6" color="inherit" noWrap alignItems='center' className={classes.title}>
            {'Welcome '+localStorage.getItem('user')}
          </Typography>
          {/* </div></Grid> */}
          <a href="/">
            <Button className={classes.a} variant="contained" color="secondary">Log Out</Button></a>
            {/* </Badge> */}
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
        <DashboardIcon />
      </ListItemIcon> */}
      {/* <ListItemText primary="Dashboard" /> */}
      {/* <Link to="/Dashboard"></Link>
      <a href="/Dashboard">Dashboard</a>
    </ListItem> */}
    <ListItem button>
      <ListItemIcon>
    <a href="/privateDashboard/edit"/>
      <EditIcon onClick={event =>  window.location.href='/privateDashboard/edit'}/> 
      </ListItemIcon>
      {/* <ListItemText primary="Edit" /> */}
      <Link to="/privateDashboard/edit"></Link>
      <a href="/privateDashboard/edit">Edit</a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AmpStoriesIcon onClick={event =>  window.location.href='/privateDashboard/plans'}/>
      </ListItemIcon>
      {/* <ListItemText primary="Plans" /> */}
      <Link to="/privateDashboard/plans"></Link>
      <a href="/privateDashboard/plans">Plans</a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PermScanWifiIcon onClick={event =>  window.location.href='/privateDashboard/vehicleInformation'}/>
      </ListItemIcon>
      {/* <ListItemText primary="Vehicle Information" /> */}
      <Link to="/privateDashboard/vehicleInformation"></Link>
      <a href="/privateDashboard/vehicleInformation">Vehicle Information</a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AirlineSeatReclineNormalIcon onClick={event =>  window.location.href='/privateDashboard/driverDetails'}/>
      </ListItemIcon>
      <Link to="/privateDashboard/driverDetails"></Link>
      <a href="/privateDashboard/driverDetails">Driver Details</a>
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
      <Route path='/privateDashboard/driverDetails' component={Dd}></Route>
      <Route exact path='/privateDashboard/edit' component={E}></Route>
      <Route exact path='/privateDashboard/plans' component={Plan}></Route>
      <Route exact path='/privateDashboard/vehicleInformation' component={V}></Route>
      <Route exact path='/privateDashboard' component={I}></Route>
      <Route path='/login' component={Md}></Route>
      <Redirect to='/privateDashboard/plans'/>
    </Switch>
            
    
            
          </Grid>
          
        </Container>
      </main>
      </Router>
        </div>
        </Router>
   )} 
  </div>   
  );}}
      export default withStyles(useStyles)(D);