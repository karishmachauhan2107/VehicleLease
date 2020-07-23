//LogIn Page

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
import EmailIcon from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import D from '../Pd/D';
import E from '../Pd/E';
import Q1 from '../Admin/Q1';
import A from '../Driver/A';
import Dashboard from '../School/Dashboard';
import clsx from 'clsx';
import FacebookIcon from '@material-ui/icons/Facebook';
import { blue,white } from '@material-ui/core/colors';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { BrowserRouter as Router, Route, useHistory, Switch ,Redirect} from 'react-router-dom'; 
import Axios from 'axios'
// import { LocalStorage } from '../local-storage';

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
      margin: theme.spacing(3, 0, 2),
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
    blue: {
      width: theme.spacing(7),
    height: theme.spacing(7),
    color: 'blue',
    },
    b:{
      display: 'flex',
    '& > *': {
      margin: theme.spacing(3.7),
    },
    },
    a:{
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  }));

 class Loginuii extends Component
  {
  constructor(props)
{
    super(props);
    this.state={
        u:'',
        pw:'',
        c:'',
        message:'',
       // name:"Aayushi"
      }
}
handleLogIn = () => {
    //  this.yoo();
    //  console.log(this.state.ema);
    //  this.yo();
    //  console.log(this.state.pw);
 const u=this.state.u
const pw=this.state.pw
// const c=this.state.c
const data={
    u,pw
       }
Axios.get('http://localhost:8080/examples/user.jsp',{params:data}).then(response=>{
  localStorage.setItem('user',this.state.u);
  console.log(response);
this.setState({
message:response.data.response
})
}).catch(err=>{
console.log("failed");
})
    if(this.state.u=='' || this.state.pw==''){
    toast("Null Fields");
  }
  // else if(this.state.c!='admin'&&this.state.c!='private'&&this.state.c!='school'&&this.state.c!='driver'){
  //   toast("Invalid Id")
  // }
};
handleChangeFields=(event)=>{
 this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
// handleFormSubmit(e) {
//   e.preventDefault()
//   localstorage.setItem('u',JSON.stringify(this.state.u));
// }
    render()
    {
        const {classes} = this.props
        // const {name} = this.props
        // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        // var localstorage=require('localStorage');
        return (
          <div>
            {this.state.message=='admin'?<Q1/>:this.state.message=='private'?<D/>:this.state.message=='school'?<Dashboard/>:this.state.message=='driver'?<A/>:(
          <Router  >
          <div>
          {/* <form onSubmit={this.handleFormSubmit}> */}
          {/* <D name="Aayushi"/> */}
          {/* <D name={this.state.u}/> */}
            {/* <B cat={this.props.c}/> */}
        {/* //  <category choice={this.state.c}/> */}
            <div>
  <Box color="text.primary" clone>
  <Container component="main" maxWidth="xs">
  {/* <CssBaseline /> */}
  <div className={classes.paper}>
  <center> <img src="c.png" width="160" height="150"/>
    <Typography component="h1" variant="h5">
      Sign In
    </Typography></center>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="u" label="Username" name="u" autoComplete="u" autoFocus onChange={this.handleChangeFields}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="pw" label="Password" type="password"  autoComplete="current-password"  onChange={this.handleChangeFields} /> 
{/* <TextField variant="outlined" margin="normal" required fullWidth name="c" label="private/school/driver" type="text" id="c" autoComplete="private/school/driver" onChange={this.handleChangeFields} />  */}

                  
<Button onClick={this.handleLogIn} fullWidth variant="contained" color="primary" className={classes.submit}>
<Link to="/Dashboard"></Link>
  LogIn </Button><ToastContainer />

                  <Grid container >
                    <Grid item xs>
                      <Link href="" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/SignUp" variant="body2" to="/SignUp">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
              
              </div>
</div>

               {/* <footer>
                 <div className={classes.b}>
                  <Avatar>
                    <FacebookIcon style={{ color: 'blue' }} className={classes.blue}/>
                  </Avatar>{' '}
                  <Avatar>
                  <TwitterIcon style={{ color: 'blue' }} className={classes.a}/>
                  </Avatar>
                  <Avatar>
                  <LinkedInIcon style={{ color: 'blue' }} className={classes.a}/>
                  </Avatar>
                  <Avatar>
                  <EmailIcon style={{ color: 'blue' }} className={classes.a}/>
                  </Avatar>
                  </div>
                  </footer> */}
               </Container>

              </Box>
                </div>   
               <Switch>
      <Route exact path='/Dashboard' component={D}></Route>
      <Route exact path='/admin' component={Q1}></Route>
      <Route eact path='/driverDashboard' component={A}></Route>
      <Route exact path='/Dashboard' component={E}></Route>
      {/* <Route exact path='/schoolDashboard' component={Dashboard}></Route> */}
      {/* <Redirect to="/PrivateDashboard"/> */}
                  </Switch>           
             {/* </form> */}
               </div> 
               </Router>
 
 )} 

</div> 
);}
}
export default withStyles(useStyles)(Loginuii);
