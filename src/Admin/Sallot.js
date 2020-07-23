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
    margin: theme.spacing(10),
    minWidth: 720,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  f:{
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
        Axios.get('http://localhost:8080/examples/Dinfo.jsp').then(response=>{
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
      age,a
    }
    Axios.get('http://localhost:8080/examples/allot.jsp',{params:data}).then(response=>{
      console.log(response);
      this.setState({
        message:response.data.response
      })
    }).catch(err=>{
      console.log("Failed");
    })
    toast(this.state.age)
    toast(this.state.a)
    toast("Successful")
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
    <div >
    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Allotment of Vehicle to Drivers
          </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.f}>Vehicle ID</InputLabel>
        <Select
        name='age'
          value={this.state.age}
          onChange={this.handleChange.bind(this)}
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
        <FormHelperText>..........All Vehicle ID's are dispalyed here..........</FormHelperText>
      </FormControl>
      </div>
      <div>
                        <FormControl className={classes.formControl}>
        <InputLabel >Driver Username</InputLabel>
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
          <MenuItem value={ag.u}>{ag.u}</MenuItem>
          // </div>
       )}
        {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>.....All Driver usernames are dispalyed here.......</FormHelperText>
      </FormControl>
       </div>
       <div>
       <center> <Button className={classes.o} variant="contained" color="primary" fullWidth onClick={this.sendData.bind(this)}  >
                    Add
                  </Button></center><ToastContainer/>
       </div>
        </div>
      );
}}
export default withStyles(useStyles)(Sallot);