//driver reg
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
// import Axios from 'axios';




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
      margin: theme.spacing(3, 0, 0),
    },
  }));

  
 class Driverreg extends Component
  {
  constructor()
{
    super();
    this.state={
        username:'',
        contact:'',
        email:'',
        aadhar:'',
        address:'',
        license:'',
        experience:'',
        pass:'',
        st:false
    }
}
fun = () =>{
  toast(this.state.Name);
};
yeCall = () =>{
  toast(this.state.Number);
};
kalu =() =>{
  toast(this.state.Email);
};
bhalu =() =>{
  toast(this.state.Aadhar);
};
yoyo =() =>{
  toast(this.state.License);
};
yoyoyo =() =>{
  toast(this.state.Experience);
};

handleBook = () =>  {
     this.fun();
     console.log(this.state.Name);
     this.yeCall();
     console.log(this.state.Number);
     this.kalu();
     console.log(this.state.Email);
     this.bhalu();
     console.log(this.state.Aadhar);
     this.yoyo();
     console.log(this.state.License);
     this.yoyoyo();
     console.log(this.state.Experience);
};
      
handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}

// sendData(ev){
//         const id=this.state.t1
//         const name=this.state.t2
//         const phn_no=this.state.t3
//         const address=this.state.t4
//         const License=this.state.t5
//         const D_O_B=this.state.t6
       
//         const data={
//             t1,t2,t3,t4,t5,t6
//         }

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
  <center> <img src="C.png" width="160" height="150"/></center>
    <Typography component="h1" variant="h5">
      DRIVER REGISTRATION
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth label="Enter your Name" name="userame" autoComplete="Name" autoFocus onChange={this.handleChangeFields}/> 
<TextField variant="outlined" margin="normal" required fullWidth label="Enter your Contact Number" name="contact" type="Number" autoComplete="Number" onChange={this.handleChangeFields} /> 
<TextField variant="outlined" margin="normal" required fullWidth id="Email" label="Email Address" name="email" autoComplete="Email" autoFocus onChange={this.handleChangeFields}/> 
<TextField variant="outlined" margin="normal" required fullWidth label="Aadhar" name="aadhar" autoFocus onChange={this.handleChangeFields}/>

<TextField variant="outlined" margin="normal" required fullWidth label="Address" name="address" autoComplete="Address" autoFocus onChange={this.handleChangeFields}/>               



<TextField variant="outlined" margin="normal" required fullWidth label="License" name="license" autoFocus onChange={this.handleChangeFields}/>
<TextField variant="outlined" margin="normal" required fullWidth label="Experience" name="experience" autoFocus onChange={this.handleChangeFields}/>
<TextField variant="outlined" margin="normal" required fullWidth label="Create Password" name="password" type="password"  onChange={this.handleChangeFields} />
<FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />

<Button onClick={this.handleBook} fullWidth variant="contained" color="primary" className={classes.submit}>Book</Button><ToastContainer />
<Button onClick={this.handleBook} fullWidth variant="contained" color="primary" className={classes.submit}>Cancel</Button><ToastContainer />

              </div>
</div>
</Container>

              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Driverreg);
