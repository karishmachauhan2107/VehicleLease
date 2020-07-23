//Vehicle Information

import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Axios from 'axios';
import { render } from '@testing-library/react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const useStyles = ((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'black',
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
      margin: theme.spacing(1, 0, 0),
    },
  }));

  
 class Vehicleinfo extends Component
  {
  constructor()
{
    super();
    this.state={
        t1:"",
        t2:"",
        t3:"",
        t4:"",
        t5:"", //vehicle assign
        t6:"",
        message:"",
        kalu:[]
    }
}

fun = () =>{
  toast("Done");
};
handleDone =() =>
{
 this.y();   
}
// yeCall = () =>{
//   toast(this.state.Vehicle_type);
// };
// kalu =() =>{
//   toast(this.state.Vehicle_no);
// };
// bhalu =() =>{
//   toast(this.state.Vehicle_desc);
// };
// yoyo =() =>{
//   toast(this.state.Vehicle_status);
// };
// yoyoyo =() =>{
//   toast(this.state.Customer_id);
// };

// handleADD = () =>  {
//      this.fun();
//      console.log(this.state.Vehicle_id);
//      this.yeCall();
//      console.log(this.state.Vehicle_type);
//      this.kalu();
//      console.log(this.state.Vehicle_no);
//      this.bhalu();
//      console.log(this.state.Vehicle_desc);
//      this.yoyo();
//      console.log(this.state.Vehicle_status);
//      this.yoyoyo();
//      console.log(this.state.Customer_id);
// };



handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
componentDidMount(){
  const t6=localStorage.getItem('user')
  const data={
   t6
  }
  Axios.get('http://localhost:8080/examples/join.jsp',{params:data}).then(response=>{
    this.setState({kalu: response.data.responses})  

    console.log(this.state.t6)
    
    console.log(response.data.responses)
  }).catch(err => {
      console.log("Failed");
  })
}



    render()
    {
        const {classes} = this.props
        return (

            <div>
           <Box color="text.primary" clone>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  {/* <center> <img src="C.png" width="160" height="150"/></center> */}
  <Avatar className={classes.avatar}>
          <InfoOutlinedIcon />
            </Avatar>
    <Typography component="h1" variant="h5">
      VEHICLE INFORMATION
    </Typography>


<div className={classes.form} noValidate>

<form className={classes.form} noValidate>
{    this.state.kalu.map((ag,key) => 
                     <div key> 
 <Card variant="outlined" className={classes.a}>
      <CardContent>
        <Typography variant="h5" component="h2">
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
    {/* <Card variant="outlined">
    <CardContent>
        <Typography variant="h5" component="h2">
          Customer Id:
        </Typography>
      </CardContent>
    </Card> */}
</div>
)}
              </form>
              </div>
</div>
</Container>

              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Vehicleinfo);
