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
import Axios from'axios';


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
      u:'',
      pw:'',
      c:'',
              Name:'',
        contact:'',
        Email:'',
        Aadhar:'',
        License:'',
        Exp:'',
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
sendData(ev){
  if(this.state.u=='' || this.state.pw=='' || this.state.name=='' || this.state.contact=='' 
  || this.state.email=='' || this.state.aadhar=='' || this.state.license=='' || this.state.exp==''){
    toast("Null Fields")
  }
  else{
  const u=this.state.u
  const pw=this.state.pw
  // const c=this.state.c
  const name=this.state.name
  const contact=this.state.contact
  const email=this.state.email
  const aadhar=this.state.aadhar
  const license=this.state.license
  const exp=this.state.exp
  const data={
    u,pw,name,contact,email,aadhar,license,exp
  }
  Axios.get('http://localhost:8080/examples/d.jsp',{params:data}).then(response=>{
    console.log(response);
    this.setState({
      message:response.data.response
    })
  }).catch(err=>{
    console.log("Failed");
  })
  toast(this.state.u)
  toast(this.state.pw)
  // toast(this.state.c)
  toast(this.state.name)
  toast(this.state.contact)
  toast(this.state.email)
  toast(this.state.aadhar)
  toast(this.state.license)
  toast(this.state.exp)
}}
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
  <center> <img src="c.png" width="160" height="150"/></center>
    <Typography component="h1" variant="h5">
      DRIVER REGISTRATION
    </Typography>


<div className={classes.form} noValidate>
<TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={this.handleChangeFields.bind(this)}
                value={this.state.u}
                name="u"
                id="u"
                label="Username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={this.handleChangeFields.bind(this)}
                value={this.state.pw}
                type="password"
                name="pw"
                id="pw"
                label="Password"
                autoFocus
              />
{/* <TextField variant="outlined" margin="normal" 
                value={this.state.c}
                required fullWidth name="c" label="private/school/driver" type="text" id="c" 
                autoComplete="private/school/driver" onChange={this.handleChangeFields.bind(this)} />  */}
<TextField variant="outlined" margin="normal" required fullWidth label="Enter your Name" name="name" 
                value={this.state.name}
                autoComplete="Name" autoFocus onChange={this.handleChangeFields.bind(this)}/> 
<TextField variant="outlined" margin="normal" 
                value={this.state.contact}
                required fullWidth label="Enter your Phone Number" name="contact" type="Number"
                 autoComplete="Number" onChange={this.handleChangeFields.bind(this)} /> 
<TextField variant="outlined" margin="normal" required fullWidth id="Email" label="Email Address" name="email"
                value={this.state.email}
                autoComplete="Email" autoFocus onChange={this.handleChangeFields.bind(this)}/> 
<TextField variant="outlined" margin="normal" required fullWidth label="Aadhar" name="aadhar"
                value={this.state.aadhar}
                autoFocus onChange={this.handleChangeFields.bind(this)}/>

{/* <TextField variant="outlined" margin="normal" required fullWidth label="Address" name="address" 
                value={this.state.address}
                autoComplete="Address" autoFocus onChange={this.handleChangeFields.bind(this)}/>                */}



<TextField variant="outlined" margin="normal" required fullWidth label="License" name="license"
                value={this.state.license}
                autoFocus onChange={this.handleChangeFields.bind(this)}/>
<TextField variant="outlined" margin="normal" required fullWidth label="Experience" name="exp"
                value={this.state.exp}
                autoFocus onChange={this.handleChangeFields.bind(this)}/>
<FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />

<Button onClick={this.sendData.bind(this)} fullWidth variant="contained" color="primary" className={classes.submit}>Book</Button><ToastContainer />
{/* <Button onClick={this.handleBook} fullWidth variant="contained" color="primary" className={classes.submit}>Cancel</Button><ToastContainer /> */}

              </div>
</div>
</Container>

              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Driverreg);
