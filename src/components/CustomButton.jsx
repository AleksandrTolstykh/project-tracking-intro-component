import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background-color: ${props.background};
    border-radius: 15;
    color: ${props.color};
    font-family: 'Barlow Condensed';
    font-size: 16px;
    font-weight: 700;
    &:hover {
      background-color: ${props.background};
      opacity: 0.5;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
