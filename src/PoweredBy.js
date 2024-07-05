import React from 'react';
import styled from '@emotion/styled';

const PoweredByDiv = styled.div`
  right: 20px;
  position: absolute;
  color: gray;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

export default function PoweredBy() {
    console.log(window.innerWidth)
    return <PoweredByDiv>Powered by <a href="http://www.tracardi.com" style={{color: "black"}}>TRACARDI</a></PoweredByDiv>
}