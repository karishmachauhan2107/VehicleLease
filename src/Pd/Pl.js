import React, { Component } from 'react';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{BrowserRouter as Router,
    Switch,Route} from "react-router-dom";
    // import Login from './Login';
    // import About from './About';
    // import Home from '/Home'; 
    import HomeIcon from "@material-ui/icons/Home";
    import Axios from 'axios';
    import Link from '@material-ui/core/Link';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import Box from '@material-ui/core/Box';
    import Container from '@material-ui/core/Container';
    import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
  
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tradeit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = ((theme) => ({
  root: {
    //marginTop: 0,
    flexGrow: 1,
    
  },
  media: {
    height: 200,
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // marginTop: 0,
    padding: 5,
  },
  head: {
    //height:60,
    // backgroundColor: "whitesmoke",
    // backgroundBorder: "black",
    //  backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    marginTop: -70,
    // maarginLeft:-100
  },
}));

class Home1 extends Component 
{
  constructor()
    {
        super();
        this.state={
          kalu:[]
        };
    }
    componentDidMount(){
        Axios.get('http://localhost:8080/examples/plans.jsp').then(response=>{
          this.setState({kalu: response.data.plans_data})  
          
        }).catch(err => {
            console.log("Failed");
        })

    }
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.head}>
        <Toolbar>
            
          <div className={classes.title}>
          <Button a href="/"  color="inherit" > Product Added By You</Button>
                   
    </div>
         
        </Toolbar>
      </AppBar>
    
               {    this.state.kalu.map((ag)  => 



  <div key >
                                   
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
<form className={classes.form} noValidate>
                         

<Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image={ag.image}
      
        /> */}
        
        <CardContent>
          <Typography gutterBottom variant="h8" component="h2">
            Name :{ag.V_name}
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
            Category :{ag.V_type}
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
            SubCategory :{ag.V_ID}
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
          Product Description :{ag.V_mno}
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
          Stock :{ag.V_no}
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
          Price :{ag.V_desc}
          </Typography>          <Typography gutterBottom variant="h8" component="h2">
          Price :{ag.V_price}
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
    <center> <Button variant="contained" color="default">
                    <a href="/plans" className={classes.a}>ADD TO CART</a>
                  </Button></center>
  </form>
  </div>
  <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>

                    )
                }
        

    </div>
  );
}
}
export default withStyles(useStyles)(Home1);