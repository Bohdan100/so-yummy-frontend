import React from 'react';
import { useMedia } from 'react-use';

import Logo from '../../Logo/Logo';
import {
  Div,
  Title,
  List,
  Item,
  ArticleContainer,
} from './ArticleFooter.styled';

const ArticleFooter = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <ArticleContainer>
      <Div>
        <Logo inv="true" footer="true" />
        <Title>So Yummy</Title>
      </Div>
      {!isMobile && (
        <>
          <List>
            <Item>Database of recipes that can be replenished </Item>
            <Item>Flexible search for desired and unwanted ingredients</Item>
            <Item>Ability to add your own recipes with photos</Item>
            <Item>Convenient and easy to use</Item>
          </List>
        </>
      )}
    </ArticleContainer>
  );
};

export default ArticleFooter;
