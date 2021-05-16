import React from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Item from './MenuItem';

const StyledMenu = withStyles({
  paper: {
    width: '100%',
    display: 'block',
    marginTop: '5px',
    backgroundColor: 'hsl(207, 33%, 95%)',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = styled(MenuItem)`
  margin: '10px';
  &:hover {
    background-color: hsl(207, 33%, 95%);
  }
`;

const useStyles = makeStyles({
  block: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function NavigationMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component='div'>
      <IconButton aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
        <MenuIcon className={anchorEl ? classes.hidden : classes.block} />
        <CloseIcon className={anchorEl ? classes.block : classes.hidden} />
      </IconButton>
      <StyledMenu
        id='menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem className={classes.item}>
          <Item
            color='hsl(230, 29%, 20%)'
            text='Product'
          />
        </StyledMenuItem>
        <StyledMenuItem className={classes.item}>
          <Item
            color='hsl(230, 29%, 20%)'
            text='Features'
          />
        </StyledMenuItem>
        <StyledMenuItem className={classes.item}>
          <Item
            color='hsl(230, 29%, 20%)'
            text='Pricing'
          />
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem className={classes.item}>
          <Item
            color='hsl(231, 7%, 65%)'
            text='Login'
          />
        </StyledMenuItem>
      </StyledMenu>
    </Box>
  );
}

export default NavigationMenu;
