// Driver details page
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
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
    marginTop: theme.spacing(5),
  },
  b:{
    marginBottom: theme.spacing(5),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Dd extends Component{
  constructor(props){
    super(props);
      this.state={
        n:'',
        a:'',
        p:'',
        ad:'',
        st:false,
        kalu:[],
        v:''
    };
  }
  h=()=>{
    // alert(this.state.n);
    console.log(this.state.n);
    // alert(this.state.a);
    // alert(this.state.p);
    // alert(this.state.ad);
    
    console.log(this.state.a);
    console.log(this.state.p);
    console.log(this.state.ad);
  };
  handleChangeFields=(event)=>{
    this.setState({
      ...this.state,
      [event.target.name]:event.target.value
    })
  }
  componentDidMount(){
     const v=localStorage.getItem('vid');
    const data={
      v
     }
     Axios.get('http://localhost:8080/examples/pdinfo.jsp',{params:data}).then(response=>{
       this.setState({kalu: response.data.responses})  
   console.log(this.state.v)
       console.log(response.data.responses)
     }).catch(err => {
         console.log("Failed");
     })
}
    render() {
  const {classes} = this.props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <center><Avatar className={classes.avatar}>
          <AirlineSeatReclineNormalIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Driver Details
        </Typography></center>
        <form className={classes.form} noValidate>
        {    this.state.kalu.map((ag,key) => 
                     <div key> 
        <Card variant="outlined" className={classes.a}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Name : {ag.n}
        </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Email : {ag.e} 
        </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Phone Number : {ag.c}
        </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined" className={classes.b}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Experience : {ag.exp}
        </Typography>
      </CardContent>
    </Card>
</div>
        )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}}
export default withStyles(useStyles)(Dd);