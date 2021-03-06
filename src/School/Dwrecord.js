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
import MaterialTable from 'material-table';
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
        Axios.get('http://localhost:8080/examples/date.jsp').then(response=>{
          this.setState({kalu: response.data.Driver_data})  
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
    Axios.get('http://localhost:8080/examples/Dwrecord.jsp',{params:data}).then(response=>{
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
   <center> <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
          View datewise record
          </Typography></center>
      </div>
      <div>
                        <FormControl className={classes.formControl}>
        <InputLabel >Date</InputLabel>
        <Select
        name='a'
        value={this.state.a}
          onChange={this.handleChange.bind(this)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {    this.state.kalu.map((ag,key) => 
          <MenuItem value={ag.d}>{ag.d}</MenuItem>
       )}
        </Select>
        <FormHelperText>.................................................All Dates are dispalyed here.............................................</FormHelperText>

      </FormControl>
       </div>
       <div><ToastContainer></ToastContainer>
       <center> <Button className={classes.o} variant="contained" color="primary" fullWidth onClick={this.sendData.bind(this)}  >
                    Show
                  </Button></center>
    </div>
    <div>
    {    this.state.k.map((ag,key) => 
<div key>
      {(this.state.b?(<div>
        <React.Fragment >
            <MaterialTable style={{marginLeft:'10px', marginRight:'0px', marginLeft:'0px', marginTop:'30px'}}
              title="Datewise Record"
              columns={[
                { title: 'Student_Id', field: 'sid' },
                { title: 'Vehicle ID', field: 'vid' },
                { title: 'Stoppage', field: 'stopage' },
                { title: 'Pick-Up Time', field: 'put' },
                { title: 'Drop-Off Time', field: 'dot' },
                ]}
                data={this.state.k}
               
               options={{
                
                headerStyle: {
                backgroundColor: '#3f51b5',
                color: '#FFFF'
              }}
            }
            />
          </React.Fragment>
      </div>):(null))}
    </div>
    )}
    </div>
        </div>
      );
}}
export default withStyles(useStyles)(Sallot);