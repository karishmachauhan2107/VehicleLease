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
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


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
  }));

 class Roja extends Component
  {
  constructor()
{
    super();
    this.state={
        t1:'',
        t2:'',
        message:'',
        st:false,
        k:[],
        age:'',
        t3:'',
        kalu:[]
    }
}

handleLogin = () =>  {
  this.call();
  
}

handleChangeFields=(event)=>{
  this.setState({age:event.target.value})
  this.setState({t2:event.target.value})
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
    //console.log(this.state, "formField")
}
sendData(ev){
  if(this.state.age=='' && this.state.t1=='' && this.state.t2==''){
    alert("Null Fields")
  }
  else{
  const age=this.state.age
  const t1 =this.state.t1
  const t2=this.state.t2
  const t3=this.state.t3

  const data={
    age,t1,t2,t3
  }
  Axios.get('http://localhost:8080/examples/st1.jsp',{params:data}).then(response=>{console.log(response);

      this.setState.state({
        message:response.data.response
      })
    }).catch(err=>
      {
        console.log("Failed");
      })
      toast(this.state.age)
      toast(this.state.t1)
      toast(this.state.t2)
      toast(this.state.t3)
      toast('Successful')
    }}
    componentDidMount(){
      Axios.get('http://localhost:8080/examples/destination.jsp').then(response=>{
      this.setState({kalu: response.data.data})   
        Axios.get('http://localhost:8080/examples/plans.jsp').then(response=>{
          this.setState({k: response.data.plans_data})     
        console.log(response.data.Driver_data)
    })
  }).catch(err => {
          console.log("Failed");
      })
  }



    render()
    {
        const {classes} = this.props
        return (

            <div>
              {this.state.pass}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LocationOnOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Routes
    </Typography>

<div className={classes.form} noValidate>
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
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>.........All Vehicle ID's are dispalyed here..........</FormHelperText>
      </FormControl>
      </div>
      <div>
           

      <div className={classes.form} noValidate>
<FormControl className={classes.formControl}>
<InputLabel >Stoppage</InputLabel>
        <Select
        name='t1'
        value={this.state.t1}
        onChange={this.handleChangeFields.bind(this)}
        fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
                    // <div key>
          <MenuItem value={ag.d}>{ag.d}</MenuItem>
        //  </div>
           )}
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>........All pick-up points are dispalyed here........</FormHelperText>
      </FormControl>
      </div>
                  
<TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter Pick-up Time"
        type="time"
        name="t2"
        value={this.state.t2}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
      />         
<TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter Drop-off Time"
        type="time"
        name="t3"
        value={this.state.t3}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
    /> 
    <ToastContainer>
    </ToastContainer> 


<Button onClick={this.sendData.bind(this)} value="submit"  fullWidth variant="contained" color="primary" className={classes.submit}>Done </Button>

              </div>
</div>
</Container>

              )}
              </div>              

        );
    }

}
export default withStyles(useStyles)(Roja);
