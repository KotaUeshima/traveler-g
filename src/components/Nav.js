import React from 'react';
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';

const ResponsiveAppBar = () => {
  return (
    <Styles.Container>
      <Styles.Title>
        Traveler
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
    color: yellow;
    margin-right: 20px;
    text-decoration: none;
  `,
  Container: styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    min-width: 0;
    background-color: purple;
    width: 100vw;
  `,
  Title: styled.h1`
    font-size: 20px;
    margin: 10px;
  `,
}
