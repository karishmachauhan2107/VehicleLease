import React,{ Component } from "react";
import { withStyles, responsiveFontSizes } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import Grid from '@material-ui/core/Grid';
import Pb from './Pb';
import Driverreg from './Driverreg';
import Sr from './Sr';

const useStyles = ((theme) => ({
      a: {
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        // marginTop: theme.spacing(10),
        padding: theme.spacing(3),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    c:{
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(20),
        padding: theme.spacing(3),
    },
  }));

class Re extends Component{
    render(){
        const {classes}=this.props;
        return(
            <div>
                <Router>
                 <Grid justify="center">
                     <center>
          <div><Button  variant="contained" className={classes.c} color="default">
        <Link to="/privateBooking"></Link>
        <a font-size="50px" href="/privateBooking">Private Vehicle Registration</a></Button></div>
        <div><Button variant="contained" color="default" className={classes.a}>
        <Link to="/schoolRegistration"></Link>
        <a href="/schoolRegistration" className={classes.b}>School Organistion Registration</a></Button></div>
        <div><Button className={classes.a} variant="contained" color="default">
        <Link to="/driverRegistration"></Link>
        <a href="/driverRegistration" className={classes.b}>Driver Registration</a></Button></div></center>
          <Switch>
      {/* <Route exact path='/' component={Loginuii}></Route> */}
      <Route exact path='/privateBooking' component={Pb}></Route>
      <Route exact path='/schoolRegistration' component={Sr}></Route>
      <Route exact path='/driverRegistration' component={Driverreg}></Route>
      <Redirect to='/'/>
        </Switch>  
            </Grid>
            </Router>
            </div>
        );
    }
}
export default withStyles(useStyles)(Re);