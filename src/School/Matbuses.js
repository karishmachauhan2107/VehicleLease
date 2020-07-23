import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios'
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
// import { ToastContainer, toast } from 'react-toastify';
import { Callbacks } from 'jquery';
// import Buses from '../Buses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AirportShuttleTwoToneIcon from '@material-ui/icons/AirportShuttleTwoTone';


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
      width: '150%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      // Font:'400px',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Matbuses extends Component
  {
  constructor()
{
    super();
    this.state={
        buses:'',
        type:'',
        driver:'',
        st:false,
        kalu:[],
        u:''
    }
}
buses=()=>{
  toast(this.state.buses);
  toast(this.state.type);
  toast(this.state.driver);
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
    this.buses();
  
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
  Axios.get('http://localhost:8080/examples/rout.jsp',{params:data}).then(response=>{
    this.setState({kalu: response.data.School_data})  

    
    console.log(response.data.School_data)
  }).catch(err => {
      console.log("Failed");
  })
}

    render()
    {
        const {classes} = this.props
        return (

            <div>
              {/* {this.state.pass} */}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <Avatar className={classes.avatar}>

  <AirportShuttleTwoToneIcon/> 
  
</Avatar>   
<Typography component="h1" variant="h3">
     Buses
    </Typography>

    {    this.state.kalu.map((ag,key) => 
                    <div key>
<div className={classes.form} noValidate>
<Card variant="outlined">
      <CardContent>
<label > Total Buses : {ag.v}</label></CardContent> <br></br>
<CardContent><label>Types(AC or Non-AC) : {ag.t}</label></CardContent><br></br>
{/* <CardContent><label>Driver Name :</label></CardContent> */}
</Card>


                  {/* <Grid container>
                    <Grid item xs>
                      <Link href="" variant="body2">
                        {/* Forgot password? */}
                      {/* </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {/* {"Don't have an account? Sign Up"} */}
                      {/* </Link>
                    </Grid>
                  </Grid> */}
              
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
export default withStyles(useStyles)(Matbuses);
