import React,{Component} from 'react';
import clsx from 'clsx';
import { withStyles ,} from '@material-ui/core/styles';
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
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Record from './Record';
import { mainListItems } from './li';
import Button from '@material-ui/core/Button';



import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Roja from './Roja'; 
import Matbuses from './Matbuses';
// import Busroute from './Busroute';
// import Mat3 from './Mat3';
// import Tab1 from './Tab1';
import Dl from '../Driver/Dl'
import Dark from './Dark'
import { School } from '@material-ui/icons';
import Routes from './Routes';
// import Wel from './Wel';
import Splans from './Splans';

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

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
    alignItems:'centre',
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
  // const darkTheme = createMuiTheme({
  //   palette: {
  //     type: 'dark',
  //   },
  // })
  
  
}));

class A extends Component{
    constructor(){
        super();
            this.state={
                open:false
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
  
  // });
  
  render(){
    const {classes} = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
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
          School  Dashboard
          </Typography>
          <Typography component="h1" variant="h6" color="inherit" noWrap alignItems='center'>
            {'Welcome '+localStorage.getItem('user')}
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary"> */}
            <a href="/">
            <Button variant="contained" color="secondary">Log Out</Button></a>
              {/* <NotificationsIcon /> */}
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
          </IconButton>
        </div>
        <Divider />
        {/* <img src="url.ico" width="160" height="150"/> */}
        <List>{mainListItems}</List>
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="center">
          <div>
          {this.props.User}
          <Router>
            <Switch> 
             <Route exact path='/schoolDashboard/Edit' component={Roja}></Route> 
              <Route exact path='/schoolDashboard/Buses' component={Matbuses}></Route> 
               {/* <Route exact path='/schoolDashboard/Feedback' component={Mat3}></Route>   */}
               <Route exact path='/schoolDashboard/Attendance' component={Dl}></Route>
               {/* <Route exact path='/schoolDashboard/Students' component={Tab1}></Route> */}
                <Route exact path='/schoolDashboard/Routes' component={Routes}></Route>
                <Route path='/schoolDashboard/Record' component={Record}></Route>
               {/* <Route path='/schoolDashboard' component={Wel}></Route> */}
               <Route path='/schoolDashboard/plans' component={Splans}></Route>
      <Redirect to='/schoolDashboard/plans'/>
               
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
  );
}} 
export default withStyles(useStyles)(A);