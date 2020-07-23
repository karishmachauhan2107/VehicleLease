//Mark attendance

import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Dl from './Dl';
import Axios from 'axios';
import { render } from '@testing-library/react';
import KeyboardHideOutlinedIcon from '@material-ui/icons/KeyboardHideOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    a:{
  color:'white'
    },
  }));

 class Ma extends Component
  {
  constructor()
{
    super();
    this.state={
        // t1:'',
        // t2:'',
        sid:'',
        date_and_time:'',
        st:false,
         message:"",
         k:[],
         put:'',
         dot:''
    }
}
yo =() =>{
  toast("not submit");
};
yoo =() =>{
  toast("successful");
};
y =() =>{
    toast("welcome")
}

handleSubmit = () => 
     {
    if(this.state.t1=='' && this.state.t2=='')  
    {
     this.yo();
    //  this.setState({st:true})
    }
    else{
      this.yoo();
    console.log("not submit");
    }
}
handlePress =() =>
{
 this.y();   
}

handleChangeFields=(event)=>{
    this.setState({sid:event.target.value})
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
componentDidMount(){
    Axios.get('http://localhost:8080/examples/studentid.jsp').then(response=>{
      this.setState({k: response.data.Driver_data})  
    //   console.log(response.data.Driver_data)
  }).catch(err => {
        console.log("Failed");
    })
}
sendData(ev){
  if(this.state.sid=='' && this.state.date_and_time=='' && this.state.put=='' && this.state.dot==''){
    toast("Null Fields")
  }
  else{
    toast(this.state.sid)
toast(this.state.date_and_time)
toast("Successful")
    const sid=this.state.sid
    const date_and_time=this.state.date_and_time
    const put=this.state.put
    const dot=this.state.dot
    const data={
        sid,date_and_time,put,dot
    }
     Axios.get('http://localhost:8080/examples/attendance.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({
            message:response.data.response  
        })
    }).catch(err=>{
        console.log("Failed");
    })
    } }
    render()
    {
        const {classes} = this.props   
        return (
          
           <Router>
            <div>
            {/* <A/> */}
             {this.state.st?(<div><a href="/drverDashboard/Dl" to ="/driverDashboard/Dl">view Table</a></div>):(
               <Box color="text.primary" clone>
                
                 <Container component="main" maxWidth="xs">
                 <CssBaseline />
            <div className={classes.paper}>
               {/* <center> <img src="logo.png" width="160" height="150"/></center> */}
        <Avatar className={classes.avatar}>
               <KeyboardHideOutlinedIcon />
                 </Avatar>
              <Typography component="h1" variant="h5">
                Attendance Board
               </Typography>


<div className={classes.form} noValidate>
 

<FormControl className={classes.formControl}>
        <InputLabel className={classes.f}>Student ID</InputLabel>
        <Select
        name='sid'
          value={this.state.sid}
          onChange={this.handleChangeFields.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.k.map((ag,key) => 
                    // {/* // <div key> */}
          <MenuItem value={ag.sid}>{ag.sid}</MenuItem>
        // </div> 
           )}
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All Student ID's are dispalyed here</FormHelperText>
      </FormControl>

 <TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter Date"
        type="date"
        name="date_and_time"
        value={this.state.date_and_time}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
      />        
            <TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter pick-up time"
        type="time"
        name="put"
        value={this.state.put}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
      />   
       <TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter Drop-off time"
        type="time"
        name="dot"
        value={this.state.dot}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
      />         
<Button onClick={this.sendData.bind(this)} 
        fullWidth variant="contained" 
        color="primary" 
        // STYLE="color:black"
        className={classes.submit}>SUBMIT</Button><ToastContainer />

{/* <Button 
      onClick={this.handlePress} 
      fullWidth variant="contained" 
      color="primary" 
      
      className={classes.submit}>
      <Link to="/driverDashboard/Dl">
     <a href="/driverDashboard/Dl" className={classes.a}>List</a>
      </Link>
      </Button> */}

      {/* <Grid justify="center">
              <Switch>
              <Route exact path='/Dl' component={Dl}></Route> 
              </Switch>
              
      </Grid> */}

   {this.state.message}  
              </div>
              
           </div>
        </Container>
      </Box>
            )}
</div>    
</Router>        
      );
    }
}
export default withStyles(useStyles)(Ma);
