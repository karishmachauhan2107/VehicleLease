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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(10),
    minWidth: 420,
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
           a:'',
            kalu:[],
            b:false,
            k:[]
        };
    }
    handleChange = (event) => {
        // setAge(event.target.value);
        this.setState({a:event.target.value})
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
     };
      componentDidMount(){
        Axios.get('http://localhost:8080/examples/plans.jsp').then(response=>{
          this.setState({kalu: response.data.plans_data})  
}).catch(err => {
            console.log("Failed");
        })
    }
    sendData(ev){
    // this.setState({b:true})

        if(this.state.a==''){
          alert("Null Fields")
        }
        else{
    const a=this.state.a
    const data={
      a
    }
    Axios.get('http://localhost:8080/examples/Vrecord.jsp',{params:data}).then(response=>{
      console.log(response);
      this.setState({
        k:response.data.School_data
      })
    }).catch(err=>{
      console.log("Failed");
    })
    toast(this.state.a)
    this.setState({b:true})
  }
}
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
    <center><Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
          View student record
          </Typography></center>
      </div>
      <div>
                        <FormControl className={classes.formControl}>
        <InputLabel >Vehicle ID's</InputLabel>
        <Select
        name='a'
        value={this.state.a}
          onChange={this.handleChange.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
          <MenuItem value={ag.V_ID}>{ag.V_ID}</MenuItem>
       )}
        </Select>
        <FormHelperText>..............................................All vehicle ID's are dispalyed here..........................................</FormHelperText>

      </FormControl>
       </div>
       <div><ToastContainer></ToastContainer>
       <center> <Button className={classes.o} variant="contained" color="primary" fullWidth 
       onClick={this.sendData.bind(this)}  >
                    Show
                  </Button></center>
    </div>
    <div>
    {    this.state.k.map((ag,key) => 
<div key>
      {(this.state.b?(<div>
        <Card variant="outlined">
      <CardContent>
<label> Student Id : {ag.sid}</label>
</CardContent> 
</Card>
      </div>):(null))}
    </div>
    )}
    </div>
        </div>
      );
}}
export default withStyles(useStyles)(Sallot);