// Welcome page
import React,{Component,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles,makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
class Q2 extends Component{
    render() {
//   const {classes} = this.props;

  return (<div>
  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to the dashboard of Admin
            </Typography>
            <Link to="/Dashboard"></Link>
            </div>
  );}}
  export default withStyles(useStyles)(Q2);