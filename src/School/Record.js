import React,{Component} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Vrecord from './Vrecord'
import Srecord from './Srecord'
import Dwrecord from './Dwrecord'
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import { makeStyles,withStyles } from '@material-ui/core/styles';

const useStyles = ((theme) => ({
  root: {
    // display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

class Q5 extends Component  {
  constructor(props){
    super(props);
    this.state={
open:false
    };
  }

   handleToggle = () => {
    // setOpen((prevOpen) => !prevOpen);
  this.setState({open:true})
  };

   handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }
    this.setState({open:false})

    // setOpen(false);
  };

   handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
  this.setState({open:false})
      // setOpen(false);
    }
  }
  render(){
    const {classes} = this.props;
  return (
    <div className={classes.root}>
          <Button className={classes.paper} variant="contained" color="secondary" 
          onClick={event =>  window.location.href='/schoolDashboard/Record/Student'}>
        Student Record
          </Button>
          <Button className={classes.paper} variant="contained" color="secondary" 
          onClick={event =>  window.location.href='/schoolDashboard/Record/date'}>
          Datewise Record
          </Button>
          <Button  variant="contained" color="secondary" 
          onClick={event =>  window.location.href='/schoolDashboard/Record/vehicle'}>
          Student list
          </Button>
          <Router>
      <Switch>
      <Route exact path='/schoolDashboard/Record/Student' component={Srecord}></Route>
      <Route exact path='/schoolDashboard/Record/date' component={Dwrecord}></Route>
      <Route exact path='/schoolDashboard/Record/vehicle' component={Vrecord}></Route>
      </Switch>
    </Router>   
    </div>
  );
}}
export default withStyles(useStyles)(Q5);