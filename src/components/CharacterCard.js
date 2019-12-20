import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`  
  max-width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`


const Cards = props  => {
  console.log(props);
  const { name } = props.person;
  return (
    <StyledDiv>
      <Card>
        <CardHeader>Name: {name}</CardHeader>
      </Card>
    </StyledDiv>
  );
  }

export default Cards;