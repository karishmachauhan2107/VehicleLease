//attendance Table
import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { blue } from "@material-ui/core/colors";
import Axios from 'axios';
import PropTypes from 'prop-types'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
// import A from './A';

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
    form: {
      width: '150%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 0),
    },
  }));

  const useStyless = makeStyles({
  table: {
    minWidth: 400,
  },
});

  const StyledTableCell = withStyles((theme) => ({
  head:
    {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.white,
  },
  body: {
    fontSize: 18,
  },
    }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Student_Id,Date_and_Time) {
  return { Student_Id,Date_and_Time};
}

const rows = [
  // createData('1010',1111 ),     
  // createData('1011',1112),
  // createData('1012',1113),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),   
];  

 class Dl extends Component
  {
  constructor()
{
    super();
    this.state={
        // t1:'',
        // t2:'',
        st:false,
        kalu:[]
    }
}

 componentDidMount(){
        Axios.get('http://localhost:8080/examples/jj.jsp').then(response=>{
          this.setState({kalu: response.data.School_data})  

          
          console.log(response.data.School_data)
        }).catch(err => {
            console.log("Failed");
        })

    }


handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
    render()
    {
        const {classes} = this.props ;  
        return (

            <div>
             {/* {this.state.st?(<div><a href="/Ma" to ="/Ma">view Table</a></div>):( */}
              {/* <A/> */}
               <Box color="text.primary" clone>
                
                 <Container component="main" maxWidth="xs">
                 <CssBaseline />
            <div className={classes.paper}>
               {/* <center> <img src="logo.png" width="160" height="150"/></center> */}
              <Avatar className={classes.avatar}>
               <ListAltOutlinedIcon/>
               </Avatar>
              <Typography component="h1" variant="h5">
                Routes
               </Typography>


<div className={classes.form} noValidate>


<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Stoppage</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         <div>
           {this.state.kalu.map((ag,key) => 
                    <div key>
          {/* {rows.map((row) => ( */}
            <StyledTableRow key={ag.Student_Id}>
              <StyledTableCell align="right">{ag.Student_Id}</StyledTableCell>
              <StyledTableCell align="right">{ag.Date_and_Time}</StyledTableCell>
            </StyledTableRow>
          {/* ))} */}
          </div>
           )}
          </div>
        </TableBody>
      </Table>
    </TableContainer>
 
{/* <Button 
      onClick={()=>this.props.history.goBack()} 
      fullWidth variant="contained" 
      color="primary" 
      className={classes.submit}>
    
       Back

      </Button>           
       */}
              </div>
           </div>
        </Container>
      </Box>
            )
</div>              
      );
    }
}
export default withStyles(useStyles)(Dl);    
