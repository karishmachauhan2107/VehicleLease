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
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Axios from 'axios';
import CreateIcon from '@material-ui/icons/Create';


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
    // ab:{
    //   alignItems:'centre',
    // },
  }));


 class Roja extends Component
  {
  constructor()
{
    super();
    this.state={
        t1:'',
        // school:'',
        t2:'',
        t3:'',
        t4:'',
        // address:'',
        
        t5:'',
        message:'',
t6:'',
        st:false,
        kalu:[]
    }
}
call=()=>{
  // toast(this.state.schoool);
  toast(this.state.student);
  toast(this.state.vehicle);
  toast(this.state.types);
  // toast(this.state.address);
  toast(this.state.contact);
  toast(this.state.email);

  
};

handleLogin = () =>  {

  
    // let a=parseInt(this.state.ema);
    // alert(a+"dsd");
    // let f=1;
    // for(let i=1;i<=a;i++)
    // {
    //   f=f*i;
    // }
    // this.setState({pass:f});
  this.call();
  
};

handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
    //console.log(this.state, "formField")
}
componentDidMount(){
  const u=localStorage.getItem('user')
  const data={
   u
  }
  Axios.get('http://localhost:8080/examples/s.jsp',{params:data}).then(response=>{
    this.setState({kalu: response.data.pinfo_data})  

    
    console.log(response.data.pinfo_data)
  }).catch(err => {
      console.log("Failed");
  })
}
sendData(ev){
  if(this.state.t1=='' || this.state.t2=='' || this.state.t3=='' || this.state.t4=='' || this.state.t5==''){
    toast("Null Fields");
  }
  else{
  const t1 =this.state.t1
  const t2=this.state.t2
  const t3=this.state.t3
  const t4=this.state.t4
  const t5=this.state.t5
  const t6=localStorage.getItem('user')

  const data={
    t1,t2,t3,t4,t5,t6
  }
  Axios.get('http://localhost:8080/examples/sedit.jsp',{params:data}).then(response=>{console.log(response);

      this.setState.state({
        message:response.data.response
      })
    }).catch(err=>
      {
        console.log("Failed");
      })
   
      toast(this.state.t1)
      toast(this.state.t2)
      toast(this.state.t3)
      toast(this.state.t4)
      toast(this.state.t5) }}
    
    render()
    {
        const {classes} = this.props
        return (
          
            <div >
              {/* {this.state.pass} */}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  {    this.state.kalu.map((ag,key) => 
                    <div key> 
  <center><Avatar className={classes.avatar}>
      <CreateIcon/>
      </Avatar></center>
   <center> <Typography component="h1" variant="h3">
     Edit
    </Typography></center>


<div className={classes.form} noValidate>

{/* <TextField variant="outlined" margin="normal" required fullWidth id="email" label="School Name" name="school" autoComplete="text" autoFocus onChange={this.handleChangeFields}/>  */}
                  {/* <label>Student</label> */}
      
                  <TextField variant="outlined" margin="normal" required fullWidth name="t1" label="Students"
                   label={ag.s} type="text" 
id="password" autoComplete="current-password"  onChange={this.handleChangeFields.bind(this)}
 value={this.state.t1} /> 

<TextField variant="outlined" margin="normal" required fullWidth name="t2" label={ag.v} type="text" 
id="password" autoComplete="current-password"  onChange={this.handleChangeFields.bind(this)}
 value={this.state.t2} /> 

 <TextField variant="outlined" margin="normal" required fullWidth name="t4" label={ag.c} type="text" 
id="password" autoComplete="current-password"  onChange={this.handleChangeFields.bind(this)}
 value={this.state.t4} /> 

<TextField variant="outlined" margin="normal" required fullWidth name="t5" label={ag.e} type="text" 
id="password" autoComplete="current-password"  onChange={this.handleChangeFields.bind(this)}
 value={this.state.t5} /> 
{/* <TextField variant="outlined" id="password" margin="normal" required fullWidth  label="Types" name="t3" type="text" value={ag.t} 
 onChange={this.handleChangeFields.bind(this)} value={this.state.t3}/> 

<TextField variant="outlined" margin="normal" required fullWidth  label="Contact" name="t4" value={ag.c} 
 onChange={this.handleChangeFields.bind(this)} value={this.state.t4}/> 
<TextField variant="outlined" margin="normal" required fullWidth  label="Email" name="t5" value={ag.e} 
 onChange={this.handleChangeFields.bind(this)} value={this.state.t5}/> */}

                  
<Button onClick={this.sendData.bind(this)} value="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Edit </Button><ToastContainer />
{/* <Button fullWidth variant="contained" color="primary" className={classes.submit}>Cancel </Button> */}

                  <Grid container >
                    <Grid item xs>
                      <Link href="" variant="body2">
                        {/* Forgot password? */}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {/* {"Don't have an account? Sign Up"} */}
                      </Link>
                    </Grid>
                  </Grid>
              
              </div>
              </div>
  )}
</div>
</Container>

              )}
              </div>             

        );
    }

}
export default withStyles(useStyles)(Roja);
