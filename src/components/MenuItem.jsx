import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function MenuItem(props) {
  const StyledButton = styled(Button)`
    background-color: hsl(207, 33%, 95%);
    border: none;
    color: ${props.color};
    font-family: 'Barlow Condensed';
    font-size: 16px;
    font-weight: 700;
    &:hover {
      background-color: hsl(207, 33%, 95%);
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  return (
    <StyledButton>{props.text}</StyledButton>
  );
}

export default MenuItem;
