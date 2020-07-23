// Add vehicle
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import Axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        VehicleLease
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
  a:{
    alignItems:"center",
    paddingTop:theme.spacing(3)
  },
}));

class V extends Component{
      constructor(){
        super();
        this.state={
          // pic:"",
          V_name:"",
          V_type:"",
          V_ID:"",
          V_mno:"",
          V_no:"",
          V_desc:"",
          V_price:"",
          message:"", 
          k:[]
        }
      }
     fun=(event)=>{
       this.setState({V_type:event.target.value})
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    componentDidMount(){
      Axios.get('http://localhost:8080/examples/types.jsp').then(response=>{
        this.setState({k: response.data.data})  
      //   console.log(response.data.Driver_data)
    }).catch(err => {
          console.log("Failed");
      })
  }
    sendData(ev){
      if(this.state.V_name==''){
        alert("Null Fields")
      }
      else{
        // const pic=this.state.pic
        const V_name=this.state.V_name
        const V_type=this.state.V_type
        const V_mno=this.state.V_mno
        const V_desc=this.state.V_desc
        const V_price=this.state.V_price
        const data={
          V_name,V_type,V_mno,V_desc,V_price
        }
        Axios.get('http://localhost:8080/examples/addvehicle.jsp',{params:data}).then(response=>{
          console.log(response);
          this.setState({
            message:response.data.response
          })
        }).catch(err=>{
          console.log("Failed");
        })
        // toast(this.state.pic)
        toast(this.state.V_name)
        toast(this.state.V_type)
        toast(this.state.V_mno)
        toast(this.state.V_desc)
        toast(this.state.V_price)
      }}
     

    

    render() {
  const {classes} = this.props

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <center><Avatar className={classes.avatar}>
          <PermScanWifiIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           Add Vehicle 
        </Typography></center>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="V_name"
            value={this.state.V_name}
            label="Name"
            id="V_name"
            autoComplete="Name"
            onChange={this.fun.bind(this)}
          />
          <div>
          <FormControl className={classes.formControl}>
        <InputLabel className={classes.f} 
            required
            fullWidth 
            >Types</InputLabel>
        <Select
        name='V_type'
          value={this.state.V_type}
          onChange={this.fun.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.k.map((ag,key) => 
                    // {/* // <div key> */}
          <MenuItem value={ag.t}>{ag.t}</MenuItem>
        // </div> 
           )}
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>.........................All vehicle types are dispalyed here........................</FormHelperText>
      </FormControl>
       </div>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            value={this.state.V_ID}
            fullWidth
            name="V_ID"
            label="Vehicle Id"
            // id="i"
            autoComplete="Id"
            onChange={this.fun.bind(this)}
          /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="V_mno"
            label="Model Number"
            value={this.state.V_mno}
            // id="m"
            autoComplete="Model Number"
            onChange={this.fun.bind(this)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={this.state.V_desc}
            fullWidth
            name="V_desc"
            label="Description"
            // id="d"
            autoComplete="Description"
            onChange={this.fun.bind(this)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={this.state.V_price}
            required
            fullWidth
            name="V_price"
            label="Monthly Rent"
            // id="p"
            autoComplete="Price"
            onChange={this.fun.bind(this)}
          /><ToastContainer/>
          <center> <Button variant="contained" onClick={this.sendData.bind(this)} color="primary" >
                    Add
                  </Button></center>
        </form>
        {this.state.message}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Link to="/AddVehicle"></Link>
    </Container>
  );
}}
export default withStyles(useStyles)(V);