// Vehicle information page
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import Pl from './Pl'
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom'; 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Axios from 'axios'

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  a:{
    color:'green'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class V extends Component{
  constructor(props){
    super(props);
    this.state={
      kalu:[],
      t6:'',
      v:''
    };
  }
  componentDidMount(){
    const t6=localStorage.getItem('user')
    const data={
     t6
    }
    Axios.get('http://localhost:8080/examples/pvinfo.jsp',{params:data}).then(response=>{
      this.setState({kalu: response.data.responses})    
      console.log(this.state.t6)
  // console.log(this.state.v)
      console.log(response.data.responses)
    }).catch(err => {
        console.log("Failed");
    })
  }
  var localStorage=require('localStorage');
localStorage.setItem('vid',this.state.v);
    render() {
  const {classes} = this.props;
  return (
    <Router>
      <Switch>
      <Route exact path='/plans' component={Pl}></Route>
      </Switch>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <center><Avatar className={classes.avatar}>
          <PermScanWifiIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Vehicle Information
        </Typography></center>
        <form className={classes.form} noValidate>
        {    this.state.kalu.map((ag,key) => 
                     <div key> 
        <Card variant="outlined" className={classes.a}>
      <CardContent>
        <Typography variant="h5" value={this.state.v} component="h2">
          Vehicle Id : {ag.vehicleid}
        </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Type : {ag.type}
        </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Name : {ag.name}
        </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined" className={classes.b}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Model Number : {ag.model}
        </Typography>
      </CardContent>
      </Card>
      <Card variant="outlined">
    <CardContent>
        <Typography variant="h5" component="h2">
          Description : {ag.des}
        </Typography>
      </CardContent>
      </Card>
        <Card variant="outlined">
    <CardContent>
        <Typography variant="h5" component="h2">
          Price : {ag.price}
        </Typography>
      </CardContent>
    </Card>
    </div>
    )}
          <center> <Button variant="contained" color="default">
                    <a href="/privateDashboard/plans" className={classes.a}>Back</a>
                  </Button></center>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </Router>
    );
}}
export default withStyles(useStyles)(V);