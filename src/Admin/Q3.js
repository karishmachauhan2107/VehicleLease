// Vehicle Information
import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Vdetails from './Vdetails'
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
    
  }));

  
 class Q3 extends Component
  {
  constructor()
{
    super();
    this.state={
        
        V_ID:'',
       st:false,
       kalu:[],
       age:'',
       k:[]
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
    // const V_ID=this.state.V_ID
    
    
    // const data={
    //     V_ID
    //        }
    // Axios.get('http://localhost:8080/examples/vinfo.jsp',{params:data}).then(response=>{
    //   console.log(response);
    //   this.setState({kalu: response.data.array})  

    
    //   console.log(response.data.array)
    // }).catch(err=>{
    // console.log("failed");
    // })
    return  window.location.href='/admin/VehicleInformation/search'; 
};
componentDidMount(){
  Axios.get('http://localhost:8080/examples/plans.jsp').then(response=>{
    this.setState({k: response.data.plans_data})  

    
    console.log(response.data.plans_data)
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
      Vehicle Information
    </Typography>


<div className={classes.form} noValidate>


<div className={classes.f}>
      <FormControl className={classes.formControl}>
        <InputLabel >Vehicle ID</InputLabel>
        <Select
        name='age'
          value={this.state.age}
          onChange={this.handleChangeFields.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.k.map((ag,key) => 
                    // <div key>
          <MenuItem value={ag.V_ID}>{ag.V_ID}</MenuItem>
        //  </div>
           )}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All Vehicle ID's are dispalyed here</FormHelperText>
      </FormControl>
      </div>

<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Search</Button> 
<ToastContainer/> 
<Router>
  <Switch>
  <Route  path='/admin/VehicleInformation/search' component={Vdetails}></Route>
    </Switch>
</Router>
    </div>  
</div>
</Container>

              {/* )} */}
              </Box>
              <footer><Copyright/></footer>
              {/* <Link to="/VehicleInformation"></Link> */}
          
              </div>              
              
        );
    }

}
export default withStyles(useStyles)(Q3);
