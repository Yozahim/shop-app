import React from "react";

import './homepage.styles.scss'

import Directory from '../../components/directory/directory'

import { HomePageContainer } from './homepage.style'

const HomePage = () => (
  <HomePageContainer>
    <Directory/>
  </HomePageContainer>
);

export default HomePage