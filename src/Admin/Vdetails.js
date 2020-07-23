// Vehicle Information
import React,{ Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    
  }));

  
 class Vdetails extends Component
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



// handleChangeFields=(event)=>{
//   this.setState({age:event.target.value})
//     this.setState({
//         ...this.state,
//         [event.target.name]: event.target.value
//     })
// }
// handleLogin=()=>{
//     if(this.state.V_ID==''){
//       toast("Vehicle ID is not entered");
//     }else{
//     toast(this.state.V_ID)
//     const V_ID=this.state.V_ID
    
    
//     const data={
//         V_ID
//            }
//     Axios.get('http://localhost:8080/examples/vinfo.jsp',{params:data}).then(response=>{
//       console.log(response);
//       this.setState({kalu: response.data.array})  

    
//       console.log(response.data.array)
//     }).catch(err=>{
//     console.log("failed");
//     })}
// };
// componentDidMount(){
//   Axios.get('http://localhost:8080/examples/plans.jsp').then(response=>{
//     this.setState({k: response.data.plans_data})  

    
//     console.log(response.data.plans_data)
//   }).catch(err => {
//       console.log("Failed");
//   })

// }

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


<div className={classes.form} noValidate> 

{/* {    this.state.kalu.map((ag) => 
                    <div> */}
<Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Vehicle Name:
          {/* {ag.V_ID} */}
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
         Vehicle Type:
         {/* {ag.V_type} */}
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Vehicle Id:
          {/* {ag.V_ID} */}
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Vehicle Model no:
          {/* {ag.V_mno} */}
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Vehicle number:
          {/* {ag.V_no} */}
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
          Vehicle Description:
          {/* {ag.V_desc} */}
        </Typography>
        
      </CardContent>
      </Card>
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="outlined" component="h8">
        Price:
        {/* {ag.V_price} */}
        </Typography>
        
      </CardContent>
     
    </Card>
    {/* </div>
// )}    */}
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
export default withStyles(useStyles)(Vdetails);
