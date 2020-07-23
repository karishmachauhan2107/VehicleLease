import React,{Component,useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar'
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import Axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { ToastContainer, toast } from 'react-toastify';
import PageviewIcon from '@material-ui/icons/Pageview';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

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
  
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
      // paddingBottom: theme.spacing(8),
    },
    root: {
      flexGrow: 1,
      display: 'flex',
      marginTop: theme.spacing(15),
    },
    submit:{
      marginTop: theme.spacing(15),
      marginLeft: theme.spacing(15),
        },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      // flexGrow: 1,
      flexDirection: 'column',
    maxWidth:"40%",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(8),
      marginTop: theme.spacing(14),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      // flexGrow: 1,
      alignItems:"center",
      paddingLeft: theme.spacing(8),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    a:{
        // width:'50%',
        // height:'50%',
      marginBottom: theme.spacing(8),
        flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
    b:{
    maxWidth:"40%",
    flexGrow: 2,
     width:'50%',
        height:'50%',
    },
    c:{
      display: 'flex',
      flexDirection: 'column',
    },
    d:{
      marginRight: theme.spacing(5),
    },
    e:{
      marginTop: theme.spacing(14),
    },
  }));
  class Plan extends Component{
    constructor(){
      super();
      this.state={
        kalu:[],
        v:'',
        u:'',
        // vi:'',
        message:'',
        k:[],
        t1:'',
        // t2:''
      };
    }
    componentDidMount(){
      Axios.get('http://localhost:8080/examples/pplans.jsp').then(response=>{
        this.setState({kalu: response.data.plans_data})  
        Axios.get('http://localhost:8080/examples/pplans.jsp').then(response=>{
          this.setState({k: response.data.plans_data}) 
        console.log(response.data.plans_data)
      }) }).catch(err => {
          console.log("Failed");
      })
   }
   fun=(ev)=>{
  //   this.setState({
  //     ...this.state,
  //     [event.target.name]: event.target.value
  // })
  // this.setState({t1:event.target.value})
      const t1=this.state.t1
      const data={
        t1
      }
      Axios.get('http://localhost:8080/examples/search.jsp',{params:data}).then(response=>{
        console.log(response);
        this.setState({
          kalu:response.data.plans_data
        })
      }).catch(err=>{
        console.log("Failed");
      })
   };
   a=(ev)=>{
     if(this.state.v==''){
      toast('Null Fields');
     }
     else{
    // {    this.state.kalu.map((ag,key) => 
    //   this.state.v=ag.V_ID
    // )}
      // this.state.u=localStorage.getItem('user')
      // console.log(this.state.u);
      console.log(this.state.v);
      // console.log(this.state.t2);
  //  console.log(ev.v);
  // console.log(ev);
      const u=localStorage.getItem('user')
      const v=this.state.v
      // const t2=this.state.t2
      const data={
        u,v
      }
      Axios.get('http://localhost:8080/examples/userplan.jsp',{params:data}).then(response=>{
        console.log(response);
        this.setState({
          message:response.data.response
        })
      }).catch(err=>{
        toast("Failed");
        toast("Already Booked")
      })
      toast(this.state.v);
      toast("Booked")
    };}
    handleChangeFields=(event)=>{
      this.setState({v:event.target.value})
      this.setState({
          ...this.state,
          [event.target.name]: event.target.value
      })
  }
      render() {
    const {classes} = this.props;
  
    return (
      <Router>
      <React.Fragment>
<div>
<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Plans
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here are shown some of the plans from which you can choose as per your requirement
            </Typography>
</div>

  
 {/* <div>
<PageviewIcon className={classes.c}/>
  <TextField
  variant="outlined" margin="normal" width="150"
            required
            label="Search here"
            fullWidth
            name="t1"
            // onChange={this.fun.bind(this)}
            />
 </div> */}
<div className={classes.root}>
<center><div>
<TextField variant="outlined" margin="normal" align="left" label="Search here" type="name"  name="t1" autoFocus 
 onChange={this.handleChangeFields.bind(this)}/> 
  </div>
  <Button onClick={this.fun.bind(this)} size="small" variant="contained" className={classes.submit} 
   color="primary" size="medium">Search</Button></center>
<Grid container spacing={1}>
        <Grid container item xs={12} spacing={1} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            
          { this.state.kalu.map((ag,key) => 
                    <div key>
    <Card variant="outlined" className={classes.Card}>
  <CardContent className={classes.cardContent}>

  <Typography gutterBottom variant="h5" component="h2">
                      Name : {ag.V_name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Type : {ag.V_type}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Vehicle ID : {ag.V_ID}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Model Number : {ag.V_mno}
                    </Typography>
                     <Typography gutterBottom variant="h5" component="h2">
                      Description : {ag.V_desc}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Price : {ag.V_price}
                    </Typography>
                    {/* <CardActions> */}
                    {/* </CardActions> */}
                  </CardContent>     
                </Card>
    
 </div>
    )}

          </Paper>
      
        </Grid>
        </Grid>
      </Grid>
      <div className={classes.e}><center>
    <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.e}>
              Enter details to book a vehicle
            </Typography>
            <div className={classes.form} noValidate>
<FormControl className={classes.formControl}>
<InputLabel >Vehicle ID</InputLabel>
        <Select
        name='v'
        value={this.state.v}
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
        <FormHelperText>All Vehicle ID's are dispalyed here</FormHelperText>
      </FormControl>
      </div>
   </center> 
                    <center><Button size="small" color="primary" variant="contained"
                    onClick={this.a.bind(this)}>
        <ToastContainer/>
                      Book
                    </Button></center>
    </div>
    </div>
</React.Fragment>
      </Router>
    );}}
    export default withStyles(useStyles)(Plan);
