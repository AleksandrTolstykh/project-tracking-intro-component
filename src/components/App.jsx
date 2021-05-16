import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';
import CustomButton from './CustomButton';
import Footer from './Footer';

document.body.style.overflowX = 'hidden';

const useStyles = makeStyles(theme => ({
  background: {
    width: '50%',
    height: '75%',
    backgroundColor: 'hsl(207, 33%, 95%)',
    borderRadius: 50,
    position: 'absolute',
    right: -50,
    top: -50,
    zIndex: -1,
    overflowX: 'hidden',
  },
  container: {
    margin: 150,
    overflowX: 'hidden',
    [theme.breakpoints.down('sm')]: {
      margin: 25,
    },
  },
  item1: {
    order: 2,
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      order: 1,
      marginTop: 0,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  chip: {
    backgroundColor: 'hsl(230, 29%, 20%)',
    color: '#fff',
    fontFamily: 'Barlow Condensed',
    fontSize: '16px',
    fontWeight: 700,
  },
  label: {
    color: 'hsl(231, 7%, 65%)',
    fontFamily: 'Barlow Condensed',
    fontSize: '16px',
    letterSpacing: 5,
    margin: 15,
  },
  title: {
    color: 'hsl(230, 29%, 20%)',
    fontFamily: 'Barlow Condensed',
    fontSize: '60px',
    fontWeight: 700,
  },
  text: {
    color: 'hsl(230, 11%, 40%)',
    fontFamily: 'Barlow',
    fontSize: '16px',
    marginBottom: 50,
  },
  footer: {
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box>
      <Box component='div' className={classes.background}></Box>
      <NavigationBar />
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6} className={classes.item1}>
          <Chip className={classes.chip} label='NEW' />
          <span className={classes.label}>MONOGRAPH DASHBOARD</span>

          <h1 className={classes.title}>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          <p className={classes.text}>Project planning and time tracking for agile teams</p>

          <CustomButton
            content='Schedule a demo'
            background='hsl(0, 100%, 68%)'
            color='#fff'
          />
          <span className={classes.label}>TO SEE A LIVE PREVIEW</span>
        </Grid>
        <Grid item xs={12} md={6} className={classes.item2}>
          <img src='images/illustration-devices.svg' alt='illustration-devices' width='125%' />
        </Grid>
      </Grid>
      <Container className={classes.footer}>
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
