import React,{Component} from 'react';
import { makeStyles,withStyles,useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(10),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  f:{
    width:'100%',
    marginBottom: theme.spacing(200),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
o:{
    marginTop: theme.spacing(200),
},
}));

class Sallot extends Component{
    constructor(props){
        super();
        this.state={
            age:'',
           a:'',
            kalu:[],
            k:[]
        };
    }
    handleChange = (event) => {
        // setAge(event.target.value);
        this.setState({age:event.target.value})
        this.setState({a:event.target.value})
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
     };
      componentDidMount(){
        Axios.get('http://localhost:8080/examples/studentid.jsp').then(response=>{
          this.setState({kalu: response.data.Driver_data})  
          Axios.get('http://localhost:8080/examples/plans.jsp').then(response=>{
            this.setState({k: response.data.plans_data})  
          
          console.log(response.data.Driver_data)
      })}).catch(err => {
            console.log("Failed");
        })
    }
    sendData(ev){
        if(this.state.age=='' && this.state.a==''){
          alert("Null Fields")
        }
        else{
          const age=this.state.age
    const a=this.state.a
    const data={
      a,age
    }
    Axios.get('http://localhost:8080/examples/st.jsp',{params:data}).then(response=>{
      console.log(response);
      this.setState({
        message:response.data.response
      })
    }).catch(err=>{
      console.log("Failed");
    })
    toast(this.state.age)
    toast(this.state.a)
  }}
// fun=(event)=>{
//    this.setState({
//        ...this.state,
//        [event.target.name]: event.target.value
//    })
// }
    render() {
  const {classes} = this.props;
//   const [age, setAge] = React.useState('');

  

  return (
      <div>
    <div className={classes.f}>
    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Allotment of Vehicle to students
          </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel >Vehicle ID</InputLabel>
        <Select
        name='age'
          value={this.state.age}
          onChange={this.handleChange.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.k.map((ag,key) => 
          <MenuItem value={ag.V_ID}>{ag.V_ID}</MenuItem>
           )}
          {/* <MenuItem value={10}>hello</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All Vehicle ID's are dispalyed here</FormHelperText>
      </FormControl>
      </div>
      <div>
                        <FormControl className={classes.formControl}>
        <InputLabel >Student ID's</InputLabel>
        <Select
        name='a'
        value={this.state.a}
          onChange={this.handleChange.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
                    // <div key>
          <MenuItem value={ag.sid}>{ag.sid}</MenuItem>
          // </div>
       )}
        {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>All student ID's are dispalyed here</FormHelperText>
      </FormControl>
       </div>
       <div><ToastContainer></ToastContainer>
       <center> <Button className={classes.o} variant="contained" color="primary" fullWidth onClick={this.sendData.bind(this)}  >
                    Add
                  </Button></center>
       {/* <div align="center">
          <Button  
            color="primary" 
            variant="contained"
            onClick={this.sendData.bind(this)}
             >
            Add
          </Button>
    </div> */}
    </div>
        </div>
      );
}}
export default withStyles(useStyles)(Sallot);