import React from 'react';
import imageDictionary from '../utils/weatherIcons.js';
import { Container, BigText, BigIcon, Description } from '../utils/Styles';

const Loading = (props) => {
  return (
    <Container>
      <BigText>Welcome!</BigText>
      <BigIcon source={imageDictionary['01d']} />
      <Description>Loading...</Description>
    </Container>
  );
};
export default Loading;
