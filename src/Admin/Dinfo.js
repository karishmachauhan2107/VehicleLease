// Driver details page
import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Axios from 'axios'

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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  a:{
    marginTop: theme.spacing(5),
  },
  b:{
    marginBottom: theme.spacing(50),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Sinfo extends Component{
  constructor(props){
    super(props);
      this.state={
        n:'',
        a:'',
        p:'',
        ad:'',
        st:false,
        kalu:[]
    };
  }
  h=()=>{
    // alert(this.state.n);
    console.log(this.state.n);
    // alert(this.state.a);
    // alert(this.state.p);
    // alert(this.state.ad);
    
    console.log(this.state.a);
    console.log(this.state.p);
    console.log(this.state.ad);
  };
  handleChangeFields=(event)=>{
    this.setState({
      ...this.state,
      [event.target.name]:event.target.value
    })
  }
  componentDidMount(){
    Axios.get('http://localhost:8080/examples/Dinfo.jsp').then(response=>{
      this.setState({kalu: response.data.Driver_data})  

      
      console.log(response.data.Driver_data)
    }).catch(err => {
        console.log("Failed");
    })
}
    render() {
  const {classes} = this.props;

  return (
    <div>
      {/* <center><Typography component="h1" variant="h5">
          Driver Users
        </Typography>
        </center>   {    this.state.kalu.map((ag,key) => 
                    <div key>
    <Container component="main" maxWidth="xs">
                        <CssBaseline />
      <div className={classes.paper}>
        <center><Avatar style={{ color: 'blue' }} className={classes.avatar}>
        {key}
        </Avatar>
        </center> 
        <form className={classes.form} noValidate>
        <Card variant="outlined" className={classes.a}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username : {ag.u}
        </Typography>
        <Typography variant="h5" component="h2">
          Name : {ag.n}
        </Typography>
        <Typography variant="h5" component="h2">
          Contact : {ag.c}
        </Typography><Typography variant="h5" component="h2">
          Email : {ag.e}
        </Typography>
        <Typography variant="h5" component="h2">
         Aadhar : {ag.a}
        </Typography>
        <Typography variant="h5" component="h2">
          License : {ag.l}
        </Typography>
        <Typography variant="h5" component="h2">
        Experience : {ag.exp}
        </Typography>
        </CardContent>
    </Card>

         
        </form>
        </div>
<Box mt={8}>
      </Box>
</Container>
</div>
)} */}
<div>
          <React.Fragment >
            <MaterialTable style={{marginLeft:'10px', marginRight:'10px', marginLeft:'10px', marginTop:'100px'}}
              title="DRIVER INFORMATION"
              columns={[
                { title: 'Username', field: 'u' },
                { title: 'Name', field: 'n' },
                { title: 'Contact', field: 'c' },
                { title: 'Email', field: 'e' },
                { title: 'Aadhar', field: 'a' },
                { title: 'License', field: 'l' },
                { title: 'Experience', field: 'exp' },
                ]}
                data={this.state.kalu}
               
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
  );
}}
export default withStyles(useStyles)(Sinfo);