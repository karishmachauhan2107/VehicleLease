// DriverDetails
import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Ddetails from './Ddetails'
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import Axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function Copyright() {
    return (
      <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          VehicleLease
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography></div>
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
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  }));

  
 class Q extends Component
  {
  constructor()
{
    super();
    this.state={
        l:'',
        p:'',
        d:'',
        a:'',
        D_ID:'',
        t:'',
       age:'',
        // Date_Of_Birth:'',
        st:false,
        kalu:[]
    }
}



handleChangeFields=(event)=>{
  this.setState({age:event.target.value})
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
handleLogin=()=>{
    
    toast(this.state.age)
    // return <Redirect to='/admin/DriverDetails/show'/>
    return  window.location.href='/admin/DriverDetails/show';
    // alert(this.state.Date_of_Birth)
}

componentDidMount(){
  Axios.get('http://localhost:8080/examples/Dinfo.jsp').then(response=>{
    this.setState({kalu: response.data.Driver_data})  

    
    console.log(response.data.Driver_data)
  }).catch(err => {
      console.log("Failed");
  })
}
    render()
    {
        const {classes} = this.props;
        return (

            <div>
           <Box color="text.primary" clone>
                {/* {this.state.st?(<div> Welcome</div>):( */}
  <Container component="main" maxWidth="xl">
  <CssBaseline />
  <div className={classes.paper}>
  {/* <center> <img src="Picture1.png" width="160" height="150"/></center> */}
  <Avatar className={classes.avatar}>
 <EditIcon />
                    </Avatar>
    <Typography component="h1" variant="h5">
      Driver Information
    </Typography>


<div className={classes.form} noValidate>


<div className={classes.f}>
      <FormControl className={classes.formControl}>
        <InputLabel >Driver Username</InputLabel>
        <Select
        name='age'
          value={this.state.age}
          onChange={this.handleChangeFields.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
                    // <div key>
          <MenuItem value={ag.n}>{ag.n}</MenuItem>
        //  </div>
           )}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All Driver's username are dispalyed here</FormHelperText>
      </FormControl>
      </div>

<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Search</Button> 
<ToastContainer/> 
<Router>
  <Switch>
  <Route path='/admin/DriverDetails/show' component={Ddetails}></Route>
    </Switch>
</Router>
              </div>
</div>
</Container>

              {/* // )} */}
              </Box>
              <footer><Copyright/></footer>
              {/* <Link to="/DriverDetails"></Link> */}
              </div>              
              
        );
    }

}
export default withStyles(useStyles)(Q);
