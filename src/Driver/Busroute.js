//Bus Route

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
// import 'react-toastify/dist/ReactToastify.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MaterialTable from 'material-table';
import Axios from 'axios';


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
      width: '120%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

   

 class Busroute extends Component
  {
  constructor()
{
    super();
    this.state={
        arr:[],
        u:''
    }
}

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
  Axios.get('http://localhost:8080/examples/route.jsp',{params:data}).then(response=>{
    this.setState({arr: response.data.School_data})  

    
  
  }).catch(err => {
      console.log("Failed");
  })
}

    render()
    {
        const {classes} = this.props
        return(

            <div>
           <Box color="text.primary" clone>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xl">
  <CssBaseline />
  <div className={classes.paper}>
  {/* <center> <img src="C.png" width="160" height="150"/></center>
   */}
    <Avatar className={classes.avatar}>
      <LocationOnOutlinedIcon/>
      </Avatar>
    <Typography component="h1" variant="h5">
      ROUTE
    </Typography>


<div className={classes.form} noValidate>
        <React.Fragment >
        <MaterialTable style={{marginLeft:'10px', marginRight:'500px', marginLeft:'500px', marginTop:'20px'}}
          title="TABLE"
          columns={[
            { title: 'Student Id', field: 'sid' },
            { title: 'Stopage', field: 'stoppage' },
            { title: 'Pick-Up Time', field: 'dt' },
            { title: 'Drop-Off Time', field: 'dot' },
            ]} 
            data={this.state.arr}
           
           options={{
            
            headerStyle: {
            backgroundColor: '#3f51b5',
            color: '#FFFF'
          }}
        }
        />
       </React.Fragment>

  </div>
</div>
</Container>
              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Busroute);
