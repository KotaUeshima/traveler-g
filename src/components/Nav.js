import React from 'react';
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';



const ResponsiveAppBar = () => {
  return (
    <Styles.Container>
      <Styles.Title>
        Where in the World?
      </Styles.Title>
      <Styles.NavLink to="/">
        HOME
      </Styles.NavLink>
      <Styles.NavLink to="/about">
        ABOUT
      </Styles.NavLink>
    </Styles.Container>
  );
};

// li a:hover {
//   background-color: #111;
// }
export default ResponsiveAppBar;

const Styles = {
  NavLink: styled(Link)`
    color: black;
    margin-right: 20px;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    &:hover,
  &:focus {
  color: black;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;


  &:active {
    color: white;
  }
  }
  `,
  Container: styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    min-width: 0;
    background-color: #bcdfdf;
    width: 100vw;
  `,
  Title: styled.h1`
  margin-left: 15px;
  margin-right: 200px;
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
  `,
}
