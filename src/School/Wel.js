import React,{Component,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles,makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
class I extends Component{
    render() {
//   const {classes} = this.props;

  return (
  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to the School Dashboard
            </Typography>
  );}}
  export default withStyles(useStyles)(I);