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
import BarChartTwoToneIcon from '@material-ui/icons/BarChartTwoTone';
import MenuItem from '@material-ui/core/MenuItem';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Att_table from './Att_table';
import { BrowserRouter as Router, Route,Switch ,Redirect} from 'react-router-dom'; 



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

   const useStyless = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(serial_number, stopage, time) {
  return { serial_number , stopage, time };
}

const rows = [
  createData(1, 'Sadar', '7 a.m.' ),
  createData(2, 'Rajamandi', '7:30 a.m.'),
  createData(3, 'Cantt', '8 a.m.'),
];

 class Sl extends Component
  {
  constructor()
{
    super();
    this.state={
        student_id:'',
        phn_no:'',
        // students:'',
        st:false,
        k:[]
    }
}

handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
    render()
    {
        const {classes} = this.props
        return(

            <div>
           <Box color="text.primary" clone>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <Avatar className={classes.avatar}>
      <BarChartTwoToneIcon/>
      </Avatar>
          <Typography component="h1" variant="h5">
      STUDENTS ATTENDANCE
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="student_id" label="Date" name="student name" autoComplete="Cust_id" autoFocus onChange={this.handleChangeFields}/> 
<FormControl className={classes.formControl}>
<InputLabel >Vehicle ID</InputLabel>
        <Select
        name='age'
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {    this.state.k.map((ag,key) => 
                    <div key>
          <MenuItem value={10}>{ag.V_ID}</MenuItem>
         </div>
           )} */}
          <MenuItem value={10}>hello</MenuItem>
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All Vehicle ID's are dispalyed here</FormHelperText>
      </FormControl>
      </div>
      <div>               
      <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/schoolDashboard/Att_table'}>
                    Display</Button>
          <Router>
            <Switch>
            <Route exact path='/schoolDashboard/Att_table' component={Att_table}></Route>

            </Switch>
          </Router>

{/* <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
           <TableCell>Student name</TableCell>
            <TableCell align="right">  Date</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Stopage}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  */}
  </div>
</div>
</Container>
              )}</Box>
              </div>              

        );
    }

}
export default withStyles(useStyles)(Sl);

