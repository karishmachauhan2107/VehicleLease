// DriverDetails
import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

  
 class Ddetails extends Component
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
//   this.setState({age:event.target.value})
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
// handleLogin=()=>{
    
//     toast(this.state.D_ID)
//     // alert(this.state.Date_of_Birth)
// }

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

<Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Driver Name:
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Driver Phone:
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
         Driver Address: 
        </Typography>
        
      </CardContent>
     
    </Card> 
</div>
</Container>

              {/* )} */}
              </Box>
              {/* <footer><Copyright/>
              </footer> */}
              {/* <Link to="/DriverDetails"></Link> */}
              </div>              
              
        );
    }

}
export default withStyles(useStyles)(Ddetails);
