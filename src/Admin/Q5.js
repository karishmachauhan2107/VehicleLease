import React,{Component} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Sallot from './Sallot'
import Dallot from './Dallot'
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
          onClick={event =>  window.location.href='/admin/AllotVehicle/driver'}>
          Driver
          </Button>
          <Button  variant="contained" color="secondary" 
          onClick={event =>  window.location.href='/admin/AllotVehicle/school'}>
          School
          </Button>
          <Router>
      <Switch>
      <Route exact path='/admin/AllotVehicle/driver' component={Sallot}></Route>
      <Route exact path='/admin/AllotVehicle/school' component={Dallot}></Route>
      </Switch>
    </Router>   
    </div>
  );
}}
export default withStyles(useStyles)(Q5);