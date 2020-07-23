//Driver Profile(Edit)

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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


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

  
 class ProfileD extends Component
  {
  constructor()
{
    super();
    this.state={
        u:'',
        name:'',
        contact:'',
        exp:'',
        email:'',
        u:'',
        st:false,
        kalu:[]
    }
}
fun = () =>{
  toast(this.state.id);
};
yeCall = () =>{
  toast(this.state.Driver_name);
};
kalu =() =>{
  toast(this.state.phn_no);
};
bhalu =() =>{
  toast(this.state.Address);
};
yoyo =() =>{
  toast(this.state.Driving_License);
};
yoyoyo =() =>{
  toast(this.state.Date_Of_Birth);
};

handleUPLOAD = () =>  {
     this.fun();
     console.log(this.state.id);
     this.yeCall();
     console.log(this.state.Driver_name);
     this.kalu();
     console.log(this.state.phn_no);
     this.bhalu();
     console.log(this.state.Address);
     this.yoyo();
     console.log(this.state.Driving_License);
     this.yoyoyo();
     console.log(this.state.Date_Of_Birth);
};



handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
componentDidMount(){
  const u=localStorage.getItem('user')
  const data={
   u
  }
  Axios.get('http://localhost:8080/examples/edriver.jsp',{params:data}).then(response=>{
    this.setState({kalu: response.data.Driver_data})  

    
    
  }).catch(err => {
      console.log("Failed");
  })
}
sendData(ev){
  if(this.state.contact=='' || this.state.email=='' || this.state.exp==''){
    toast("Null Fields")
  }
  else{

  // const name=this.state.name
  const contact=this.state.contact
  const email=this.state.email
  const exp=this.state.exp
  const u=localStorage.getItem('user')
  const data={
    contact,email,exp,u
  }
  Axios.get('http://localhost:8080/examples/dedit.jsp',{params:data}).then(response=>{
    console.log(response);
    this.setState({
      st:response.data.response
    })
  }).catch(err=>{
    console.log("Failed");
  })
//  toast(this.state.u)
//   toast(this.state.pw)
//   toast(this.state.c)
  // toast(this.state.name)
  toast(this.state.contact)
  toast(this.state.email)
  // toast(this.state.aadhar)
  // toast(this.state.license)
  toast(this.state.exp)
}}

    render()
    {
        const {classes} = this.props
        return (

            <div>
           <Box color="text.primary" clone>
                {/* {this.state.st?(<div> Welcome</div>):( */}
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  {    this.state.kalu.map((ag,key) => 
                    <div key> 
  {/* <center> <img src="logo.png" width="160" height="150"/></center> */}
    <center>  <Avatar className={classes.avatar}>
      < EditOutlinedIcon/>
          </Avatar>
    <Typography component="h1" variant="h5">
      EDIT PROFILE
    </Typography></center>


<div className={classes.form} noValidate>

{/* <TextField variant="outlined" margin="normal" required fullWidth label="Enter Driver Id" name="id" autoFocus onChange={this.handleChangeFields}/>  */}
{/* <TextField 
 variant="outlined" 
 margin="normal" 
 required fullWidth 
 value={this.state.name}
 label="Enter Driver Name" 
 name="name" 
 autoComplete="Driver name" 
 autoFocus onChange={this.handleChangeFields}/>    */}

<TextField variant="outlined"
 value={this.state.contact}
 margin="normal" 
 required fullWidth 
 label={ag.c}
 name="contact"
 type="Mobile number" onChange={this.handleChangeFields} /> 

 

<TextField variant="outlined"
 margin="normal" required fullWidth 
 value={this.state.email}
 label={ag.e} 
 name="email" autoFocus onChange={this.handleChangeFields}/> 

<TextField variant="outlined"
 value={this.state.exp}
 margin="normal" required fullWidth
  label={ag.exp}
  name="exp" 
  autoFocus onChange={this.handleChangeFields}/>
<FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />

<Button onClick={this.sendData.bind(this)}
fullWidth variant="contained" 
color="primary" 
className={classes.submit}>Save</Button><ToastContainer />

              </div>
              </div>
              )}
</div>
</Container>

              {/* )} */}
              </Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(ProfileD);
