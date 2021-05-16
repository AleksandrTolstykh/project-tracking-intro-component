import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MenuItem from './MenuItem';
import NavigationMenu from './NavigationMenu';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
});

const Divider = styled(FiberManualRecordIcon)`
  color: hsl(231, 7%, 65%);
  width: 10px;
`;

const Icon = styled(IconButton)`
  &:hover {
    background-color: #fff;
  }
`;

function NavigationBar() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <img src='images/logo.svg' alt='logo' />
          </Grid>
          <Grid container justify="flex-end">
            <Hidden smDown>
              <MenuItem
                color='hsl(230, 29%, 20%)'
                text='Product'
              />
              <MenuItem
                color='hsl(230, 29%, 20%)'
                text='Features'
              />
              <MenuItem
                color='hsl(230, 29%, 20%)'
                text='Pricing'
              />
              <Icon>
                <Divider />
              </Icon>
              <MenuItem
                color='hsl(231, 7%, 65%)'
                text='Login'
              />
            </Hidden>
            <Hidden mdUp>
              <NavigationMenu />
            </Hidden>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
