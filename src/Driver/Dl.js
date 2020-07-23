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
import Axios from 'axios'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { blue } from "@material-ui/core/colors";
import MaterialTable from 'material-table';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

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
      // marginTop: theme.spacing(8),
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
    fontSize: 10,
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
  createData(1010,1111 ),     
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),   
];  

 class Dl extends Component
  {
  constructor()
{
    super();
    this.state={
        sid:'',
        dt:'',
        st:false,
    kalu:[],
  }
}

componentDidMount(){
  Axios.get('http://localhost:8080/examples/list.jsp').then(response=>{
    this.setState({arr: response.data.School_data})  
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
          <React.Fragment >
         <center> <Avatar className={classes.avatar}>
               <ListAltOutlinedIcon/>
               </Avatar></center>
            <MaterialTable style={{marginLeft:'10px', marginRight:'0px', marginLeft:'0px', marginTop:'30px'}}
              title="ATTENDANCE"
              columns={[
                { title: 'Student_Id', field: 'sid' },
                { title: 'Date_and_Time', field: 'dt' },
                { title: 'Pick-Up Time', field: 'put' },
                { title: 'Drop-Off Time', field: 'dot' },
                ]}
                data={this.state.arr}
               
               options={{
                
                headerStyle: {
                backgroundColor: '#3f51b5',
                color: '#FFFF'
              }}
            }
            />
          </React.Fragment>
          </div>
        );
      }
    }
export default withStyles(useStyles)(Dl);    
