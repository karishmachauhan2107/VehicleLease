import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 0),
    },
  }));

  
 class Schoolreg extends Component
  {
  constructor()
{
    super();
    this.state={
        u:'',
        pw:'',
        sn:'',
        s:'',
        v:'',
        t:'',
        a:'',
        p:'',
        e:'',
        st:false,
        k:[]
    }
}
fun = () =>{
  toast(this.state.Name);
};
yeCall = () =>{
  toast(this.state.Students);
};
kalu =() =>{
  toast(this.state.Vehicles);
};
bhalu =() =>{
  toast(this.state.Types);
};
yoyo =() =>{
  toast(this.state.Address);
};
yoyoyo =() =>{
  toast(this.state.Contact);
};
yoyoyoyo =() =>{
  toast(this.state.Email);
};
handleBook = () =>  {
     this.fun();
     console.log(this.state.Name);
     this.yeCall();
     console.log(this.state.Students);
     this.kalu();
     console.log(this.state.Vehicles);
     this.bhalu();
     console.log(this.state.Types);
     this.yoyo();
     console.log(this.state.Address);
     this.yoyoyo();
     console.log(this.state.Contact);
     this.yoyoyoyo();
     console.log(this.state.Email);
};
sendData(ev){
  if(this.state.u=='' || this.state.pw=='' || this.state.sn=='' || this.state.s=='' || 
  this.state.v=='' || this.state.t=='' || this.state.a=='' || this.state.p=='' || this.state.e==''){
    toast("Null Fields")
  }
  else
{
  const u=this.state.u
  const pw=this.state.pw
  const sn=this.state.sn
  const s=this.state.s
  const v=this.state.v
  const t=this.state.t
  const a=this.state.a
  const p=this.state.p
  const e=this.state.e
  const data={
    u,pw,sn,s,v,t,a,p,e
  }
  Axios.get('http://localhost:8080/examples/sr.jsp',{params:data}).then(response=>{
    console.log(response);
    this.setState({
      message:response.data.response
    })
  }).catch(err=>{
    console.log("Failed");
  })
  toast(this.state.u)
  toast(this.state.pw)
  toast(this.state.sn)
  toast(this.state.s)
  toast(this.state.v)
  toast(this.state.t)
  toast(this.state.a)
  toast(this.state.p)
  toast(this.state.e)
}}
handleChangeFields=(event)=>{
  this.setState({a:event.target.value})
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
componentDidMount(){
  Axios.get('http://localhost:8080/examples/destination.jsp').then(response=>{
    this.setState({k: response.data.data})     
}).catch(err => {
    console.log("Failed");
})
}
    render()
    {
        const {classes} = this.props
        return (

            <div>
           <Box color="text.primary" clone>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center> <img src="c.png" width="160" height="150"/></center>
    <Typography component="h1" variant="h5">
      SCHOOL REGISTRATION
    </Typography>


<div className={classes.form} noValidate>
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
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={this.handleChangeFields.bind(this)}
                value={this.state.pw}
                name="pw"
                type="password"
                label="Password"
                autoFocus
              />
{/* <TextField variant="outlined" margin="normal" 
                value={this.state.c}
                required fullWidth name="c"  label="private/school/driver" type="text" id="c"
                 autoComplete="private/school/driver" onChange={this.handleChangeFields.bind(this)} />  */}
<TextField variant="outlined" margin="normal" required fullWidth label="Enter your School Name" name="sn" 
                value={this.state.sn}
                autoComplete="Name" autoFocus onChange={this.handleChangeFields.bind(this)}/> 
<TextField variant="outlined" 
                value={this.state.s}
                margin="normal" required fullWidth label="Enter Students Number" name="s" type="Number" autoComplete="Number" onChange={this.handleChangeFields.bind(this)} /> 
<TextField variant="outlined" margin="normal" required fullWidth label="No of Vehicles" 
                value={this.state.v}
                name="v" autoComplete="Email" autoFocus onChange={this.handleChangeFields.bind(this)}/> 
<TextField variant="outlined" 
                value={this.state.t}
                margin="normal" required fullWidth label="Types: AC/NON AC" name="t" autoFocus onChange={this.handleChangeFields.bind(this)}/>

<div className={classes.form} noValidate>
<FormControl className={classes.formControl}>
<InputLabel >Address</InputLabel>
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
        <FormHelperText>All places are dispalyed here</FormHelperText>
      </FormControl>
      </div>             


<TextField variant="outlined" margin="normal" required fullWidth 
                value={this.state.p}
                label="Contact" name="p" autoFocus onChange={this.handleChangeFields.bind(this)}/>
<TextField variant="outlined" margin="normal" 
                value={this.state.e}
                required fullWidth label="Email" name="e" autoFocus onChange={this.handleChangeFields.bind(this)}/>
<FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />

<Button onClick={this.sendData.bind(this)} fullWidth variant="contained" color="primary" className={classes.submit}>Book</Button><ToastContainer />
{/* <Button onClick={this.handleBook} fullWidth variant="contained" color="primary" className={classes.submit}>Cancel</Button><ToastContainer /> */}

              </div>
</div>
</Container>

              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Schoolreg);
