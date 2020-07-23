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
import { pink,deepOrange} from '@material-ui/core/colors';

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
    // backgroundColor: theme.palette.secondary.main,
    // color: '#f50057',
    // color: theme.palette.getContrastText(pink[500]),
    // backgroundColor: pink[500], 
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],},
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
        kalu:[],
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
    Axios.get('http://localhost:8080/examples/uinfo.jsp').then(response=>{
      this.setState({kalu: response.data.uinfo_data})  

      
      console.log(response.data.uinfo_data)
    }).catch(err => {
        console.log("Failed");
    })
}
    render() {
  const {classes} = this.props;

  return (
    <div>
      {/* <center><Typography component="h1" variant="h5">
          Users
        </Typography>
        </center>   {    this.state.kalu.map((ag,key) => 
                    <div key>
    <Container component="main" maxWidth="xs">
                        <CssBaseline />
      <div className={classes.paper}>
        <center><Avatar style={{ color: 'Blue' }} className={classes.avatar}>
          {/* <AirlineSeatReclineNormalIcon /> */}
        {/* {key }
        </Avatar>
        </center> 
        <form className={classes.form} noValidate>
        <Card variant="outlined" className={classes.a}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username : {ag.u}
        </Typography>
        <Typography variant="h5" component="h2">
        Password : {ag.pw}
        </Typography>
        <Typography variant="h5" component="h2">
          Category : {ag.c}
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
              title="USER INFORMATION"
              columns={[
                { title: 'Username', field: 'u' },
                { title: 'Password', field: 'pw' },
                { title: 'Category', field: 'c' },
                // { title: 'Vehicle model Number', field: 'V_mno' },
                // { title: 'Vehicle description', field: 'V_desc' },
                // { title: 'Vehicle price', field: 'V_price' },
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