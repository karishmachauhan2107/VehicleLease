// Edit page
import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

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

  
 class E extends Component
  {
  constructor()
{
    super();
    this.state={
        u:'',
        pw:'',
        p:'',
        a:'',
        t:'',
        l:'',
        // Date_Of_Birth:'',
        st:false,
        k:[],
        kalu:[]
    }
}
sendData(ev){
  if(this.state.u=='' || this.state.pw=='' || this.state.l=='' || this.state.p=='' || 
  this.state.a=='' || this.state.t==''){
    toast("Null Fields");
  }
  else{
  console.log(this.state.u);
  const u=this.state.u
  const pw=this.state.pw
  const p=this.state.p
  const a=this.state.a
  const l=this.state.l
  const t=this.state.t
  const data={
    u,pw,p,a,l,t
  }
  Axios.get('http://localhost:8080/examples/p.jsp',{params:data}).then(response=>{
    console.log(response);
    this.setState({
      message:response.data.response
    })
  }).catch(err=>{
    console.log("Failed");
  })
  toast(this.state.u)
  toast(this.state.pw)
  toast(this.state.p)
  toast(this.state.a)
  toast(this.state.l)
  toast(this.state.t)
}}

componentDidMount(){
    Axios.get('http://localhost:8080/examples/destination.jsp').then(response=>{
      this.setState({k: response.data.data})     
      Axios.get('http://localhost:8080/examples/jj.jsp').then(response=>{
        this.setState({kalu: response.data.School_data})     
  })}).catch(err => {
      console.log("Failed");
  })
}
handleChangeFields=(event)=>{
  this.setState({a:event.target.value})
  this.setState({l:event.target.value})
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}

    render()
    {
        const {classes} = this.props
        return (
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
  <center> <img src="c.png" width="160" height="150"/></center>
            <center>
            <Typography component="h1" variant="h5">
              Private Vehicle Booking
            </Typography></center>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={this.handleChangeFields.bind(this)}
                value={this.state.u}
                name="u"
                id="u"
                label="Username"
                autoFocus
              />
              <TextField
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={this.handleChangeFields.bind(this)}
                name="pw"
                id="pw"
                value={this.state.pw}
                label="Password"
                autoFocus
              />
{/* <TextField variant="outlined" margin="normal" required fullWidth name="pass" value={this.state.c} 
label="private/school/driver" type="text" id="c" autoComplete="private/school/driver" name="c"
 onChange={this.handleChangeFields} />  */}
               {/* <TextField variant="outlined" value={this.state.l} margin="normal" 
               onChange={this.handleChangeFields.bind(this)} required fullWidth id="l" label="Destination" 
               name="l" autoFocus/> */}
                   <TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter Date"
        type="date"
        name="p"
        value={this.state.p}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
      />  
              <div className={classes.form} noValidate>
<FormControl className={classes.formControl}>
<InputLabel >Pick-Up Point</InputLabel>
        <Select
        name='a'
        value={this.state.a}
        onChange={this.handleChangeFields.bind(this)}
        fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.k.map((ag,key) => 
                    // <div key>
          <MenuItem value={ag.d}>{ag.d}</MenuItem>
        //  </div>
           )}
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All pick-up points are dispalyed here</FormHelperText>
      </FormControl>
      </div>
      <div className={classes.form} noValidate>
<FormControl className={classes.formControl}>
<InputLabel >Destination</InputLabel>
        <Select
        name='l'
        value={this.state.l}
        onChange={this.handleChangeFields.bind(this)}
        fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
                    // <div key>
          <MenuItem value={ag.sn}>{ag.sn}</MenuItem>
        //  </div>
           )}
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All school names are dispalyed here</FormHelperText>
      </FormControl>
      </div>
                <TextField
        variant="outlined"
        margin="normal" required fullWidth 
        label="Enter Pick-Up time"
        type="time"
        name="t"
        value={this.state.t}
        // defaultValue="2020-05-24T10:30"
        onChange={this.handleChangeFields.bind(this)}
        InputLabelProps={{
          shrink: true,
        }}
      /> 
              <ToastContainer></ToastContainer>
              <center> <Button onClick={this.sendData.bind(this)} variant="contained" color="primary">
                        Done
                      </Button></center></form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
        );
    }

}
export default withStyles(useStyles)(E);
