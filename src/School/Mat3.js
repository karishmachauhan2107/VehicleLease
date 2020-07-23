import React,{Component} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { ToastContainer } from 'react-toastify';
import Axios from 'axios';


const useStyles = ((theme) => ({
    root: {
      flexGrow: 1,
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
   
      }));
 



 class Mat3 extends Component{
   constructor(){
     super();
     this.state={
       value:2,
       hover:-1
     };
   }
   v = () => {
    this.setState({value:2})
  };
  h = () => {
    this.setState({hover:-1})
  };
  handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
    //console.log(this.state, "formField")
}
sendData(ev){
  const t1 =this.state.t1
  // const t2=this.state.t2
  // const t3=this.state.t3
  // const t4=this.state.t4
  // const t5=this.state.t5

  const data={
    t1
  }
  Axios.get('http://localhost:8080/examples/Feedback.jsp',{params:data}).then(response=>{console.log(response);

      this.setState.state({
        message:response.data.response
      })
    }).catch(err=>
      {
        console.log("Failed");
      })
    }
    
  
   render() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(2);
  // const [hover, setHover] = React.useState(-1);
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  return (
      <div>
    {/* <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h5" color="inherit" align="right">
           Feedback
          </Typography>
        </Toolbar>
      </AppBar>
    </div> */}
    <center >
    <div className={classes.root} STYLE="height:150px;width:300px">
    <Rating 
      name="hover-feedback"
      value={this.v}
      precision={0.5}
      onChange={(event, newValue) => {
        this.v(newValue);
      }}
      onChangeActive={(event, newHover) => {
        this.h(newHover);
      }}
   />
    {this.value !== null && <Box ml={2}>{labels[this.hover !== -1 ? this.hover : this.value]}</Box>}
  </div>
  <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="write your feedback" name="t1" onChange={this.handleChangeFields.bind(this)} value={this.state.t1} />;<br></br>
  <Button onClick={this.sendData.bind(this)} value="submit" variant="contained" color="primary">
        Submit Feedback
      </Button><ToastContainer/></center>
  </div>
  );
}}
export default withStyles(useStyles)(Mat3);
