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

export default ResponsiveAppBar;

const Styles = {
  NavLink: styled(Link)`
    color: black;
    margin-right: 20px;
    text-decoration: none;
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
    font-size: 20px;
    /* margin: 10px; */
  `,
}
