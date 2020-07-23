import React,{Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Vinfo from './Vinfo';
import Dinfo from './Dinfo';
import Sinfo from './Sinfo';
import Uinfo from './Uinfo';
import Pinfo from './Pinfo';
import Ainfo from './Ainfo';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 
import Container from '@material-ui/core/Container';

// import {  ExpansionPanel } from '@material-ui/core'

const useStyles = ((theme) => ({
  root: {
    width: '100%',
  },
  heading: { 
   
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}));

class S extends Component{
  render()
  {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
    <div className={classes.root}>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All about users will be displayed
          <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/admin/Summary/users'}>
                    Display</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Vehicles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All about vehicles will be displayed
            <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/admin/Summary/vehicles'}>
                    Display</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Private</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All private users will be displayed
          <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/admin/Summary/privateUsers'}>
                    Display
        </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>School</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All school users will be displayed
          <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/admin/Summary/schoolUsers'}>
                    Display
        </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Drivers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All about drivers will be displayed
            <Button variant="contained" color="primary" fullWidth onClick={event =>  window.location.href='/admin/Summary/driverUsers'}>
                    Display</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Allotment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All about vehicle allotment to drivers will be displayed
            <Button variant="contained" color="primary" fullWidth
             onClick={event =>  window.location.href='/admin/Summary/allotment'}>
                    Display</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Router>
      <Switch>
      <Route exact path='/admin/Summary/schoolUsers' component={Sinfo}></Route>
      <Route exact path='/admin/Summary/driverUsers' component={Dinfo}></Route>
      <Route exact path='/admin/Summary/vehicles' component={Vinfo}></Route>
      <Route exact path='/admin/Summary/users' component={Uinfo}></Route>
      <Route exact path='/admin/Summary/PrivateUsers' component={Pinfo}></Route>
      <Route exact path='/admin/Summary/allotment' component={Ainfo}></Route>
      </Switch>
    </Router>
    </div>
    </Container>
  );
}
}

export default withStyles(useStyles)(S);